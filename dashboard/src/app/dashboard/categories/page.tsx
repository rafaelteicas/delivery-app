'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { FileUp, Pencil, Trash } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { Badge, Button, Heading, Input, Modal } from '@/components';
import { useCreateCategory } from '@/domain/Category/useCase/useCreateCategory';
import { useGetAllCategories } from '@/domain/Category/useCase/useGetAllCategories';
export default function Categories() {
	const [categoryName, setCategoryName] = useState('');
	const [image, setImage] = useState<File | null>(null);
	
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
					<tr>
						<th className='p-4 border-r'>Imagem</th>
						<th className="p-4 border-r w-full">Título</th>
						<th className="p-4 border-r w-full">Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{categories?.data.map(category => (
						<tr className="border bg-white" key={category.name}>
							<td className="p-4 border-r"></td>
							<td className="p-4 border-r">{category.name}</td>
							<td className="p-4 border-r">
								<Badge title={category.status ? 'Ativo' : 'Desativado'}  type={category.status ? 'success' : 'error'} />
							</td>
							<td className="p-4 flex gap-4 items-center">
								<Pencil size={20} />
								<Trash size={20} className='text-rose-500' />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal title='Criar categoria'>
				<form action='post' onSubmit={handleSendCategory} className='flex flex-col space-y-2'>
					<Input title='Nome da categoria' placeholder='Nome da categoria' value={categoryName} onChange={e => setCategoryName(e.target.value)} />
					<label>Selecione uma imagem:</label>
					<div className="w-14 h-14 border flex items-center justify-center rounded">
						<label htmlFor="actual-btn" className='w-12 h-12 overflow-hidden flex items-center justify-center'>
							{image && (
								<Image
									alt='Imagem selecionada'
									width={100}
									height={100}
									src={URL.createObjectURL(image!)}
									className='rounded'
								/>
							)}
							<FileUp className='text-gray-500' size={18} />
						</label>
						<input id="actual-btn" type='file' accept="image/*" onChange={e => setImage(e.target.files![0])} className='hidden' style={{ color: 'transparent' }} />
					</div>
				</form>
				<Button title='Enviar' type='submit' className='w-full mt-4' />
			</Modal>
		</section>
	);
}
