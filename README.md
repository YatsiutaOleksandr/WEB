This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features Implemented

### 1. Analytics
- Vercel Analytics integration for tracking user interactions
- Custom analytics events:
  - `station_view` - Track when a user views a station
  - `map_click` - Track when a user clicks on the map
  - `map_zoom` - Track when a user zooms the map
  - `chart_view` - Track when a user views charts
  - `filter_apply` - Track applied filters
  - `export_data` - Track data exports

### 2. Structured Logging
- **Server-side logging** with JSON format
- **File-based logging** with automatic file creation:
  - `logs/error.log` - Errors only
  - `logs/combined.log` - All info, warn, error logs
- **Middleware logs HTTP requests** with:
  - HTTP method
  - URL path
  - Status code
  - Request duration in milliseconds
  - ISO timestamp
- **API routes** include try/catch blocks with error logging
- **Logging levels**:
  - `error` - Critical problems
  - `warn` - Potential issues (4xx responses)
  - `info` - Important events
  - `debug` - Detailed information

### 3. Error Handling
- **Error Boundary** (`error.tsx`) - Catches and logs client-side errors
- **Error Reporting API** (`/api/logs`) - Sends client errors to server for logging
- **404 Page** (`not-found.tsx`) - User-friendly not found page
- **Graceful error responses** in API routes

### 4. Logs Directory
All logs are stored in `logs/` directory:
- Auto-created on first run
- Excluded from git (`.gitignore`)
- Use `npm run dev` to start server and generate logs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
