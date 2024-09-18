import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {    
    const{data,error,isLoading}=useGames();
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
        {error && <p>{error}</p>}
        <SimpleGrid columns={{ sm:1,md:2,lg:3,xl:5 }} spacing={3} padding={10}>
            {isLoading && skeletons.map((skeleton)=>
            <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton}/>
            </GameCardContainer>
            )}
            {data.map((game)=>(
                <GameCardContainer key={game.id}>
                    <GameCard key={game.id} game={game}/>        
                </GameCardContainer>
            ))}            
        </SimpleGrid>               
        </>
    )
}

export default GameGrid