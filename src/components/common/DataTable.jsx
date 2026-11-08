import { useMemo, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Download, Eye, Search, X } from 'lucide-react'
import StatusBadge from './StatusBadge'
import Modal from './Modal'

const PAGE_SIZE = 5

export default function DataTable({ config }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState(config.filters?.[0] || 'All statuses')
  const [sort, setSort] = useState({ key: 0, direction: 'asc' })
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)

  const filteredRows = useMemo(() => {
    const rows = config.rows.filter((row) => {
      const matchesQuery = row.join(' ').toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === config.filters?.[0] || row.some((cell) => String(cell).toLowerCase() === filter.toLowerCase())
      return matchesQuery && matchesFilter
    })
    return [...rows].sort((a, b) => {
      const comparison = String(a[sort.key]).localeCompare(String(b[sort.key]), undefined, { numeric: true })
      return sort.direction === 'asc' ? comparison : -comparison
    })
  }, [config.rows, config.filters, filter, query, sort])

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE))
  const visibleRows = filteredRows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const changeSort = (index) => {
    setSort((current) => ({ key: index, direction: current.key === index && current.direction === 'asc' ? 'desc' : 'asc' }))
    setPage(1)
  }

  const exportCsv = () => {
    const csv = [config.columns, ...filteredRows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${config.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}-demo.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1) }} placeholder={`Search ${config.primary.toLowerCase()} records...`} className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-sm outline-none focus:border-teal-500" />{query && <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"><X size={15} /></button>}</div>
        <div className="flex flex-wrap gap-2">
          <div className="relative"><select value={filter} onChange={(e) => { setFilter(e.target.value); setPage(1) }} className="appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-sm text-slate-700 outline-none focus:border-teal-500">{config.filters.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" /></div>
          <button onClick={exportCsv} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-teal-50 hover:text-teal-700"><Download size={16} /> Export CSV</button>
        </div>
      </div>

      <div className="table-scroll overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[780px] border-collapse text-left text-sm">
          <thead className="bg-[#edf6f5] text-xs uppercase tracking-wide text-slate-600"><tr>{config.columns.map((column, index) => <th key={column} className="whitespace-nowrap px-4 py-3 font-semibold"><button onClick={() => changeSort(index)} className="inline-flex items-center gap-1 hover:text-teal-700">{column}{sort.key === index ? <span>{sort.direction === 'asc' ? '↑' : '↓'}</span> : <span className="text-slate-300">↕</span>}</button></th>)}<th className="px-4 py-3 text-right">Details</th></tr></thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {visibleRows.map((row) => <tr key={row[0]} className="hover:bg-teal-50/40">{row.map((cell, index) => <td key={`${row[0]}-${index}`} className="whitespace-nowrap px-4 py-3 text-slate-600">{index === 0 ? <span className="font-semibold text-slate-700">{cell}</span> : config.columns[index]?.toLowerCase().includes('status') || config.columns[index]?.toLowerCase() === 'severity' ? <StatusBadge value={cell} /> : cell}</td>)}<td className="px-4 py-3 text-right"><button onClick={() => setSelected(row)} className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50"><Eye size={15} /> View</button></td></tr>)}
            {visibleRows.length === 0 && <tr><td colSpan={config.columns.length + 1} className="px-4 py-12 text-center text-slate-500">No matching demo records found.</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p>Showing {filteredRows.length ? (page - 1) * PAGE_SIZE + 1 : 0}–{Math.min(page * PAGE_SIZE, filteredRows.length)} of {filteredRows.length} demo records</p>
        <div className="flex items-center gap-2"><button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="rounded-lg border border-slate-200 p-2 disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={17} /></button><span>Page {page} of {pageCount}</span><button disabled={page >= pageCount} onClick={() => setPage((p) => p + 1)} className="rounded-lg border border-slate-200 p-2 disabled:cursor-not-allowed disabled:opacity-40"><ChevronRight size={17} /></button></div>
      </div>

      {selected && <Modal title="Demo record details" onClose={() => setSelected(null)}><div className="space-y-3">{config.columns.map((column, index) => <div key={column} className="flex justify-between gap-4 border-b border-slate-100 pb-2 text-sm"><span className="text-slate-500">{column}</span><span className="text-right font-semibold text-slate-700">{selected[index]}</span></div>)}<p className="rounded-lg bg-teal-50 p-3 text-xs text-teal-800">This is fictional demonstration information, not a live operational record.</p></div></Modal>}
    </div>
  )
}