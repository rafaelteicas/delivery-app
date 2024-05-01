import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Keys } from '@/infra';

import { categoryService } from '../categoryService';

export function useCreateCategory() {
	const queryClient = useQueryClient();
	const { mutate, isPending, isError } = useMutation<void, Error, { name: string }>({
		mutationKey: [Keys.CREATE_CATEGORY_KEY],
		mutationFn: variables => categoryService.create(variables.name),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [Keys.GET_CATEGORIES_KEY],
			});			
		}
	});
  
	return {
		create: (name: string) => mutate({ name }),
		isPending,
		isError
	};
}