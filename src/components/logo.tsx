import React from 'react' 

type props = {
    variant?: string,
    children: React.ReactNode,
    style?: React.CSSProperties
        className?: string
}

const Logo: React.FC<props> = ({ variant, children, style, className }) => {
  if (variant === "h3") return (
    <h3 style={style} className={className}>
      {children}
    </h3>
  );
  return <div style={style}>{children}</div>;
};

export default Logo