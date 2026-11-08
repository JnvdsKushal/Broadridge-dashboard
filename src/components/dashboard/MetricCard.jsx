import { AlertTriangle, ClipboardCheck, Network, Server } from 'lucide-react'

const icons = { server: Server, network: Network, clipboard: ClipboardCheck, alert: AlertTriangle }
const colors = {
  teal: 'bg-teal-50 text-teal-700',
  purple: 'bg-purple-50 text-purple-700',
  green: 'bg-emerald-50 text-emerald-700',
  blue: 'bg-blue-50 text-blue-700',
}

export default function MetricCard({ metric }) {
  const Icon = icons[metric.icon] || Server
  return (
    <article className="card-shadow rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${colors[metric.color]}`}><Icon size={27} /></div>
        <div className="min-w-0">
          <p className="text-3xl font-bold text-[#12343d]">{metric.value}</p>
          <h3 className="font-semibold text-slate-700">{metric.title}</h3>
          <p className="mt-1 text-xs text-slate-500">{metric.description}</p>
        </div>
      </div>
    </article>
  )
}