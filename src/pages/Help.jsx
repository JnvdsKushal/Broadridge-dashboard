import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  ['Where does the dashboard data come from?', 'All records and metrics currently come from fictional frontend demo data. There is no live AS400 connection.'],
  ['Can I export records?', 'Yes. The records pages provide an Export CSV action that exports the currently filtered demo records.'],
  ['Does Refresh contact a server?', 'No. Refresh updates the demo last-refreshed timestamp only.'],
  ['Can this dashboard connect to AS400 later?', 'A future integration should use an approved, authenticated backend service. Do not expose credentials or sensitive infrastructure details in the browser.'],
  ['Can restore actions be triggered here?', 'No. The restore page is a read-only demo tracker. It does not execute operational actions.'],
]
export default function Help() {
  const [open, setOpen] = useState(0)
  return <div className="mx-auto max-w-3xl space-y-6"><div><h1 className="text-2xl font-bold text-[#12343d]">Help & Support</h1><p className="mt-1 text-sm text-slate-500">Quick guidance for the dashboard prototype.</p></div><div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center gap-3"><span className="rounded-lg bg-teal-50 p-2 text-teal-700"><HelpCircle size={21} /></span><h2 className="font-bold">Frequently asked questions</h2></div><div className="divide-y divide-slate-100">{faqs.map(([question, answer], index) => <div key={question}><button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-slate-700"><span>{question}</span><ChevronDown size={17} className={`shrink-0 transition ${open === index ? 'rotate-180' : ''}`} /></button>{open === index && <p className="pb-4 pr-8 text-sm leading-6 text-slate-500">{answer}</p>}</div>)}</div></div><div className="rounded-xl border border-teal-100 bg-teal-50 p-4 text-sm text-teal-800"><strong>Security reminder:</strong> Keep production server details, credentials, IP addresses, job logs and sensitive records out of public frontend code.</div></div>
}