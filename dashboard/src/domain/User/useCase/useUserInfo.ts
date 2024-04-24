import { useQuery } from '@tanstack/react-query';

import { Keys } from '@/infra';

import { userService } from '../userService';

export function useUserInfo() {
	const { data, isLoading, isError } = useQuery({
		queryKey: [Keys.USER_INFO_KEY],
		queryFn: () => userService.getUserInfo()
	});

	return {
		data,
		isLoading,
		isError
	};
}