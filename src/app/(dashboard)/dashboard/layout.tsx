import AppSidebar from "@/components/modules/dashboard/sidebar/sidebar";
import Navbar from "@/components/sheared/home/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
      <SidebarProvider>
        <AppSidebar  />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </>
  );
};

export default layout;
