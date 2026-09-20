import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { db } from '@/prisma/db';
import UsersClientPage from './client-page';
import { UserRow } from './types';

export default async function UsersPage() {
  const session = await getSession();
  
  if (!session || session.role !== 'SUPERADMIN') {
    redirect('/dashboard');
  }

  // Fetch all users
  const rawUsers = await db.orm.public.User.all();
  
  const initialUsers: UserRow[] = rawUsers.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role as 'SUPERADMIN' | 'GURU' | 'MURID',
    isActive: user.isActive,
    createdAt: user.createdAt
  }));

  return <UsersClientPage initialUsers={initialUsers} />;
}
