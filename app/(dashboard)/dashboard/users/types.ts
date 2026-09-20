export type Role = 'SUPERADMIN' | 'GURU' | 'MURID';

export interface UserRow {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string; // ISO string
}

export type SortDirection = 'asc' | 'desc';
export type SortColumn = keyof UserRow | null;
