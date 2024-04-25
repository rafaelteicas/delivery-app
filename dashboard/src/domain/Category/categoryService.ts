import { categoryApi } from './categoryApi';

export async function create(name: string) {
	await categoryApi.create(name);
}

export const categoryService = {
	create
};