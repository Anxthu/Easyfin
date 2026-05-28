import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-white text-slate-800 overflow-hidden pt-32 pb-4 border-t border-slate-100">
      {/* Light Aurora Gradient Blending with White Background */}
      <div className="absolute top-0 left-0 right-0 h-[300px] w-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-50px] left-[10%] w-[35%] h-[200px] rounded-full bg-blue-100/50 mix-blend-multiply blur-[80px]" />
         <div className="absolute top-0 left-[40%] w-[30%] h-[200px] rounded-full bg-emerald-100/50 mix-blend-multiply blur-[80px]" />
         <div className="absolute top-[-20px] right-[10%] w-[40%] h-[200px] rounded-full bg-indigo-100/50 mix-blend-multiply blur-[80px]" />
         <div className="absolute bottom-0 inset-x-0 h-[150px] bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 mt-12 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Logo Left */}
          <div className="flex items-center gap-3">
             <div className="flex items-center justify-center size-8 rounded-full border border-slate-200">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                 <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="#0F172A"/>
               </svg>
             </div>
             <span className="font-medium text-[15px] tracking-tight text-slate-900">Easyfin Group</span>
          </div>

          {/* Links Grid Right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">
             
             {/* Column 1 */}
             <div className="flex flex-col gap-4">
               <h4 className="text-[11px] font-medium uppercase tracking-widest text-slate-400 mb-2">Company</h4>
               <Link to="/" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Home</Link>
               <Link to="/about" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">About Us</Link>
               <Link to="/leadership" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Leadership</Link>
               <Link to="/contact" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Contact</Link>
             </div>

             {/* Column 2 */}
             <div className="flex flex-col gap-4">
               <h4 className="text-[11px] font-medium uppercase tracking-widest text-slate-400 mb-2">Three Pillars</h4>
               <Link to="/finance" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Easyfin Finance</Link>
               <Link to="/agro" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Easyfarm Agro</Link>
               <Link to="/strategic" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Easyfin Strategic</Link>
             </div>

             {/* Column 3 */}
             <div className="flex flex-col gap-4">
               <h4 className="text-[11px] font-medium uppercase tracking-widest text-slate-400 mb-2">Reach Us</h4>
               <a href="mailto:easyfin.financial@gmail.com" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Email Us</a>
               <a href="tel:+918848071890" className="inline-block w-fit text-[14px] font-medium text-slate-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">Call Us</a>
             </div>

          </div>
        </div>

        {/* Global Footer Bottom Layer */}
        <div className="flex flex-col md:flex-row justify-between items-center z-10 relative border-t border-slate-100 pt-8">
           <p className="text-[12px] font-medium text-slate-400 tracking-wide order-last md:order-first mt-8 md:mt-0">
             &copy; {new Date().getFullYear()} Easyfin Group of Companies. All rights reserved.
           </p>

           <div className="w-full md:w-auto flex-1 overflow-hidden flex justify-end">
              <span className="text-[12vw] md:text-[min(120px,10vw)] font-normal tracking-[-0.05em] leading-[0.8] text-slate-100 uppercase select-none cursor-default" aria-hidden="true">
                Easyfin
              </span>
           </div>
        </div>
      </div>
    </footer>
  )
}
