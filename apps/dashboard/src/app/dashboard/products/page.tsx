import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'

import { Header } from '../_components'

export default function Products() {
  return (
    <section className="flex flex-col">
      <Header>Produtos</Header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagem</TableHead>
            <TableHead>Nome do produto</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Categoria</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b">
            <TableCell>a</TableCell>
            <TableCell>a</TableCell>
            <TableCell>a</TableCell>
            <TableCell>a</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}
