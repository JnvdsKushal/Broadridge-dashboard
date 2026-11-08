import { useParams } from 'react-router-dom'
import { pageConfigs } from '../data/mockData'
import DataTable from '../components/common/DataTable'
import { ShieldCheck } from 'lucide-react'

export default function RecordsPage() {
  const { section } = useParams()
  const config = pageConfigs[section]
  if (!config) return <div className="rounded-xl border bg-white p-8"><h1 className="text-xl font-bold">Page not found</h1></div>

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div><h1 className="text-2xl font-bold text-[#12343d]">{config.title}</h1><p className="mt-1 text-sm text-slate-500">{config.description}</p></div>
        <span className="flex w-fit items-center gap-2 rounded-lg bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-800"><ShieldCheck size={16} /> Demo data only</span>
      </div>
      <div className="rounded-lg border border-teal-100 bg-teal-50 px-4 py-3 text-sm text-teal-800"><strong>Safe preview:</strong> These fictional records are stored locally in the frontend. No AS400 connection or operational action is performed.</div>
      <section className="card-shadow rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><h2 className="font-bold text-[#12343d]">Records overview</h2><span className="text-xs text-slate-400">{config.rows.length} sample records</span></div>
        <DataTable config={config} />
      </section>
    </div>
  )
}