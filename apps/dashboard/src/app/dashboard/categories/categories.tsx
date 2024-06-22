'use client'

import { Pencil, Trash } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import { Badge } from '@/components'
import { useGetAllCategories, useRemoveCategory } from '@/domain'
import { env } from '@/infra'

export function CategoriesData() {
  const params = useSearchParams()
  const pageParam = params.get('page')
  const perPageParam = params.get('perPage')
  const page = pageParam ? parseInt(pageParam) : 1
  const perPage = perPageParam ? parseInt(perPageParam) : 10

  const { remove } = useRemoveCategory()
  function handleRemoveCategory(categoryId: string) {
    remove(categoryId)
  }

  const { categories } = useGetAllCategories({
    page,
    perPage,
  })

  return (
    <table
      className={
        'mt-10 border table-auto flex-1 text-left w-full text-sm shadow-sm'
      }
    >
      <thead>
        <tr>
          <th className={'p-4 border-r'}> Imagem</th>
          <th className={'p-4 border-r'}>Título</th>
          <th className={'p-4 border-r'}>Status</th>
        </tr>
      </thead>
      <tbody>
        {categories?.data.map((category) => (
          <tr key={category.name}>
            <td>
              <Image
                src={`${env.API_URL}/${category.image}`}
                width={100}
                height={100}
                alt="Imagem de categoria"
                className="w-16 h-16"
              />
            </td>
            <td>{category.name}</td>
            <td>
              <Badge
                title={category.status ? 'Ativo' : 'Desativado'}
                type={category.status ? 'success' : 'error'}
              />
            </td>
            <td>
              <Pencil size={20} />
              <Trash
                size={20}
                className="text-rose-500"
                onClick={() => handleRemoveCategory(category.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
