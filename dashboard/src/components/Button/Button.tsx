import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonProps {
  title: string
}

export function Button({ title, ...buttonProps }: Props) {
  return (
    <button
      className="px-4 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700"
      {...buttonProps}
    >
      <p className="text-white text-sm">{title}</p>
    </button>
  )
}
