'use client';

import { useState } from 'react';
import { deleteSummaryAction } from '@/app/actions/summary';

export default function DeleteSummaryButton({ summaryId }: { summaryId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Apakah Anda yakin ingin menghapus summary ini?')) return;
    
    setIsDeleting(true);
    try {
      await deleteSummaryAction(summaryId);
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus summary');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
      title="Hapus"
    >
      <span className="material-symbols-outlined text-[20px]">delete</span>
    </button>
  );
}
