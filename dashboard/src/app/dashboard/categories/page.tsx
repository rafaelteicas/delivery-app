'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useSearchParams } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { Badge, Button, Heading, Input, Modal } from '@/components';
import { useCreateCategory } from '@/domain/Category/useCase/useCreateCategory';
import { useGetAllCategories } from '@/domain/Category/useCase/useGetAllCategories';
export default function Categories() {
	const [categoryName, setCategoryName] = useState('');
	
	const params = useSearchParams();
	const pageParam = params.get('page');
	const perPageParam = params.get('perPage');
	const page = pageParam ? parseInt(pageParam) : 1;
	const perPage = perPageParam ? parseInt(perPageParam) : 10;

	const { create } = useCreateCategory();
	const { categories } = useGetAllCategories({
		page,
		perPage
	});

	function handleSendCategory(e: FormEvent) {
		e.preventDefault();
		create(categoryName);
	}

	return (
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
					{categories?.data.map(category => (
						<tr className="border bg-white" key={category.name}>
							<td className="p-4 border-r">{category.name}</td>
							<td className="p-4 border-r">
								<Badge title={category.status ? 'Ativo' : 'Desativo'}  type={category.status ? 'success' : 'error'} />
							</td>
							<td className="p-4">Olá</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal title='Criar categoria'>
				<form action='post' onSubmit={handleSendCategory} className='space-y-4'>
					<Input title='Nome da categoria' placeholder='Nome da categoria' value={categoryName} onChange={e => setCategoryName(e.target.value)} />
					<Button title='Enviar' type='submit' />
				</form>
			</Modal>
		</section>
	);
}
