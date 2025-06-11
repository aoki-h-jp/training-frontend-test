import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Folder } from "@/types/mail";
import {
  ArchiveIcon,
  ComposeIcon,
  FileIcon,
  InboxIcon,
  MailIcon,
  SearchIcon,
  SendIcon,
  TrashIcon
} from "@/components/ui/icons";

interface SidebarProps {
  folders: Folder[];
}

export function Sidebar({ folders }: SidebarProps) {
  const pathname = usePathname();

  const getIcon = (id: string) => {
    switch (id) {
      case "inbox":
        return <InboxIcon className="h-4 w-4" />;
      case "drafts":
        return <FileIcon className="h-4 w-4" />;
      case "sent":
        return <SendIcon className="h-4 w-4" />;
      case "trash":
        return <TrashIcon className="h-4 w-4" />;
      case "archive":
        return <ArchiveIcon className="h-4 w-4" />;
      default:
        return <MailIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="group flex h-full w-[80px] flex-col border-r bg-background p-2 md:w-[240px]">
      <div className="flex h-[52px] items-center justify-center md:justify-start">
        <Link href="/#" className="flex items-center gap-2 font-semibold">
          <MailIcon className="h-6 w-6" />
          <span className="hidden md:inline-flex">Mailbox</span>
        </Link>
      </div>
      <div className="flex items-center gap-2 p-2">
        <Button 
          variant="default" 
          size="sm" 
          className="w-full justify-start gap-2" 
          data-testid="compose-button">
          <ComposeIcon className="h-4 w-4" />
          <span className="hidden md:inline-flex">Compose</span>
        </Button>
      </div>
      <div className="flex items-center gap-2 p-2">
        <Button variant="outline" size="sm" className="w-full justify-start gap-2">
          <SearchIcon className="h-4 w-4" />
          <span className="hidden md:inline-flex">Search</span>
        </Button>
      </div>
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center">
        {folders.map((folder) => (
          <Button
            key={folder.id}
            variant={pathname === "/#" && folder.id === "inbox" ? "secondary" : "ghost"}
            className="justify-start"
            asChild
          >
            <Link href="/#" className="flex items-center gap-2">
              {getIcon(folder.id)}
              <span className="hidden truncate md:inline-flex">{folder.name}</span>
              {folder.count !== undefined && (
                <span className="ml-auto hidden text-xs font-medium md:inline-flex">
                  {folder.count}
                </span>
              )}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
}
