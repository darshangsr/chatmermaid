"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import useUser from "@/store/user-store";

export function UserAccountNav({ user }: any) {
  const { logoutUser } = useUser();
  const handleLogout = async () => {
    logoutUser();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        {user?.user_metadata.avatar_url ? (
          <Image
            src={user?.user_metadata.avatar_url}
            alt="pfp"
            width={35}
            height={35}
            className="rounded-full cursor-pointer"
          />
        ) : (
          <UserCircle className="size-6" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.user_metadata.name && (
              <p className="font-medium">{user?.user_metadata.name}</p>
            )}
            {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center space-x-2.5">
            <LayoutDashboard className="size-4" />
            <p className="text-sm">Dashboard</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/billing"
            className="flex items-center space-x-2.5"
          >
            <CreditCard className="size-4" />
            <p className="text-sm">Billing</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2.5"
          >
            <Settings className="size-4" />
            <p className="text-sm">Settings</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onSelect={handleLogout}>
          <div className="flex items-center space-x-2.5">
            <LogOut className="size-4" />
            <p className="text-sm">Log out </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
