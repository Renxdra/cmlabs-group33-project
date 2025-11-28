'use client'

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NavigationMenu({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        'relative z-10 flex max-w-max flex-row items-center justify-center',
        className,
      )}
      {...props}
    />
  )
}
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        'group/nav-menu flex flex-row items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  )
}
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

function NavigationMenuItem({
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return <NavigationMenuPrimitive.Item data-slot="nav-menu-item" {...props} />
}
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-gray-100 data-[state=open]:text-gray-900 data-[state=open]:focus:bg-gray-100 data-[state=open]:bg-gray-50 focus-visible:ring-blue-500 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1.5 size-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}
NavigationMenuTrigger.displayName =
  NavigationMenuPrimitive.Trigger.displayName

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        'data-[motion=from-start]:animate-in data-[motion=from-end]:animate-out data-[motion=to-end]:animate-out data-[motion=to-start]:animate-in absolute top-0 left-0 w-full data-[motion=from-start]:origin-top-left data-[motion=from-end]:origin-top-right data-[motion=to-start]:origin-top-left data-[motion=to-end]:origin-top-right md:w-auto',
        className,
      )}
      {...props}
    />
  )
}
NavigationMenuContent.displayName =
  NavigationMenuPrimitive.Content.displayName

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "data-[active=true]:focus:bg-gray-100 data-[active=true]:hover:bg-gray-100 data-[active=true]:bg-gray-50 data-[active=true]:text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus-visible:ring-blue-500 [&_svg:not([class*='text-'])]:text-gray-500 flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out md:w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      {...props}
    />
  )
}
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="relative top-1/2 h-2 w-2 rotate-45 rounded-tl-sm bg-white shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
