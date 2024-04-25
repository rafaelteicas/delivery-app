'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/utils';

interface SidebarLinksProps {
  title: string
  path: string
  icon: React.ElementType
}

export function SidebarLinks({ title, path, icon: Icon }: SidebarLinksProps) {
	const pathName = usePathname();

	const selectedStyle = pathName.includes(path.split('/').join(''))
		? 'bg-zinc-200 before:absolute before:w-0.5 before:top-0 before:bottom-0 before:bg-orange-400 before:left-0'
		: '';

	return (
		<Link
			href={`/dashboard/${path}`}
			className={cn('relative px-4 py-2 font-base flex-row flex items-center gap-4 hover:bg-zinc-200', selectedStyle)}
		>
			<Icon className="text-orange-500 w-4 h-4" />
			{title}
		</Link>
	);
}
