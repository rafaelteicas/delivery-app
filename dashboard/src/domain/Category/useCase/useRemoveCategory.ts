import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Keys } from '@/infra';

import { categoryService } from '../categoryService';

export function useRemoveCategory() {
	const queryClient = useQueryClient();

	const {mutate, isPending, isError} = useMutation<void, Error, {categoryId: string}>({
		mutationKey: [Keys.REMOVE_CATEGORY_KEY],
		mutationFn: ({categoryId}) => categoryService.remove(categoryId),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: [Keys.GET_CATEGORIES_KEY]
			});
		}
	});
  
	return {
		remove: (categoryId: string) => mutate({ categoryId }),
		isPending,
		isError
	};
}