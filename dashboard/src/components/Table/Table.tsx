'use client'

import React, { forwardRef } from 'react'

import { cn } from '@/utils'

export const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className }, ref) => (
  <table
    ref={ref}
    className={cn(
      'mt-10 border table-auto flex-1 text-left w-full text-sm shadow-sm',
      className,
    )}
  />
))
Table.displayName = 'Table'

export const TableHead = forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className }, ref) => (
  <th ref={ref} className={cn('p-4 border-r', className)} />
))
TableHead.displayName = 'TableHead'

export const TableCell = forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className }, ref) => (
  <td ref={ref} className={cn('p-4 border-r', className)} />
))
TableCell.displayName = 'TableCell'

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className }, ref) => <thead ref={ref} className={cn(className)} />)
TableHeader.displayName = 'TableHeader'

export const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className }, ref) => <tr ref={ref} className={cn(className)} />)
TableRow.displayName = 'TableRow'

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className }, ref) => <tbody ref={ref} className={cn(className)} />)
TableBody.displayName = 'TableBody'
