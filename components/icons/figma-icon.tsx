import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  /** Single knob to control both width & height */
  size?: number | string // e.g. 24 | "1em"
  title?: string
}

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="#7096d1" {...props}>
      <path d="M8 2C6.34 2 5 3.34 5 5s1.34 3 3 3h3V2H8zm0 8C6.34 10 5 11.34 5 13s1.34 3 3 3h3v-6H8zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-3H8zm6-16v6h3c1.66 0 3-1.34 3-3s-1.34-3-3-3h-3zm0 8v6h3c1.66 0 3-1.34 3-3s-1.34-3-3-3h-3z"/>
    </svg>
  )
}
export default FigmaIcon
