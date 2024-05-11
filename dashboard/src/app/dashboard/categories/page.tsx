import React from 'react';

import { Button } from '@/components';

import { Header, SectionContainer } from '../_components';
import { CategoriesData } from './categories';
import { CategoryModal } from './modal';

export default function Categories() {
	return (
		<SectionContainer>
			<div className="flex flex-row justify-between">
				<Header>Categorias</Header>
				<Button title="Adicionar categoria" modalTrigger />
			</div>
			<CategoriesData />
			<CategoryModal />
		</SectionContainer>
	);
}
