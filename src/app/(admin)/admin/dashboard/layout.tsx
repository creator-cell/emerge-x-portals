import Sidebar from "@/components/common/sidebar";
import Nav from "@/components/main/Nav";

import { SidebarProvider } from "@/components/ui/sidebar";
import { adminSidebarLinks } from "@/enums/admin/sidebarLinks";

import React from "react";
interface Props {
  children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <SidebarProvider className="bg-custom-gradient">
      <Sidebar sidebarLinks={adminSidebarLinks} />
      <main className=" flex flex-col w-full min-h-screen">
        <Nav />
        <div className="flex flex-1 w-full container">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
