import {
  LayoutDashboard, Layers, Grid2X2, Play, AlertTriangle, Activity,
  FileText, CalendarDays, ArrowLeftRight, Database, Settings, CircleHelp,
} from 'lucide-react'

export const navigationItems = [
  { title: 'Dashboard', path: '/', icon: LayoutDashboard },
  { title: 'Current Running Batches', path: '/batches', icon: Layers },
  { title: 'Test Regions', path: '/regions', icon: Grid2X2 },
  { title: 'Background Jobs', path: '/background-jobs', icon: Play },
  { title: 'Open Incidents', path: '/incidents', icon: AlertTriangle },
  { title: 'Current Deviations', path: '/deviations', icon: Activity },
  { title: 'Test Region E@pfilep', path: '/test-region', icon: FileText },
  { title: 'Upcoming Activities', path: '/activities', icon: CalendarDays },
  { title: 'Conversion Activities', path: '/conversion', icon: ArrowLeftRight },
  { title: 'CHTGPT for Restores', path: '/restores', icon: Database },
]
export const bottomNavigation = [
  { title: 'Settings', path: '/settings', icon: Settings },
  { title: 'Help', path: '/help', icon: CircleHelp },
]