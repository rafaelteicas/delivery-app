import React from 'react';

import { Heading } from '@/components';

export default function Products() {
	return (
		<section className="flex flex-col">
			<header className="flex justify-between items-center">
				<Heading as="h1" size="2xl">
					Produtos
				</Heading>
			</header>
		</section>
	);
}
