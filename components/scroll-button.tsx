"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { scrollToTop } from "@/utils/scroll-utils"

interface ScrollButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function ScrollButton({
  children,
  onClick,
  className,
  variant = "default",
  size = "default",
  type = "button",
  disabled = false,
}: ScrollButtonProps) {
  const handleClick = () => {
    scrollToTop()
    if (onClick) onClick()
  }

  return (
    <Button className={className} variant={variant} size={size} type={type} disabled={disabled} onClick={handleClick}>
      {children}
    </Button>
  )
}
