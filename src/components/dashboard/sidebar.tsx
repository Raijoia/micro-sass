import { cn } from "@/lib/utils";
import Link from "next/link";

// type SidebarProps = {
//   paths: Array<[
//     label: string,
//     href: string
//   ]>
// };


// export function Sidebar({ paths }: SidebarProps) {
//   return (
//     <aside className="border-r border-border">
//       <nav>
//         {paths.map(path => (
//           <a key={path.href} href={path.href}>{path.label}</a>
//         ))}
//       </nav>
//     </aside>
//   );
// }


// pattern component

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
};

export function Sidebar({ children, className }: SidebarGenericProps) {
  return <aside className={cn(['',  className])}>{children}</aside>
}

export function SidebarHeader({ children, className }: SidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function SidebarHeaderTittle({ children, className }: SidebarGenericProps) {
  return <h2 className={cn(['', className])}>{children}</h2>
}

export function SidebarMain({ children, className }: SidebarGenericProps) {
  return <main className={cn(['', className])}>{children}</main>
}

export function SidebarNav({ children, className }: SidebarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function SidebarNavHeader({ children, className }: SidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function SidebarNavHeaderTittle({ children, className }: SidebarGenericProps) {
  return <h4 className={cn(['', className])}>{children}</h4>
}

export function SidebarNavMain({ children, className }: SidebarGenericProps) {
  return <main className={cn(['', className])}>{children}</main>
}

type SidebarNavLinkProps = {
  href: string;
};

export function SidebarNavLink({
  children,
  className,
  href
}: SidebarGenericProps & SidebarNavLinkProps) {
  return (
    <Link href={href} className={cn(['', className])}>
      {children}
    </Link>
  );
}

export function SidebarFooter({ children, className }: SidebarGenericProps) {
  return <footer className={cn(['', className])}>{children}</footer>
}
