import { useCallback, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import RecordsPage from './pages/RecordsPage'
import Settings from './pages/Settings'
import Help from './pages/Help'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [lastRefresh, setLastRefresh] = useState(new Date())
  const refresh = useCallback(() => setLastRefresh(new Date()), [])

  return (
    <div className="min-h-screen bg-[#f4f8f8]">
      <Header onMenuClick={() => setSidebarOpen((open) => !open)} onRefresh={refresh} lastRefresh={lastRefresh} />
      <div className="flex min-h-[calc(100vh-72px)]">
        {sidebarOpen && <button aria-label="Close navigation overlay" onClick={() => setSidebarOpen(false)} className="fixed inset-0 top-[72px] z-30 bg-slate-950/40 lg:hidden" />}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-7">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/:section" element={<RecordsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}