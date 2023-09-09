import clsx from "clsx"
import { Typography } from "../typography/typography"

interface Props {
  children: React.ReactNode
  className?: string
}

export const Button = ({
  children,
  className
}: Props) => {
  return(
    <div 
      className={
        clsx(
          "bg-black px-4 py-2 text-white rounded",
          className
        )
      }
    >
      <Typography>{children}</Typography>
    </div>
  )
}