'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSummaryAction, updateSummaryAction } from '@/app/actions/summary';
import { PageSummaryInput } from '@/modules/summary/summary.schema';
import Link from 'next/link';

type SummaryData = {
  id?: string;
  pageId: string;
  title: string;
  content: string;
  orderIndex: number;
};

export default function SummaryForm({ 
  initialData, 
  pageId,
  isEdit = false 
}: { 
  initialData?: SummaryData; 
  pageId: string;
  isEdit?: boolean;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<PageSummaryInput>({
    pageId: pageId,
    title: initialData?.title || '',
    content: initialData?.content || '',
    orderIndex: initialData?.orderIndex || 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'orderIndex' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (isEdit && initialData?.id) {
        await updateSummaryAction(initialData.id, formData);
      } else {
        await createSummaryAction(formData);
      }
      router.push(`/dashboard/summaries/${pageId}`);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat menyimpan summary');
    } finally {
      setIsSubmitting(false);
    }
  };

  const charCount = formData.content.length;
  const isOverLimit = charCount > 3000;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <form onSubmit={handleSubmit}>
        <div className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Judul Topik / Summary
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              placeholder="Misal: Pengenalan HTML Dasar"
            />
          </div>

          <div>
            <label htmlFor="orderIndex" className="block text-sm font-medium text-gray-700 mb-1">
              Urutan (Order Index)
            </label>
            <input
              type="number"
              id="orderIndex"
              name="orderIndex"
              required
              min="1"
              value={formData.orderIndex}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Konten (Markdown Mendukung)
              </label>
              <span className={`text-xs ${isOverLimit ? 'text-red-600 font-bold' : 'text-gray-500'}`}>
                {charCount} / 3000 karakter
              </span>
            </div>
            <textarea
              id="content"
              name="content"
              required
              rows={12}
              value={formData.content}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 outline-none transition-shadow font-mono text-sm ${
                isOverLimit 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50' 
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
              placeholder="Tulis ringkasan materi di sini menggunakan format Markdown..."
            />
            {isOverLimit && (
              <p className="mt-1 text-sm text-red-600">Konten melebihi batas maksimum 3000 karakter yang disarankan untuk AI.</p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <Link
            href={`/dashboard/summaries/${pageId}`}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-4 py-2 transition-colors flex items-center gap-2"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={isSubmitting || isOverLimit}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            {isSubmitting ? 'Menyimpan...' : 'Simpan Summary'}
          </button>
        </div>
      </form>
    </div>
  );
}
