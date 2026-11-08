import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { navigationItems } from '../../data/navigation'

export default function QuickAccess() {
  return (
    <section className="card-shadow rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex items-center gap-3"><span className="rounded-lg bg-teal-50 p-2 text-teal-700"><Zap size={21} /></span><h2 className="text-lg font-bold text-[#12343d]">Quick Access</h2></div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-9">
        {navigationItems.slice(1).map((item) => {
          const Icon = item.icon
          return <Link key={item.path} to={item.path} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-[#e0efed] bg-[#f2f9f8] p-3 text-center transition hover:border-teal-300 hover:bg-[#e3f5f2]"><Icon size={25} className="text-teal-700" /><span className="text-xs font-semibold text-[#12343d]">{item.title}</span></Link>
        })}
      </div>
    </section>
  )
}