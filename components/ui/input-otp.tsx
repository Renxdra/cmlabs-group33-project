'use client'

import * as React from 'react'
import * as OTPInput from 'input-otp'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput.OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput.OTPInput
      containerClassName={cn(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}
OTPInput.displayName = 'InputOTP'

function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<typeof OTPInput.OTPInputGroup>) {
  return (
    <OTPInput.OTPInputGroup
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}
InputOTPGroup.displayName = 'InputOTPGroup'

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<typeof OTPInput.OTPInputSlot> & {
  index: number
}) {
  return (
    <OTPInput.OTPInputSlot
      index={index}
      className={cn(
        'data-[active=true]:border-blue-500 data-[active=true]:ring-blue-500 data-[active=true]:aria-invalid:ring-red-200 dark:data-[active=true]:aria-invalid:ring-red-900 aria-invalid:border-red-500 data-[active=true]:aria-invalid:border-red-500 dark:bg-gray-800 border-gray-300 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
        className,
      )}
      {...props}
    />
  )
}
InputOTPSlot.displayName = 'InputOTPSlot'

export { InputOTP, InputOTPGroup, InputOTPSlot }
