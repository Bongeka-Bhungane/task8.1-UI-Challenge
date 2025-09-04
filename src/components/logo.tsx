import React from 'react' 

type props = {
    variant?: string,
    children: React.ReactNode,
    style?: React.CSSProperties
}

const logo: React.FC<props> = ({variant, children, style}) => {
    if (variant === 'h3') return <h3 style={style}>{children}</h3>
  return (
    <div style={style}>{children}</div>
  )
}

export default logo