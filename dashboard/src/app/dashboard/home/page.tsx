import React from 'react';

import { Heading } from '@/components';
import { InfoCard } from '@/components/InfoCard/InfoCard';

export default function Dashboard() {

	return (
		<section>
			<Heading as="h1" size="2xl" className="mb-4">
        Visão geral
			</Heading>
			<div className="flex flex-row flex-1 justify-between">
				<InfoCard title="Vendas no dia" amount={1200} />
				<InfoCard title="Vendas no dia" amount={1200} />
				<InfoCard title="Vendas no dia" amount={1200} />
			</div>
		</section>
	);
}
