import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Outlet } from "react-router-dom"

const Dash = () => {
  return (
    <SidebarProvider className="flex min-h-screen">
    <AppSidebar />
    <main className="relative flex-1 min-h-screen">
      <main className="absolute bottom-1 left-1">
      <SidebarTrigger />
      </main>
      <Outlet />
    </main>
  </SidebarProvider>
  )
}

export default Dash