'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

function InputGroup({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        'has-[[data-slot=input-group-control]:focus-visible]:border-blue-500 has-[[data-slot=input-group-control]:focus-visible]:ring-blue-500 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] flex h-9 items-center gap-0.5 rounded-md border border-gray-300 bg-transparent px-2.5 shadow-xs transition-[color,box-shadow] data-[invalid]:border-red-500 data-[invalid]:ring-red-200 dark:data-[invalid]:ring-red-900',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function InputGroupControl({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group-control"
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

function InputGroupText({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="input-group-text"
      className={cn('text-gray-500 text-sm font-medium', className)}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      data-slot="input-group-input"
      className={cn(
        'placeholder:text-gray-500 focus-visible:outline-none flex-1 border-0 bg-transparent text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:opacity-70 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { InputGroup, InputGroupControl, InputGroupInput, InputGroupText }
