'use client'

import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

import { cn } from '@/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonProps {
  title: string
  modalTrigger?: boolean
}

export function Button({ title, className, ...buttonProps }: Props) {
  return (
    <Dialog.Trigger asChild>
      <button
        className={cn(
          'px-4 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700',
          className,
        )}
        {...buttonProps}
      >
        <p className="text-white text-sm">{title}</p>
      </button>
    </Dialog.Trigger>
  )
}
