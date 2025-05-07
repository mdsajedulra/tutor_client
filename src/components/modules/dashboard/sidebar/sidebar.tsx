"use client"
import Loader from "@/components/sheared/spinner/spinner";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";

import { Home, HomeIcon, Inbox } from "lucide-react";
import Link from "next/link";

const AppSidebar = () => {
const {user} = useUser()
if(!user) {
  return <div><Loader/></div>
}

let route;

if(user?.role === "tutor"){
  route = [
    {
      title: "Profile Info",
      url: "/dashboard/tutor",
      icon: Home,
    },
    {
      title: "Manage Profile",
      url: "/dashboard/tutor/updateprofile",
      icon: Inbox,
    },
    {
      title: "Manage Booking",
      url: "/dashboard/tutor/booking",
      icon: Inbox,
    },
    {
      title: "Manage Subject",
      url: "/dashboard/tutor/subject",
      icon: Inbox,
    },
    {
      title: "Manage Availability (Time slot)",
      url: "/dashboard/tutor/manageavailability",
      icon: HomeIcon,
    },
  ];
}
if(user?.role ==="student"){
   route = [
    {
      title: "Profile Info",
      url: "/dashboard/student/profile",
      icon: Home,
    },
    {
      title: "My Booking",
      url: "/dashboard/student/booking",
      icon: Inbox,
    },
    {
      title: "Payment History",
      url: "/dashboard/student/paymenthistory",
      icon: Inbox,
    },
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
  ];
}


 
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {route?.map((item) => (
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
        <SidebarFooter>
          <Link className="border text-center mt-100" href="/">
            Back to home
          </Link>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
