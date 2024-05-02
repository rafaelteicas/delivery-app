import { categoryApi } from './categoryApi';
import { GetAllCategoriesRequestParams } from './categoryType';

async function create(data: FormData) {
	await categoryApi.create(data);
}

async function getAll({ page , perPage }: GetAllCategoriesRequestParams) {
	const { categories } = await categoryApi.getAll({
		page,
		perPage
	});
	return categories;
}

async function remove(categoryId: string) {
	await categoryApi.remove(categoryId);
}

export const categoryService = {
	create,
	getAll,
	remove
};