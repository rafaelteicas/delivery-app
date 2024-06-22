import React, { forwardRef } from 'react'

import { cn } from '@/utils'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...rest }, ref) => {
    return (
      <div className="">
        <p>{label}</p>
        <div className={cn('flex border rounded py-2 w-full', className)}>
          <input
            ref={ref}
            className="bg-transparent flex-1 outline-none pl-2"
            {...rest}
          />
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'
