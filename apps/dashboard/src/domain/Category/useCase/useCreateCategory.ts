import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Keys } from '@/infra'

import { categoryService } from '../categoryService'

export function useCreateCategory() {
  const queryClient = useQueryClient()
  const { mutate, isPending, isError } = useMutation<
    void,
    Error,
    { data: FormData }
  >({
    mutationKey: [Keys.CREATE_CATEGORY_KEY],
    mutationFn: ({ data }) => categoryService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [Keys.GET_CATEGORIES_KEY],
      })
    },
  })

  return {
    create: (data: FormData) => mutate({ data }),
    isPending,
    isError,
  }
}
