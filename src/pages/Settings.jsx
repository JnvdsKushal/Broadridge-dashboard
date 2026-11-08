import { useState } from 'react'
import { Bell, Palette, ShieldCheck, Save } from 'lucide-react'

export default function Settings() {
  const [preferences, setPreferences] = useState({ notifications: true, compact: false, tips: true })
  const [saved, setSaved] = useState(false)
  const toggle = (key) => { setPreferences((p) => ({ ...p, [key]: !p[key] })); setSaved(false) }
  const options = [
    { key: 'notifications', title: 'Demo notifications', description: 'Show sample notification indicators.', icon: Bell },
    { key: 'compact', title: 'Compact layout', description: 'Use a denser layout for dashboard cards.', icon: Palette },
    { key: 'tips', title: 'Safety reminders', description: 'Display reminders that this is a demo environment.', icon: ShieldCheck },
  ]
  return <div className="mx-auto max-w-3xl space-y-6"><div><h1 className="text-2xl font-bold text-[#12343d]">Settings</h1><p className="mt-1 text-sm text-slate-500">Manage local dashboard display preferences.</p></div><section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="mb-4 font-bold">Display preferences</h2><div className="divide-y divide-slate-100">{options.map(({ key, title, description, icon: Icon }) => <div key={key} className="flex items-center justify-between gap-4 py-4"><div className="flex items-center gap-3"><span className="rounded-lg bg-teal-50 p-2 text-teal-700"><Icon size={19} /></span><div><p className="text-sm font-semibold">{title}</p><p className="text-xs text-slate-500">{description}</p></div></div><button role="switch" aria-checked={preferences[key]} onClick={() => toggle(key)} className={`relative h-6 w-11 rounded-full transition ${preferences[key] ? 'bg-teal-600' : 'bg-slate-300'}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${preferences[key] ? 'left-6' : 'left-1'}`} /></button></div>)}</div><button onClick={() => setSaved(true)} className="mt-4 flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"><Save size={16} /> Save preferences</button>{saved && <p role="status" className="mt-3 text-sm text-emerald-700">Preferences saved for this demo session.</p>}<p className="mt-4 text-xs text-slate-400">These preferences are held in component state and reset when the page reloads.</p></section></div>
}