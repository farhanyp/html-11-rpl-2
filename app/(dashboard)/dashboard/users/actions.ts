'use server';

import { db } from '@/prisma/db';
import { getSession } from '@/lib/session';
import bcrypt from 'bcryptjs';
import { Role } from './types';
import { revalidatePath } from 'next/cache';

async function checkAdmin() {
  const session = await getSession();
  if (!session || session.role !== 'SUPERADMIN') {
    throw new Error('Unauthorized');
  }
}

export async function bulkResetPassword(userIds: string[]) {
  await checkAdmin();
  const hashedPassword = await bcrypt.hash('password', 10);
  
  // Update one by one since Prisma 8 might have specific bulk syntax
  for (const id of userIds) {
    await db.orm.public.User.where({ id }).update({ password: hashedPassword });
  }

  revalidatePath('/dashboard/users');
  return { success: true, message: 'Password berhasil direset menjadi "password"' };
}

export async function bulkChangeRole(userIds: string[], newRole: Role) {
  await checkAdmin();
  
  for (const id of userIds) {
    await db.orm.public.User.where({ id }).update({ role: newRole });
  }

  revalidatePath('/dashboard/users');
  return { success: true, message: `Role berhasil diubah menjadi ${newRole}` };
}

export async function bulkToggleActive(userIds: string[], isActive: boolean) {
  await checkAdmin();
  
  for (const id of userIds) {
    await db.orm.public.User.where({ id }).update({ isActive });
  }

  revalidatePath('/dashboard/users');
  return { success: true, message: `Akun berhasil di${isActive ? 'aktifkan' : 'nonaktifkan'}` };
}
