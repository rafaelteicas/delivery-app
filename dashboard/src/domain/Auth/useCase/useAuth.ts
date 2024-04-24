import { useMutation } from '@tanstack/react-query';

import { Keys } from '@/infra';
import { useAuthCredentials } from '@/services';

import { authService } from '../authService';

type Variables = {
  email: string
  password: string
}

export function useAuth() {
	const {saveAuth} = useAuthCredentials();
	const mutation = useMutation<{ token: string }, Error, Variables>({
		mutationKey: [Keys.AUTHENTICATION_KEY],
		mutationFn:  ({ email, password }) =>
			authService.authenticate({
				email,
				password,
			}),
		onSuccess: (data) => {
			alert('deu');
			saveAuth({
				token: data.token
			});
		}
	});

	return {
		authenticate: (data: Variables) => mutation.mutate(data),
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
}
