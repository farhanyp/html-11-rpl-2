'use client';

import React, { useState } from 'react';
import { updatePageAccess } from '@/app/actions/student-access';

type PageAccessStatus = 'LOCKED' | 'UNLOCKED' | 'COMPLETED';

type Page = {
  id: string;
  title: string;
  slug: string;
  orderIndex: number;
  accessStatus: PageAccessStatus;
};

type Category = {
  id: string;
  name: string;
  pages: Page[];
};

export default function AccessListClient({ studentId, categories }: { studentId: string, categories: Category[] }) {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [errorPopup, setErrorPopup] = useState<{ isOpen: boolean; message: string }>({ isOpen: false, message: '' });
  
  // Local state to optimistic update
  const [localCategories, setLocalCategories] = useState<Category[]>(categories);

  const handleStatusChange = async (categoryId: string, pageId: string, newStatus: PageAccessStatus) => {
    setLoadingId(pageId);
    
    // Optimistic UI update
    setLocalCategories(prev => prev.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          pages: cat.pages.map(p => p.id === pageId ? { ...p, accessStatus: newStatus } : p)
        };
      }
      return cat;
    }));

    try {
      await updatePageAccess(studentId, pageId, newStatus);
    } catch (error: any) {
      // Revert on error
      setLocalCategories(categories);
      setErrorPopup({ isOpen: true, message: error.message || 'Gagal mengubah status akses.' });
    } finally {
      setLoadingId(null);
    }
  };

  const getStatusBadge = (status: PageAccessStatus) => {
    switch (status) {
      case 'LOCKED':
        return (
          <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-red-100">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Terkunci
          </span>
        );
      case 'UNLOCKED':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-blue-100">
            <span className="material-symbols-outlined text-[14px]">lock_open</span>
            Terbuka
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-100">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Selesai
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {localCategories.map((category) => (
        <div key={category.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
            <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {category.pages.length} Halaman
            </span>
          </div>
          
          {category.pages.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {category.pages.map((page) => (
                <div key={page.id} className="p-4 px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {getStatusBadge(page.accessStatus)}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{page.title}</h3>
                      <p className="text-xs font-mono text-gray-500 mt-0.5">/{page.slug}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <select 
                      disabled={loadingId === page.id}
                      value={page.accessStatus}
                      onChange={(e) => handleStatusChange(category.id, page.id, e.target.value as PageAccessStatus)}
                      className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 bg-white"
                    >
                      <option value="LOCKED">Kunci (Locked)</option>
                      <option value="UNLOCKED">Buka (Unlocked)</option>
                      <option value="COMPLETED">Selesai (Completed)</option>
                    </select>
                    
                    {loadingId === page.id && (
                      <span className="material-symbols-outlined animate-spin text-blue-600 text-sm">refresh</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500 text-sm">
              Belum ada halaman materi di kategori ini.
            </div>
          )}
        </div>
      ))}

      {localCategories.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
          Belum ada materi kategori apapun di sistem.
        </div>
      )}

      {errorPopup.isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-sm p-6 text-center">
            <div className="mx-auto mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600">
              <span className="material-symbols-outlined text-2xl">error</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Terjadi Kesalahan</h3>
            <p className="text-sm text-gray-600 mb-6">{errorPopup.message}</p>
            <button
              onClick={() => setErrorPopup({ isOpen: false, message: '' })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors font-medium"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
