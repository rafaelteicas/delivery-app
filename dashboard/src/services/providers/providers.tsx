'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

import { AuthProvider } from '../auth';

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: { retry: false },
					mutations: { retry: false },
				},
			})
	);
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Dialog.Root>
					{children}
				</Dialog.Root>
			</AuthProvider>
		</QueryClientProvider>
	);
}
