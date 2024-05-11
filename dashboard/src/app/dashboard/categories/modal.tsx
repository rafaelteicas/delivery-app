import { FileUp } from 'lucide-react';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react';

import { Button, Input, Modal } from '@/components';
import { useCreateCategory } from '@/domain';

export function CategoryModal() {
	const [categoryName, setCategoryName] = useState('');
	const [image, setImage] = useState<File | null>(null);
	
	const { create } = useCreateCategory();
	
	async function handleSendCategory(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData();
		if(!image) {
			return null;
		}
		formData.append('image', image);
		formData.append('body', categoryName);
		create(formData);
	}

	return (
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
				<Button title='Enviar' type='submit' className='w-full mt-4' />
			</form>
		</Modal>
      

            
	);
}