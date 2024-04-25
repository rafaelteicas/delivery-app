import { authApi } from './authApi';
import { AuthenticateRequestDataType } from './authTypes';

async function authenticate(data: AuthenticateRequestDataType) {
	return authApi.authenticate(data);
}

export const authService = {
	authenticate
};
