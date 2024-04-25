import { useMutation } from '@tanstack/react-query';

import { Keys } from '@/infra';

import { categoryService } from '../categoryService';

export function useCreateCategory() {
	const { mutate, isPending, isError } = useMutation<void, Error, { name: string }>({
		mutationKey: [Keys.CREATE_CATEGORY_KEY],
		mutationFn: variables => categoryService.create(variables.name)
	});
  
	return {
		create: (name: string) => mutate({ name }),
		isPending,
		isError
	};
}