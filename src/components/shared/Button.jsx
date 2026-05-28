import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-[#0B1120] text-white hover:scale-[1.02]',
  secondary: 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50',
  blue: 'bg-blue-600 text-white hover:bg-blue-700',
  emerald: 'bg-emerald-600 text-white hover:bg-emerald-700',
  indigo: 'bg-indigo-600 text-white hover:bg-indigo-700',
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type,
}) {
  const baseStyles =
    'inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-[14px] font-medium transition-all duration-200 cursor-pointer focus:outline-none'
  const variantStyles = variants[variant] || variants.primary

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  )
}
