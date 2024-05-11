'use client';

import { Pencil, Trash } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { Badge,Table, TableBody,TableCell,TableHead, TableHeader, TableRow } from '@/components';
import { useGetAllCategories, useRemoveCategory } from '@/domain';
import { env } from '@/infra';

export function CategoriesData() {
	const params = useSearchParams();
	const pageParam = params.get('page');
	const perPageParam = params.get('perPage');
	const page = pageParam ? parseInt(pageParam) : 1;
	const perPage = perPageParam ? parseInt(perPageParam) : 10;	

	const { remove } = useRemoveCategory();
	function handleRemoveCategory(categoryId: string) {
		remove(categoryId);
	}
	const { categories } = useGetAllCategories({
		page,
		perPage
	});

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Imagem</TableHead>
					<TableHead>Título</TableHead>
					<TableHead>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{categories?.data.map(category => (
					<TableRow key={category.name}>
						<TableCell>
							<Image 
								src={`${env.API_URL}${category.image}`}
								width={100}
								height={100}
								alt='Imagem de categoria'
								className='w-16 h-16'
							/>
						</TableCell>
						<TableCell>{category.name}</TableCell>
						<TableCell>
							<Badge title={category.status ? 'Ativo' : 'Desativado'}  type={category.status ? 'success' : 'error'} />
						</TableCell>
						<TableCell>
							<Pencil size={20} />
							<Trash size={20} className='text-rose-500' onClick={() => handleRemoveCategory(category.id)} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
