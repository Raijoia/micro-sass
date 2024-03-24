import { cn } from '@/lib/utils'
import Link from 'next/link'

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export type SidebarGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
}

export function Sidebar({ children, className }: SidebarGenericProps) {
  return (
    <aside
      className={cn([
        'border-r border-border flex flex-col space-y-6',
        className,
      ])}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ children, className }: SidebarGenericProps) {
  return <header className={cn(['px-6', className])}>{children}</header>
}

export function SidebarHeaderTittle({
  children,
  className,
}: SidebarGenericProps) {
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

export function SidebarNavHeaderTittle({
  children,
  className,
}: SidebarGenericProps) {
  return (
    <div
      className={cn([
        'text-xs uppercase text-muted-foreground ml-3',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export function SidebarNavMain({ children, className }: SidebarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

type SidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function SidebarNavLink({
  children,
  className,
  href,
  active,
}: SidebarGenericProps & SidebarNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn([
        'text-xs px-3 py-2 rounded-md',
        active && 'bg-secondary',
        className,
      ])}
    >
      {children}
    </Link>
  )
}

export function SidebarFooter({ children, className }: SidebarGenericProps) {
  return (
    <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
      {children}
    </footer>
  )
}
