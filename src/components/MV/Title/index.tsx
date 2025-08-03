import type React from "react"
import { cn } from "@/lib/utils"

interface TitleProps {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export function Title({ children, icon, className }: TitleProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-4", className)}>
      {icon && <div className="text-yellow-500">{icon}</div>}
      <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">{children}</h2>
    </div>
  )
}
