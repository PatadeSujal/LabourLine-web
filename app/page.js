"use client";

import { useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Handshake, Mic, Globe, Navigation, Download, CheckCircle2 } from "lucide-react";

// The Download logic is wrapped in a suspense boundary so useSearchParams doesn't de-opt
function DownloadHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const shouldAutoDownload = searchParams.get("download") === "auto";

    if (shouldAutoDownload) {
      const downloadApk = () => {
        const link = document.createElement("a");
        link.href = "/api/download";
        link.download = "LabourLine.apk";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      // Slight delay to ensure UI renders first
      const timeoutId = setTimeout(downloadApk, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [searchParams]);

  return null;
}

export default function LabourLineLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Suspense fallback={null}>
        <DownloadHandler />
      </Suspense>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-50 overflow-hidden flex items-center justify-center">
                <Image 
                  src="/app-logo.png" 
                  alt="LabourLine Logo" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Labour<span className="text-orange-500">Line</span>
              </span>
            </div>
            
            <a
              href="/api/download"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Get App</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-32">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://pattern.subtlepatterns.com/patterns/tic-tac-toe.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center shrink-0">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                The Future of Blue-Collar Hiring
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Smart Matching for India's <span className="text-orange-500">Daily Wage Workforce</span>
              </h1>
              
              <p className="mt-4 text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Post your work, get fair bids, and hire reliable local labors instantly. Zero middlemen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/api/download"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3"
                >
                  <Download className="w-6 h-6" />
                  Download APK
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Verified Workers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Fair Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                Built for the Real World
              </h2>
              <p className="text-lg text-slate-600">
                LabourLine is designed with features that actually make a difference for both labors and employers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Handshake className="w-24 h-24" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Handshake className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Bidding</h3>
                <p className="text-slate-600 leading-relaxed">
                  Labors and employers negotiate directly to ensure fair wages without hidden fees or cuts.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Mic className="w-24 h-24" />
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Audio Instructions</h3>
                <p className="text-slate-600 leading-relaxed">
                  Employers can record voice notes explaining the work for labors who cannot read.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Globe className="w-24 h-24" />
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Multilingual Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Available in 8 different Indian languages for ultimate accessibility across regions.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Navigation className="w-24 h-24" />
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Navigation className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Direct Navigation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Integrated Google Maps routing takes workers straight to the exact worksite location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-900 py-20 text-center px-4">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who are changing how local labor is hired. Download the app today.
            </p>
            <a
              href="/api/download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25"
            >
              <Download className="w-6 h-6" />
              Download APK Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Image 
              src="/app-logo.png" 
              alt="LabourLine Logo" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain rounded opacity-80" 
            />
            <span className="font-bold text-lg text-slate-400">
              Labour<span className="text-slate-500">Line</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} LabourLine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
