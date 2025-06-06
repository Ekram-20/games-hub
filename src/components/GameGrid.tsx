import useGames from "@/hooks/useGames";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import React from "react";

function GameGrid() {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkelton key={skeleton} />)}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginBottom={4}
          marginX={4}
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
        >
          Load More
        </Button>
      )}
    </>
  );
}

export default GameGrid;
