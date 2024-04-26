import React from 'react';

import { cn } from '@/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonProps {
	title: string
}

export function Button({ title, className, ...buttonProps }: Props) {
	return (
		<button
			className={cn('px-4 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700', className)}
			{...buttonProps}
		>
			<p className="text-white text-sm">{title}</p>
		</button>
	);
}
