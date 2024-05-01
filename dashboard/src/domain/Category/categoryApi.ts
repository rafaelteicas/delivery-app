import { api } from '@/api';

import { CategoryResponseDataType, GetAllCategoriesRequestParams } from './categoryType';

export async function create(name: string) {
	await api.post('/category', { name });
}

async function getAll({ page, perPage }: GetAllCategoriesRequestParams): Promise<CategoryResponseDataType> {
	const response = await api.get<CategoryResponseDataType>('/category', {
		params: {
			page,
			perPage
		}
	});
	console.log(response.data);
	
	return response.data;
}
 
export const categoryApi = {
	create,
	getAll
};