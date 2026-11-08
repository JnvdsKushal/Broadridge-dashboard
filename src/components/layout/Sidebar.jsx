import { NavLink } from 'react-router-dom'
import { bottomNavigation, navigationItems } from '../../data/navigation'

function NavItems({ items, onClose }) {
  return items.map((item) => {
    const Icon = item.icon
    return (
      <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={onClose}
        className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-[#0d9389] text-white shadow-sm' : 'text-teal-50 hover:bg-white/10'}`}>
        <Icon size={19} strokeWidth={1.8} /><span>{item.title}</span>
      </NavLink>
    )
  })
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar-scrollbar fixed lg:sticky top-[72px] left-0 z-40 flex h-[calc(100vh-72px)] w-[265px] shrink-0 flex-col overflow-y-auto bg-[#064e50] text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="p-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-200">Main Menu</p>
        <nav className="flex flex-col gap-1.5"><NavItems items={navigationItems} onClose={onClose} /></nav>
      </div>
      <div className="mt-auto border-t border-white/20 p-5">
        <nav className="flex flex-col gap-2"><NavItems items={bottomNavigation} onClose={onClose} /></nav>
      </div>
      <div className="px-5 pb-5"><div className="rounded-lg bg-white/10 p-3"><p className="text-xs text-teal-100">Dashboard Preview</p><p className="mt-1 text-sm font-semibold">Demo Environment</p></div></div>
    </aside>
  )
}