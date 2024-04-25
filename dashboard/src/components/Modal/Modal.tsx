'use client';

import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

type ModalProps = {
  title?: string
  children: React.ReactNode
}

export function Modal({children, title}: ModalProps) {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-black/35" />
			<Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded w-[500px]">
				<Dialog.Title className='text-lg font-medium pb-4'>{title}</Dialog.Title>
				{children}
			</Dialog.Content>
		</Dialog.Portal>
	);
}
