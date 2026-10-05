import Link from 'next/dist/client/link'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
}

const map = {
  primary: 'bg-accent-irl text-black',
  secondary: 'bg-accent-sim text-black hover:bg-accent-sim/90',
  ghost: 'border border-border bg-transparent text-fg hover:border-fg',
}

function Button({ children, className, variant = 'primary', href, ...props }: Props) {
  const classes = `inline-flex items-center justify-center px-4 max-w-max py-4 rounded-full gap-2 text-sm font-bold leading-none transition-all duration-200 md:px-8 ${map[variant]} ${className ?? ''}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button
      className={`inline-flex items-center justify-center px-8 max-w-max py-4 rounded-full gap-2 text-sm font-bold leading-none transition-all duration-200 ${map[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
