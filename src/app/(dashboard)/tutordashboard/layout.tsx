import AppSidebar from "@/components/modules/dashboard/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar  />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </>
  );
};

export default layout;
