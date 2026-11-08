import { ShieldCheck } from 'lucide-react'
import { overviewMetrics } from '../../data/mockData'
import MetricCard from './MetricCard'
import SystemStatus from './SystemStatus'
import QuickAccess from './QuickAccess'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div><h1 className="text-2xl font-bold text-[#12343d]">System Overview</h1><p className="mt-1 text-sm text-slate-500">High-level overview of environments and operational activities.</p></div>
        <div className="flex w-fit items-center gap-2 rounded-lg bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-800"><ShieldCheck size={17} /> Public-safe demo data</div>
      </div>
      <div className="rounded-lg border border-[#ccebe6] bg-[#eaf7f5] px-4 py-3 text-sm text-[#086b63]"><strong>Demo environment:</strong> All displayed values are illustrative placeholders. No live AS400 server data is connected.</div>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{overviewMetrics.map((metric) => <MetricCard key={metric.title} metric={metric} />)}</section>
      <SystemStatus />
      <QuickAccess />
      <footer className="py-3 text-center text-xs text-slate-400">Broadridge CTG Test Operations Board · Demo Preview</footer>
    </div>
  )
}