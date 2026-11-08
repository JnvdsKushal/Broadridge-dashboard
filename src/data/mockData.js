// All records and values in this file are fictional demonstration data.
// Do not replace these with production AS400 records in a public frontend.

export const overviewMetrics = [
  { title: 'Environments', value: '04', description: 'Illustrative environments', color: 'teal', icon: 'server' },
  { title: 'Access Points', value: '04', description: 'Illustrative access points', color: 'purple', icon: 'network' },
  { title: 'Open Incidents', value: '02', description: 'Sample incident summary', color: 'green', icon: 'clipboard' },
  { title: 'Current Deviations', value: '01', description: 'Sample deviation summary', color: 'blue', icon: 'alert' },
]

export const systemData = [
  { id: 'A', name: 'Environment A', usage: 64, status: 'Demo' },
  { id: 'B', name: 'Environment B', usage: 38, status: 'Demo' },
  { id: 'C', name: 'Environment C', usage: 46, status: 'Demo' },
  { id: 'D', name: 'Environment D', usage: 62, status: 'Demo' },
]

const today = '08 Nov 2026'
export const pageConfigs = {
  batches: {
    title: 'Current Running Batches',
    description: 'Review sample batch activity across demonstration environments.',
    primary: 'Batch',
    columns: ['Record ID', 'Batch', 'Environment', 'Started', 'Status', 'Duration'],
    filters: ['All statuses', 'Running', 'Completed', 'On Hold', 'Failed'],
    rows: [
      ['DEMO-1001', 'Account Summary', 'Environment A', '09:10 AM', 'Running', '00:32:18'],
      ['DEMO-1002', 'Position Review', 'Environment B', '09:25 AM', 'Running', '00:27:06'],
      ['DEMO-1003', 'Reference Update', 'Environment C', '08:40 AM', 'Completed', '00:18:42'],
      ['DEMO-1004', 'Sample Reconciliation', 'Environment D', '10:05 AM', 'On Hold', '00:12:09'],
      ['DEMO-1005', 'Demo Data Refresh', 'Environment A', '10:20 AM', 'Failed', '00:04:51'],
      ['DEMO-1006', 'Illustrative File Check', 'Environment B', '10:35 AM', 'Running', '00:08:15'],
      ['DEMO-1007', 'Daily Summary', 'Environment C', '08:15 AM', 'Completed', '00:21:30'],
      ['DEMO-1008', 'Sample Validation', 'Environment D', '11:00 AM', 'Running', '00:02:11'],
    ],
  },
  regions: {
    title: 'Test Regions',
    description: 'View fictional test-region summaries and their demo status.',
    primary: 'Region',
    columns: ['Record ID', 'Region', 'Environment', 'Purpose', 'Status', 'Last Updated'],
    filters: ['All statuses', 'Available', 'In Use', 'Under Review'],
    rows: [
      ['REG-001', 'North Demo', 'Environment A', 'Functional testing', 'Available', today],
      ['REG-002', 'South Demo', 'Environment B', 'Integration testing', 'In Use', today],
      ['REG-003', 'West Demo', 'Environment C', 'Regression testing', 'Under Review', '07 Nov 2026'],
      ['REG-004', 'East Demo', 'Environment D', 'User acceptance', 'Available', '07 Nov 2026'],
    ],
  },
  'background-jobs': {
    title: 'Background Jobs',
    description: 'Explore sample background-job records. No live jobs are monitored.',
    primary: 'Job',
    columns: ['Record ID', 'Job Name', 'Environment', 'Category', 'Status', 'Updated'],
    filters: ['All statuses', 'Running', 'Queued', 'Completed', 'Failed'],
    rows: [
      ['JOB-001', 'Demo Scheduler', 'Environment A', 'Scheduled', 'Running', today],
      ['JOB-002', 'Sample Import', 'Environment B', 'Data processing', 'Queued', today],
      ['JOB-003', 'Report Preview', 'Environment C', 'Reporting', 'Completed', '07 Nov 2026'],
      ['JOB-004', 'Demo Validation', 'Environment D', 'Validation', 'Failed', '07 Nov 2026'],
    ],
  },
  incidents: {
    title: 'Open Incidents',
    description: 'Sample incident register with fictional descriptions and severity labels.',
    primary: 'Incident',
    columns: ['Record ID', 'Incident', 'Environment', 'Severity', 'Status', 'Opened'],
    filters: ['All statuses', 'Open', 'Investigating', 'Resolved'],
    rows: [
      ['INC-001', 'Demo workflow delay', 'Environment A', 'Medium', 'Open', today],
      ['INC-002', 'Sample validation warning', 'Environment C', 'Low', 'Investigating', today],
      ['INC-003', 'Illustrative queue alert', 'Environment B', 'High', 'Resolved', '07 Nov 2026'],
      ['INC-004', 'Demo report mismatch', 'Environment D', 'Low', 'Open', '06 Nov 2026'],
    ],
  },
  deviations: {
    title: 'Current Deviations',
    description: 'Track fictional process deviations and their review status.',
    primary: 'Deviation',
    columns: ['Record ID', 'Deviation', 'Environment', 'Category', 'Status', 'Review Date'],
    filters: ['All statuses', 'New', 'Under Review', 'Approved', 'Closed'],
    rows: [
      ['DEV-001', 'Sample threshold variance', 'Environment A', 'Process', 'Under Review', today],
      ['DEV-002', 'Demo schedule variation', 'Environment B', 'Schedule', 'New', today],
      ['DEV-003', 'Illustrative data difference', 'Environment C', 'Data', 'Closed', '07 Nov 2026'],
    ],
  },
  'test-region': {
    title: 'Test Region E@pfilep',
    description: 'A safe, high-level preview of a named test-region section.',
    primary: 'Record',
    columns: ['Record ID', 'Item', 'Category', 'Environment', 'Status', 'Updated'],
    filters: ['All statuses', 'Available', 'In Review', 'Completed'],
    rows: [
      ['TR-001', 'Sample test record', 'Functional', 'Environment A', 'Available', today],
      ['TR-002', 'Demo scenario', 'Regression', 'Environment B', 'In Review', today],
      ['TR-003', 'Illustrative validation', 'Integration', 'Environment C', 'Completed', '07 Nov 2026'],
    ],
  },
  activities: {
    title: 'Upcoming Activities',
    description: 'A sample schedule of upcoming demonstration activities.',
    primary: 'Activity',
    columns: ['Record ID', 'Activity', 'Environment', 'Owner', 'Date', 'Status'],
    filters: ['All statuses', 'Planned', 'In Progress', 'Completed'],
    rows: [
      ['ACT-001', 'Demo review meeting', 'Environment A', 'Team Alpha', '10 Nov 2026', 'Planned'],
      ['ACT-002', 'Sample test cycle', 'Environment B', 'Team Beta', '11 Nov 2026', 'In Progress'],
      ['ACT-003', 'Dashboard walkthrough', 'Environment C', 'Team Gamma', '12 Nov 2026', 'Planned'],
      ['ACT-004', 'Illustrative sign-off', 'Environment D', 'Team Delta', '13 Nov 2026', 'Completed'],
    ],
  },
  conversion: {
    title: 'Conversion Activities',
    description: 'Track fictional conversion work items and their progress.',
    primary: 'Activity',
    columns: ['Record ID', 'Activity', 'Workstream', 'Progress', 'Status', 'Updated'],
    filters: ['All statuses', 'Planned', 'In Progress', 'Completed', 'On Hold'],
    rows: [
      ['CON-001', 'Demo mapping review', 'Workstream A', '80%', 'In Progress', today],
      ['CON-002', 'Sample validation', 'Workstream B', '100%', 'Completed', today],
      ['CON-003', 'Illustrative reconciliation', 'Workstream C', '35%', 'On Hold', '07 Nov 2026'],
      ['CON-004', 'Demo readiness check', 'Workstream D', '10%', 'Planned', '07 Nov 2026'],
    ],
  },
  restores: {
    title: 'CHTGPT for Restores',
    description: 'A demo restore-request tracker. No restore operation can be triggered here.',
    primary: 'Restore',
    columns: ['Record ID', 'Request', 'Environment', 'Requested By', 'Status', 'Requested'],
    filters: ['All statuses', 'Requested', 'Under Review', 'Approved', 'Completed'],
    rows: [
      ['RST-001', 'Demo restore review', 'Environment A', 'Demo User 1', 'Under Review', today],
      ['RST-002', 'Sample point-in-time request', 'Environment B', 'Demo User 2', 'Requested', today],
      ['RST-003', 'Illustrative recovery check', 'Environment C', 'Demo User 3', 'Completed', '07 Nov 2026'],
    ],
  },
}

export const chartData = [
  { label: 'Mon', value: 24 },
  { label: 'Tue', value: 38 },
  { label: 'Wed', value: 31 },
  { label: 'Thu', value: 52 },
  { label: 'Fri', value: 44 },
  { label: 'Sat', value: 60 },
  { label: 'Sun', value: 48 },
]
