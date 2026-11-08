# Broadridge CTG Test Operations Board — Demo Frontend

A React + Vite + Tailwind CSS dashboard prototype with fictional data only.

## Setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Included functionality

- Responsive header and sidebar navigation
- Outside-click and Escape-to-close dropdowns
- Dashboard overview cards and illustrative environment status
- Data-driven pages for batches, regions, background jobs, incidents, deviations, activities, conversion and restore tracking
- Search, status filtering, sortable columns, pagination and CSV export
- Record details modal
- Local display preferences and FAQ page

## Security notes

This project intentionally contains synthetic demonstration data. It does not connect to AS400, execute restores, trigger jobs, authenticate to production systems, or retrieve live operational data. Keep real credentials, hostnames, IP addresses, job logs and sensitive business records out of frontend code. Any future integration should be implemented through an approved, authenticated backend with access controls and audit logging.

## Logo

Replace `src/assets/broadridge-logo.svg` with the approved logo asset if your organization provides one. Keep the same filename or update the import in `src/components/layout/Header.jsx`.
