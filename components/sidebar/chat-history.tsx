"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarList } from "@/components/sidebar/sidebar-list";
import { buttonVariants } from "@/components/ui/button";
import { IconPlus } from "@/components/ui/icons";
import { createNewDiagram } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { GanttChart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { spinner } from "../chat/spinner";
import useDiagramStore from "@/store/diagram-store";
import Image from "next/image";

interface ChatHistoryProps {
  userId?: string;
}

interface diagram {
  id: string;
  diagram_name: string;
  user_id: string;
  code: string;
  created_at: string;
  last_updated_at: string;
  is_public: boolean;
}
export function ChatHistory() {
  const router = useRouter();
  const { fetchDiagrams } = useDiagramStore();
  const handleNewDiagram = async () => {
    try {
      const uuid = await createNewDiagram();
      router.push(`/c/${uuid}`);
      fetchDiagrams();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-6">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Image
            src="/mermaid.png"
            alt="logo"
            className="bg-white m-[2px] rounded-full"
            width={30}
            height={30}
          />
          <span className="hidden font-urban text-lg font-semibold sm:inline-block">
            chatmermaid
          </span>
        </Link>
      </div>
      <div className="mb-2 px-2">
        <div
          onClick={handleNewDiagram}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-10 w-full justify-start cursor-pointer bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10"
          )}
        >
          <IconPlus className="-translate-x-2 stroke-2" />
          New Diagram
        </div>
      </div>
      {/* <React.Suspense
        fallback={
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-sm text-muted-foreground">{spinner}</p>
          </div>
        }
      > */}
      {/* @ts-ignore */}
      <SidebarList />
      {/* </React.Suspense> */}
    </div>
  );
}