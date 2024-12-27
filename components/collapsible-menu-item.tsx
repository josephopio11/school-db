"use client";

import { usePathname } from "next/navigation";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "./ui/sidebar";

interface CollapsibleMenuItemProps {
  item: { title: string; url: string; isActive?: boolean };
}

const CollapsibleMenuItem = ({ item }: CollapsibleMenuItemProps) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <SidebarMenuSubItem key={item.title}>
      <SidebarMenuSubButton asChild isActive={item.url === pathname}>
        <a href={item.url}>{item.title}</a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

export default CollapsibleMenuItem;
