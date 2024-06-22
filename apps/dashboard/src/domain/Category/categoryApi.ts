import { api } from '@/api'

import {
  CategoryResponseDataType,
  GetAllCategoriesRequestParams,
} from './categoryType'

export async function create(data: FormData) {
  await api.postForm('/category', data)
}

async function getAll({
  page,
  perPage,
}: GetAllCategoriesRequestParams): Promise<CategoryResponseDataType> {
  const response = await api.get<CategoryResponseDataType>('/category', {
    params: {
      page,
      perPage,
    },
  })

  return response.data
}

async function remove(categoryId: string) {
  await api.delete(`/category/${categoryId}`)
}

export const categoryApi = {
  create,
  getAll,
  remove,
}
