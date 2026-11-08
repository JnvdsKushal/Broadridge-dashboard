import { useEffect, useRef, useState } from 'react'
import { Bell, CalendarDays, ChevronDown, Menu, RefreshCw, UserCircle, Settings, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/broadridge-logo.png'

export default function Header({ onMenuClick, onRefresh, lastRefresh }) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const notificationRef = useRef(null)
  const profileRef = useRef(null)

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!notificationRef.current?.contains(event.target) && !profileRef.current?.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveDropdown(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const toggle = (name) => setActiveDropdown((current) => current === name ? null : name)
  const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-3 sm:px-6">
      <div className="flex items-center gap-3 sm:gap-5 min-w-0">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg text-teal-700 hover:bg-teal-50" aria-label="Open navigation">
          <Menu size={23} />
        </button>
        <img src={logo} alt="Broadridge" className="w-[130px] sm:w-[170px] h-50 -ml-3 object-contain object-left shrink-0" />
        <div className="hidden md:block h-9 w-px bg-slate-200" />
        <div className="hidden md:block min-w-0">
          <h1 className="font-bold text-lg text-[#12343d] truncate">CTG Test Operations Board</h1>
          <p className="text-xs text-slate-500">AS400 Operations Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-3">
        <div className="hidden xl:flex items-center gap-2 text-sm text-slate-500 mr-1">
          <CalendarDays size={17} /> {date}
        </div>
        <button onClick={onRefresh} title={`Last refreshed ${lastRefresh.toLocaleTimeString()}`} className="flex items-center gap-2 bg-[#087f78] hover:bg-[#066b65] text-white px-3 sm:px-4 py-2.5 rounded-xl text-sm font-semibold">
          <RefreshCw size={16} /><span className="hidden sm:inline">Refresh</span>
        </button>

        <div className="relative" ref={notificationRef}>
          <button onClick={() => toggle('notifications')} aria-label="Notifications" aria-expanded={activeDropdown === 'notifications'} className="relative p-2.5 rounded-lg hover:bg-slate-100 text-slate-600">
            <Bell size={21} /><span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
          </button>
          {activeDropdown === 'notifications' && (
            <div className="absolute right-0 top-12 z-[100] w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between"><h3 className="font-bold">Notifications</h3><span className="text-xs text-slate-400">Demo</span></div>
              <p className="py-7 text-center text-sm text-slate-500">No new demo notifications.</p>
              <button onClick={() => setActiveDropdown(null)} className="w-full border-t pt-3 text-sm font-semibold text-teal-700">Close</button>
            </div>
          )}
        </div>

        <div className="relative border-l border-slate-200 pl-2 sm:pl-3" ref={profileRef}>
          <button onClick={() => toggle('profile')} aria-expanded={activeDropdown === 'profile'} className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-50">
            <UserCircle size={30} className="text-teal-700" />
            <span className="hidden sm:block text-left"><span className="block text-sm font-bold">Admin</span><span className="block text-xs text-slate-500">Demo Account</span></span>
            <ChevronDown size={15} className={`text-slate-500 transition ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
          </button>
          {activeDropdown === 'profile' && (
            <div className="absolute right-0 top-12 z-[100] w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              <div className="border-b px-3 py-2"><p className="text-sm font-semibold">Admin</p><p className="text-xs text-slate-500">Demo Account</p></div>
              <Link onClick={() => setActiveDropdown(null)} to="/settings" className="flex items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:bg-teal-50"><Settings size={16} /> Settings</Link>
              <button onClick={() => setActiveDropdown(null)} className="flex w-full items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:bg-teal-50"><LogOut size={16} /> Close menu</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}