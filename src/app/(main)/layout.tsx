import { AppSidebar } from "@/components/main/app-sidebar";
import Nav from "@/components/main/Nav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-custom-gradient">
      <AppSidebar />
      <main className=" flex flex-col w-full min-h-screen">
        <Nav />
        <div className="flex flex-1 w-full container">{children}</div>
      </main>
    </SidebarProvider>
  );
}
