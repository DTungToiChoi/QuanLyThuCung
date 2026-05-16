import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

export default function DisabledConnectionIcon({ size = 24, color = 'currentColor', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={color}
      {...props}
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M8 8L16 16M16 8L8 16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
