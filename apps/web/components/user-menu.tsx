"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { SignOut } from "@phosphor-icons/react"

interface UserMenuProps {
  user: {
    firstName: string | null
    lastName: string | null
    email: string
    profilePictureUrl: string | null
  }
  signOut: () => Promise<void>
}

export function UserMenu({ user, signOut }: UserMenuProps) {
  const initials = [user.firstName, user.lastName]
    .filter(Boolean)
    .map((n) => n![0])
    .join("")
    .toUpperCase() || user.email[0]!.toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="size-7 cursor-pointer">
            {user.profilePictureUrl && (
              <AvatarImage src={user.profilePictureUrl} alt={user.email} />
            )}
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col gap-1">
            {(user.firstName || user.lastName) && (
              <p className="text-sm font-medium">
                {[user.firstName, user.lastName].filter(Boolean).join(" ")}
              </p>
            )}
            <p className="text-muted-foreground text-xs">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form action={signOut}>
            <button type="submit" className="flex w-full items-center gap-2">
              <SignOut size={14} />
              sign out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
