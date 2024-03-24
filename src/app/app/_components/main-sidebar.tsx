import { Sidebar, SidebarHeader, SidebarMain, SidebarNav, SidebarNavMain, SidebarNavLink, SidebarNavHeader, SidebarNavHeaderTittle, SidebarFooter } from "@/components/dashboard/sidebar";

export function MainSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1></h1>
      </SidebarHeader>
      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href="/app">Tarefas</SidebarNavLink>
            <SidebarNavLink href="/app/settings">Configurações</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTittle>Links extras</SidebarNavHeaderTittle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <h1>User</h1>
      </SidebarFooter>
    </Sidebar>
  );
}