type LineProps = {
  className?: string
}

function SectionLine({ className }: LineProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`w-full h-[1px] my-0 ${className}`}
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(240, 255, 255, 0.20), transparent)',
      }}
    />
  )
}

export default SectionLine
