import { useQuery } from '@tanstack/react-query'

import { Keys } from '@/infra'

import { categoryService } from '../categoryService'

type Params = {
  page: number
  perPage: number
}

export function useGetAllCategories({ page = 1, perPage = 10 }: Params) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [Keys.GET_CATEGORIES_KEY],
    queryFn: () =>
      categoryService.getAll({
        page,
        perPage,
      }),
  })

  return {
    categories: data,
    isLoading,
    isError,
  }
}
