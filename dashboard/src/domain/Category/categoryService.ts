import { categoryApi } from './categoryApi';
import { GetAllCategoriesRequestParams } from './categoryType';

export async function create(name: string) {
	await categoryApi.create(name);
}

export async function getAll({ page , perPage }: GetAllCategoriesRequestParams) {
	const { categories } = await categoryApi.getAll({
		page,
		perPage
	});
	return categories;
}

export const categoryService = {
	create,
	getAll
};