"use client";

import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { navData } from "@/lib/links";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">
                    {process.env.NEXT_PUBLIC_APP_NAME || "App Name"}
                  </span>
                  <span className="">
                    v{process.env.NEXT_PUBLIC_APP_VERSION}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {/* <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard" className="flex items-center flex-row">
                  <Home className=" size-4" />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem> */}
            {navData.navMain.map((item) => (
              <Collapsible
                key={item.title}
                // defaultOpen={index === item.index}
                defaultOpen={pathname.startsWith(item.url)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    {item.url !== "#" ? (
                      <Link href={item.url}>
                        <SidebarMenuButton>
                          <span className="flex items-center flex-row">
                            {item.icon && <item.icon className="mr-2 size-4" />}
                            {item.title}
                          </span>
                          {item.items?.length && (
                            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                          )}
                          {item.items?.length && (
                            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                          )}
                        </SidebarMenuButton>
                      </Link>
                    ) : (
                      <SidebarMenuButton>
                        <span className="flex items-center flex-row">
                          {item.icon && <item.icon className="mr-2 size-4" />}
                          {item.title}
                        </span>
                        {item.items?.length && (
                          <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                        )}
                        {item.items?.length && (
                          <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                        )}
                      </SidebarMenuButton>
                    )}
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.url === pathname}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
