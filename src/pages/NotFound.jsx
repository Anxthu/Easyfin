import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle("Page Not Found | Easyfin Group")

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[14px] font-semibold text-blue-600 uppercase tracking-widest">404 Error</p>
        <h1 className="mt-4 text-[48px] sm:text-[72px] font-semibold tracking-tight text-slate-900 leading-none">
          Page not found
        </h1>
        <p className="mt-6 text-[18px] leading-7 text-slate-600 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="group inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-[14px] font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105 active:scale-95"
          >
            Go back home
            <ArrowRight size={16} aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  )
}
