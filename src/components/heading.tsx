import React from 'react'

type props = {
    variant?: string,
    children: React.ReactNode,
    style?: React.CSSProperties
}
const heading: React.FC<props> = ({variant, children, style}) => {
    if (variant === 'h2') return <h2 style={style}>{children}</h2>
    if (variant === "h2") return <h2 style={style}>{children}</h2>
    if (variant === "p") return <p style={style}>{children}</p>
    if (variant === 'a') return <a href="/#" style={style}>{children}</a>
  return (
    <div style={style}>{children}</div>
  )
}

export default heading
