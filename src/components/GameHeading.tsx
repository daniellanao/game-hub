import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} `

  return (
    <Heading as='h1' marginBottom={5}>
        {heading}
        Games
    </Heading>
  )
}

export default GameHeading