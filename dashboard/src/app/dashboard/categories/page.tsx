'use client';

import * as Dialog from '@radix-ui/react-dialog';
import React, { FormEvent, useState } from 'react';

import { Button, Heading, Input } from '@/components';
import { useCreateCategory } from '@/domain/Category/useCase/useCreateCategory';

export default function Categories() {
	const [categoryName, setCategoryName] = useState('');

	const {create} = useCreateCategory();

	function handleSendCategory(e: FormEvent) {
		e.preventDefault();
		create(categoryName);
	}

	return (
		<Dialog.Root>
			<section className="flex flex-col">
				<header className="flex justify-between items-center">
					<Heading as="h1" size="2xl">
          Categorias
					</Heading>
					<Dialog.Trigger asChild>
						<Button title="Adicionar categoria" />
					</Dialog.Trigger>
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
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/35" />
				<Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded w-[500px]">
					<Dialog.Title className='text-lg font-medium pb-4' >
						Criar categoria
					</Dialog.Title>
					<form action='post' onSubmit={handleSendCategory} className='space-y-4'>
						<Input title='Nome da categoria' placeholder='Nome da categoria' value={categoryName} onChange={e => setCategoryName(e.target.value)} />
						<Button title='Enviar' type='submit' />
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
