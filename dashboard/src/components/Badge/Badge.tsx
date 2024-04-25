import React from 'react';

import { cn } from '@/utils';

type BadgeProps = {
  title: string
  type: 'success' | 'error'
}

export function Badge({title, type} :BadgeProps) {
	return (
		<span className={cn('px-4 py-2 rounded-full', {
			'bg-rose-500/45 text-rose-800 font-medium': type === 'error',
			'bg-teal-500/45 text-teal-800 font-medium': type === 'success',
		})}>{title}</span>
	);
}
