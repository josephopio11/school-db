import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeSwitcher } from "./theming/switcher";

interface PageHeaderProps {
  title?: string;
  link?: string;
  title2?: string;
  link2?: string;
  title3?: string;
  link3?: string;
}

const PageHeader = ({
  title,
  title2,
  title3,
  link,
  link2,
  link3,
}: PageHeaderProps) => {
  return (
    <header className="flex flex-row justify-between h-16 items-center gap-2 border-b px-4 sticky top-0 left-0 right-0 z-10 backdrop-blur-lg">
      <div className="flex shrink-0 items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            {title && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={link}>
                    <BreadcrumbPage>{title}</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {title2 && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={link2}>
                    <BreadcrumbPage>{title2}</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {title3 && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={link3}>
                    <BreadcrumbPage>{title3}</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default PageHeader;
