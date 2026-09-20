import { getPageById, getPageSummariesByPageId } from '@/modules/summary/summary.service';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DeleteSummaryButton from './DeleteSummaryButton';

export default async function PageSummariesManagement({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  const page = await getPageById(pageId);
  
  if (!page) {
    notFound();
  }

  const summaries = await getPageSummariesByPageId(pageId);

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/summaries" className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Summary: {page.title}</h1>
          <p className="text-gray-500 mt-1">Daftar ringkasan atau topik-topik kecil untuk halaman ini.</p>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href={`/dashboard/summaries/${page.id}/create`}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Tambah Topik / Summary</span>
        </Link>
      </div>

      <div className="space-y-4">
        {summaries.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
            <p className="text-gray-500">Belum ada summary untuk halaman materi ini.</p>
          </div>
        ) : (
          summaries.map((summary) => (
            <div key={summary.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{summary.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Urutan: {summary.orderIndex}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/dashboard/summaries/${page.id}/edit/${summary.id}`}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </Link>
                  <DeleteSummaryButton summaryId={summary.id} />
                </div>
              </div>
              <div className="prose prose-sm prose-blue max-w-none bg-gray-50 rounded-lg p-4 text-gray-700 whitespace-pre-wrap font-mono text-xs">
                {summary.content}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
