import React from 'react';

import { Heading } from '../Text/Text';

interface InfoCardProps {
  title: string
  amount: number
}

export function InfoCard({ title, amount }: InfoCardProps) {
	return (
		<div className="p-4 border rounded-md w-96">
			<Heading>{title}</Heading>
			<p className="text-zinc-600">
        R${' '}
				<span className="text-2xl text-zinc-800 font-bold">
					{amount.toLocaleString('pt-BR')}
				</span>
			</p>
		</div>
	);
}
