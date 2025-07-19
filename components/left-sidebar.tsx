"use client"

import { Home, ShoppingBag, Briefcase, Star, Target, Gift, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "Skills", href: "/skills", icon: Briefcase },
  { name: "Top Students", href: "/top-students", icon: Star },
  { name: "Daily Challenge", href: "/challenge", icon: Target },
  { name: "Spin & Win", href: "/spin-win", icon: Gift },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function LeftSidebar() {
  const pathname = usePathname()

  return (
    <div className="p-4 space-y-2">
      {navigationItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link key={item.name} href={item.href}>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start space-x-3 h-12",
                isActive && "bg-primary/10 text-primary hover:bg-primary/20",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
