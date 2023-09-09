import { clsx } from "clsx"

interface Props {
  children: React.ReactNode
  className?: string
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span' 
}

export const Typography = ({
  children, 
  className,
  component : Component = 'span'
}: Props) => {
  return (
    <Component 
      className={
        clsx(
          "",
          className
        )
      }
    >
      {children}
    </Component>
  )
}