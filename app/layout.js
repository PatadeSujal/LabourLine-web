export const metadata = {
  title: "LabourLine - Smart Matching for India's Daily Wage Workforce",
  description: "Post your work, get fair bids, and hire reliable local labors instantly. Zero middlemen.",
  icons: {
    icon: "/app-logo.png",
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
