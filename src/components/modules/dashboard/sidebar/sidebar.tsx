
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,  SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar";

import { Calendar,  Home, HomeIcon, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";

const AppSidebar = () => {
    const items = [
        {
          title: "Profile Info",
          url: "profile",
          icon: Home,
        },
        {
          title: "My Bookings",
          url: "bookings",
          icon: Inbox,
        },
        {
          title: "Calendar",
          url: "#",
          icon: Calendar,
        },
        {
          title: "Search",
          url: "#",
          icon: Search,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
        {
          title: "Home",
          url: "/",
          icon: HomeIcon,
        },
      ]
    return (
        <Sidebar>
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      
    );
};

export default AppSidebar;