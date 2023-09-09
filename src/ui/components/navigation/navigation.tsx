import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"

interface Props {
}

export const Navigation = ({}: Props) => {
  return(
    <div className="border-b-2 border-gray-100">
      <Container className="flex flex-row items-center justify-between gap-3">
        <div className="">
          <Typography component="h1" className="font-bold text-3xl">L2FED</Typography>
        </div>
        <div className="flex items-center gap-5">
          <Typography component="span">Générer le QR code</Typography>
          <Button>Checker le QR code</Button>
        </div>
      </Container>
    </div>
  )
}