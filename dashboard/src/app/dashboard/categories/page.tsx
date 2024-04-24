import React from 'react';

import { Button, Heading } from '@/components';

export default function Categories() {
	return (
		<section className="flex flex-col">
			<header className="flex justify-between items-center">
				<Heading as="h1" size="2xl">
          Categorias
				</Heading>
				<Button title="Adicionar categoria" />
			</header>

			<table className="mt-10 border table-auto flex-1 text-left w-full text-sm shadow-sm">
				<thead>
					<tr className="">
						<th className="p-4 border-r">Título</th>
						<th className="p-4 border-r">Status</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					<tr className="border bg-white">
						<td className="p-4 border-r">Olá</td>
						<td className="p-4 border-r">Olá</td>
						<td className="p-4">Olá</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
