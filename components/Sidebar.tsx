"use client";

import { cn } from "@/lib/utils";
import {
  CodeIcon,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  MessagesSquare,
  Settings,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-600",
  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-600",
  },
  {
    label: "Generate Code",
    icon: CodeIcon,
    href: "/code",
    color: "text-yellow-600",
  },
  {
    label: "Generate PDF",
    icon: FileText,
    href: "/pdf",
    color: "text-pink-600",
  },
  {
    label: "Generate Excel",
    icon: FileSpreadsheet,
    href: "/excel",
    color: "text-orange-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-blue-600",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-[#11111] text-white">
      <div className="px-3 py-3 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4 ">
            <Image
              fill
              alt="Logo"
              src="/images/logo/svg/logo-no-background.svg"
            />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat)}>GTF</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={cn(
                "text-sm flex group p-3 w-full justify-start font-medium cursor-pointer hover:text-white hower:bg-white/10 rounded-lg transaction",
                pathname === route.href
                  ? "tex-white bg-white/10 "
                  : "text-zin-400"
              )}
            >
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
