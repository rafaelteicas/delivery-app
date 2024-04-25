import { api } from '@/api';

export async function create(name: string) {
	await api.post('/category', { name });
}
 
export const categoryApi = {
	create
};