# Broadridge Test Operations Dashboard

A modern, responsive web-based dashboard designed to provide a centralized overview of test operations, system environments, batch processing, incidents, and operational activities.

The dashboard is built using React and Tailwind CSS, with a clean SaaS-style interface focused on usability, accessibility, and simplicity.

> **Note:** This is currently a frontend prototype. All displayed operational records and statistics are fictional sample data. No live AS400 systems or production databases are connected.

## Features

- **Dashboard Overview** – View high-level operational metrics and system summaries.
- **System Status** – Monitor illustrative environment status information.
- **Batch Management** – Browse and search batch records.
- **Test Regions** – View test region information.
- **Background Jobs** – Explore background job records.
- **Incident Tracking** – Browse sample incident information.
- **Deviation Tracking** – View operational deviations.
- **Weekend Activities** – Review upcoming activities.
- **Conversion Activities** – Browse conversion-related records.
- **Restore Management** – View sample restore records.
- **Search and Filtering** – Quickly find records using search and status filters.
- **Sorting and Pagination** – Organize and navigate table records.
- **CSV Export** – Export displayed records.
- **Record Details** – Open individual records in a detail modal.
- **Responsive Design** – Supports desktop, tablet, and mobile screens.
- **Interactive Navigation** – Sidebar navigation with dropdown menus.
- **Settings and Help** – Includes basic display preferences and help information.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend UI development |
| Vite | Development server and build tool |
| Tailwind CSS v4 | Styling and responsive layouts |
| React Router DOM | Client-side navigation |
| Lucide React | Icons |
| Recharts | Charts and data visualization |
| Axios | Future API communication |
| JavaScript | Application logic |
| ESLint | Code quality and linting |

## Project Structure

```text
broadridge-dashboard/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── broadridge-logo.svg
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── MetricCard.jsx
│   │   │   ├── SystemStatus.jsx
│   │   │   └── QuickAccess.jsx
│   │   │
│   │   └── common/
│   │       ├── StatusBadge.jsx
│   │       ├── Modal.jsx
│   │       └── DataTable.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── RecordsPage.jsx
│   │   ├── Settings.jsx
│   │   └── Help.jsx
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   └── mockData.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### 1. Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (included with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/)
- Git (optional, for version control)

### 2. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd broadridge-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

To check code quality:

```bash
npm run lint
```

## Data and Backend Integration

The current application uses mock data stored in:

```text
src/data/mockData.js
```

The API service structure is located in:

```text
src/services/api.js
```

The application is structured to support future backend integration.

Potential future integration:

- Secure backend API development.
- Authorized AS400 system connectivity.
- Real-time operational status updates.
- Live batch and job monitoring.
- Database integration.
- Role-based authentication and access control.

## Security Considerations

Security is an important consideration because this dashboard is intended to support an enterprise operational environment.

- The current prototype uses fictional data only.
- No production server information or credentials should be exposed in the frontend.
- AS400 credentials must never be stored in React code or frontend environment variables.
- Future integrations should communicate through a secure backend API.
- Authentication and authorization should be implemented before accessing real operational information.
- Production deployment should follow the organization's security and IT policies.

## Current Project Status

**Frontend Prototype – Development Stage**

| Component | Status |
|---|---|
| React frontend | Completed |
| Dashboard layout | Implemented |
| Sidebar navigation | Implemented |
| Responsive interface | Implemented |
| Sample data | Implemented |
| Search and filters | Implemented |
| CSV export | Implemented |
| Record details modal | Implemented |
| Backend integration | Planned |
| AS400 connectivity | Planned |
| Live monitoring | Planned |
| Authentication | Planned |

## Future Enhancements

- Live AS400 system integration through a secure backend.
- Real-time monitoring and automatic data refresh.
- Advanced analytics and operational reports.
- User authentication and role-based access.
- Notifications for incidents and system changes.
- Audit logs and activity tracking.

## License

This project is currently intended for demonstration and internal evaluation purposes.

Any production deployment or use of organizational branding and data should be approved by the relevant organization.