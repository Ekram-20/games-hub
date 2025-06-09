import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GeneList from "@/components/GeneList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";


function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // mobile
        lg: `"aside main"`, // desktop > 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* TODO: check when display only for dessktop */}
      <Show when={true}>
        <GridItem area={"aside"} padding={5}>
          <GeneList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameHeading />
        <HStack paddingX={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
