'use server';

import { revalidatePath } from 'next/cache';
import { PageSummarySchema, PageSummaryInput } from '@/modules/summary/summary.schema';
import * as summaryService from '@/modules/summary/summary.service';

export async function createSummaryAction(data: PageSummaryInput) {
  const parsed = PageSummarySchema.parse(data);
  const result = await summaryService.createSummary(parsed);
  revalidatePath('/dashboard/summaries', 'layout');
  return result;
}

export async function updateSummaryAction(id: string, data: PageSummaryInput) {
  const parsed = PageSummarySchema.parse(data);
  const result = await summaryService.updateSummary(id, parsed);
  revalidatePath('/dashboard/summaries', 'layout');
  return result;
}

export async function deleteSummaryAction(id: string) {
  const result = await summaryService.deleteSummary(id);
  revalidatePath('/dashboard/summaries', 'layout');
  return result;
}
