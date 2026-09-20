'use server';

import { getSession } from '@/lib/session';

export async function getUserSession() {
  const session = await getSession();
  if (!session) return null;
  return {
    email: session.email as string,
    role: session.role as string,
    name: (session.name as string) || session.email.split('@')[0],
  };
}

export async function logoutAction() {
  const { deleteSession } = await import('@/lib/session');
  await deleteSession();
}
