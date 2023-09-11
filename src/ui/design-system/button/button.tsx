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
          "bg-gray-400 hover:bg-gray-600 px-4 py-2 text-white rounded cursor-pointer",
          className
        )
      }
    >
      <Typography>{children}</Typography>
    </div>
  )
}