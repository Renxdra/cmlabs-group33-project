'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

function Item({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot="item"
      className={cn(
        'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a&]:hover:bg-gray-100 [a&]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-blue-500 focus-visible:ring-blue-500 focus-visible:ring-[3px]',
        className,
      )}
      {...props}
    />
  )
}

export { Item }
