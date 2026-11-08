import { CheckCircle2, Server } from 'lucide-react'
import { systemData } from '../../data/mockData'

export default function SystemStatus() {
  return (
    <section className="card-shadow rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3"><span className="rounded-lg bg-teal-50 p-2 text-teal-700"><Server size={21} /></span><h2 className="text-lg font-bold text-[#12343d]">System Status & Resource Overview</h2></div>
        <span className="text-xs text-slate-500">Illustrative data only</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {systemData.map((system) => (
          <article key={system.id} className="overflow-hidden rounded-xl border border-slate-200 transition hover:border-teal-300">
            <div className="flex items-center justify-between bg-[#e8f7f5] px-4 py-3">
              <h3 className="font-bold text-[#12343d]">{system.name}</h3>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700"><CheckCircle2 size={14} /> Demo</span>
            </div>
            <div className="flex items-center gap-3 p-4">
              <div className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(#0d9488 ${system.usage}%, #e2e8f0 0)` }}>
                <div className="grid h-[59px] w-[59px] place-items-center rounded-full bg-white text-lg font-bold">{system.usage}%</div>
              </div>
              <div><p className="text-sm font-semibold text-slate-700">Sample resource usage</p><p className="mt-1 text-xs text-slate-500">Not connected to server</p></div>
            </div>
            <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-xs font-semibold text-teal-700">Illustrative preview</div>
          </article>
        ))}
      </div>
    </section>
  )
}