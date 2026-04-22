# React Jobs Board

A full-stack React application for browsing, posting, editing, and deleting React developer job listings. Built with React 19, Vite, Tailwind CSS v4, and a JSON Server mock API.

## Features

- Browse all React job listings
- View a single job's full details (description, salary, company info, contact)
- Add a new job listing
- Edit an existing job listing
- Delete a job listing
- Loading spinners during data fetches
- Toast notifications for create / update / delete actions
- Responsive layout with Tailwind CSS

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Icons | React Icons |
| Spinner | React Spinners |
| Notifications | React Toastify |
| Mock API | JSON Server v1 |
| Build tool | Vite 8 |

## Project Structure

```
src/
├── App.jsx               # Router setup and API handler functions
├── main.jsx              # React entry point
├── index.css             # Tailwind import
├── jobs.json             # Mock database (served by JSON Server)
├── layouts/
│   └── MainLayout.jsx    # Shared layout with Navbar and <Outlet />
├── pages/
│   ├── HomePage.jsx      # Hero, HomeCards, recent 3 job listings
│   ├── JobsPage.jsx      # Full job listing page
│   ├── JobPage.jsx       # Single job detail + edit/delete actions
│   ├── AddJobPage.jsx    # Add new job form
│   ├── EditJobPage.jsx   # Edit existing job form
│   └── NotFoundPage.jsx  # 404 fallback
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── HomeCards.jsx
    ├── Card.jsx
    ├── JobListings.jsx   # Renders job grid (home shows 3, jobs page shows all)
    ├── JobListing.jsx    # Single job card with truncated description
    ├── ViewAllJobs.jsx
    └── Spinner.jsx
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, cards, recent 3 jobs |
| `/jobs` | All job listings |
| `/jobs/:id` | Single job detail |
| `/add-job` | Add job form |
| `/edit-job/:id` | Edit job form |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Running the app

You need **two terminals** running at the same time:

**Terminal 1 — Mock API (port 5000)**
```bash
npm run server
```

**Terminal 2 — Vite dev server (port 3000)**
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> The Vite dev server proxies all `/api/*` requests to `http://localhost:5000`, so both servers must be running for data to load.

### Build for production

```bash
npm run build
```

Output is written to `dist/`.

## API Endpoints

All requests go through the `/api` proxy in development, which forwards to JSON Server on port 5000.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | List all jobs |
| GET | `/api/jobs/:id` | Get single job |
| POST | `/api/jobs` | Create job |
| PUT | `/api/jobs/:id` | Update job |
| DELETE | `/api/jobs/:id` | Delete job |
