'use client';

import { useState, useMemo, useEffect } from 'react';
import { UserRow, SortColumn, SortDirection, Role } from './types';
import { formatDate, filterUsers, sortUsers } from '@/lib/user-helpers';
import { bulkResetPassword, bulkChangeRole, bulkToggleActive } from './actions';

interface ClientPageProps {
  initialUsers: UserRow[];
}

export default function UsersClientPage({ initialUsers }: ClientPageProps) {
  const [users, setUsers] = useState<UserRow[]>(initialUsers);
  const [sortColumn, setSortColumn] = useState<SortColumn>('createdAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Search debounce states
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue]);

  // Apply filter & sort locally
  const displayedUsers = useMemo(() => {
    let result = filterUsers(users, searchQuery);
    result = sortUsers(result, sortColumn, sortDirection);
    return result;
  }, [users, searchQuery, sortColumn, sortDirection]);

  // Reset to page 1 if filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(displayedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = displayedUsers.slice(startIndex, startIndex + itemsPerPage);

  // Handle Select All
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      // Add all visible users on current page to the selection
      const newSet = new Set(selectedIds);
      paginatedUsers.forEach(u => newSet.add(u.id));
      setSelectedIds(newSet);
    } else {
      // Remove all visible users on current page from the selection
      const newSet = new Set(selectedIds);
      paginatedUsers.forEach(u => newSet.delete(u.id));
      setSelectedIds(newSet);
    }
  };

  // Handle single select
  const handleSelectOne = (id: string, checked: boolean) => {
    const newSet = new Set(selectedIds);
    if (checked) newSet.add(id);
    else newSet.delete(id);
    setSelectedIds(newSet);
  };

  // Handle Sort
  const handleSort = (col: keyof UserRow) => {
    if (sortColumn === col) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(col);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (col: keyof UserRow) => {
    if (sortColumn !== col) return 'unfold_more';
    return sortDirection === 'asc' ? 'expand_less' : 'expand_more';
  };

  // Actions
  const runAction = async (actionFn: () => Promise<any>) => {
    setIsProcessing(true);
    setMessage(null);
    try {
      const res = await actionFn();
      setMessage({ type: 'success', text: res.message });
      // Update local state to reflect changes instead of doing a full reload
      // But revalidatePath will refresh data on next navigation anyway.
      // We can trigger a router.refresh() if we want, but since we modify local state it's fine.
    } catch (e: any) {
      setMessage({ type: 'error', text: e.message || 'Terjadi kesalahan' });
    } finally {
      setIsProcessing(false);
      setSelectedIds(new Set()); // clear selection
    }
  };

  const onBulkResetPassword = () => {
    if (!confirm(`Yakin reset password ${selectedIds.size} user menjadi "password"?`)) return;
    runAction(() => bulkResetPassword(Array.from(selectedIds)));
  };

  const onBulkChangeRole = (newRole: Role) => {
    if (!confirm(`Yakin mengubah role ${selectedIds.size} user menjadi ${newRole}?`)) return;
    runAction(async () => {
      const res = await bulkChangeRole(Array.from(selectedIds), newRole);
      // Update local state
      setUsers(prev => prev.map(u => selectedIds.has(u.id) ? { ...u, role: newRole } : u));
      return res;
    });
  };

  const onBulkToggleActive = (isActive: boolean) => {
    if (!confirm(`Yakin ${isActive ? 'mengaktifkan' : 'menonaktifkan'} ${selectedIds.size} user?`)) return;
    runAction(async () => {
      const res = await bulkToggleActive(Array.from(selectedIds), isActive);
      // Update local state
      setUsers(prev => prev.map(u => selectedIds.has(u.id) ? { ...u, isActive } : u));
      return res;
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
          <p className="text-gray-500 mt-1">Kelola data murid, guru, dan admin dalam satu tempat.</p>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
          {message.text}
        </div>
      )}

      {/* Control Bar: Search & Bulk Actions */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            type="text" 
            placeholder="Cari nama, email, atau role..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          <span className="text-sm text-gray-500 mr-2 whitespace-nowrap">
            {selectedIds.size} terpilih
          </span>
          <button 
            disabled={selectedIds.size === 0 || isProcessing}
            onClick={onBulkResetPassword}
            className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium whitespace-nowrap"
          >
            Reset Password
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          
          <button 
            disabled={selectedIds.size === 0 || isProcessing}
            onClick={() => onBulkChangeRole('MURID')}
            className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium whitespace-nowrap"
          >
            Jadikan Murid
          </button>
          <button 
            disabled={selectedIds.size === 0 || isProcessing}
            onClick={() => onBulkChangeRole('GURU')}
            className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium whitespace-nowrap"
          >
            Jadikan Guru
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          
          <button 
            disabled={selectedIds.size === 0 || isProcessing}
            onClick={() => onBulkToggleActive(true)}
            className="px-3 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium whitespace-nowrap"
          >
            Aktifkan
          </button>
          <button 
            disabled={selectedIds.size === 0 || isProcessing}
            onClick={() => onBulkToggleActive(false)}
            className="px-3 py-2 bg-red-50 border border-red-200 text-red-700 rounded-lg hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium whitespace-nowrap"
          >
            Nonaktifkan
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
                <th className="p-4 w-12">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      checked={paginatedUsers.length > 0 && paginatedUsers.every(u => selectedIds.has(u.id))}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                </th>
                <th className="p-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('name')}>
                  <div className="flex items-center gap-1">Nama <span className="material-symbols-outlined text-base">{getSortIcon('name')}</span></div>
                </th>
                <th className="p-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('email')}>
                  <div className="flex items-center gap-1">Email <span className="material-symbols-outlined text-base">{getSortIcon('email')}</span></div>
                </th>
                <th className="p-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('role')}>
                  <div className="flex items-center gap-1">Role <span className="material-symbols-outlined text-base">{getSortIcon('role')}</span></div>
                </th>
                <th className="p-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('isActive')}>
                  <div className="flex items-center gap-1">Status <span className="material-symbols-outlined text-base">{getSortIcon('isActive')}</span></div>
                </th>
                <th className="p-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('createdAt')}>
                  <div className="flex items-center gap-1">Terdaftar <span className="material-symbols-outlined text-base">{getSortIcon('createdAt')}</span></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    Tidak ada data pengguna yang ditemukan.
                  </td>
                </tr>
              ) : (
                paginatedUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        checked={selectedIds.has(user.id)}
                        onChange={(e) => handleSelectOne(user.id, e.target.checked)}
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-900">{user.name}</td>
                    <td className="p-4 text-gray-500">{user.email}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide
                        ${user.role === 'SUPERADMIN' ? 'bg-blue-100 text-blue-700' : 
                          user.role === 'GURU' ? 'bg-emerald-100 text-emerald-700' : 
                          'bg-gray-100 text-gray-700'}
                      `}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5
                        ${user.isActive ? 'text-emerald-600' : 'text-red-600'}
                      `}>
                        <span className={`w-2 h-2 rounded-full ${user.isActive ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                        {user.isActive ? 'Aktif' : 'Non-aktif'}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">
                      {formatDate(user.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-gray-200 bg-gray-50 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Tampilkan</span>
            <select 
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page
              }}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {[20, 50, 100, 200, 500, 1000].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <span>data per halaman</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Menampilkan {displayedUsers.length > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + itemsPerPage, displayedUsers.length)} dari {displayedUsers.length} data
            </span>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1 rounded text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1 rounded text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
