export default function StatusBadge({ value }) {
  const normalized = String(value || '').toLowerCase()
  let style = 'bg-slate-100 text-slate-600'
  if (['running', 'completed', 'available', 'approved', 'closed', 'planned'].includes(normalized)) style = 'bg-emerald-50 text-emerald-700'
  if (['open', 'in progress', 'investigating', 'under review', 'queued', 'requested'].includes(normalized)) style = 'bg-amber-50 text-amber-700'
  if (['failed', 'high'].includes(normalized)) style = 'bg-rose-50 text-rose-700'
  if (['on hold', 'medium'].includes(normalized)) style = 'bg-orange-50 text-orange-700'
  if (['low'].includes(normalized)) style = 'bg-sky-50 text-sky-700'
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>{value}</span>
}