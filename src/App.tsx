import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GeneList from "./components/GeneList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // desktop > 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Nav />
      </GridItem>

      {/* TODO: check when display only for dessktop */}
      <Show when={true}>
        <GridItem area={"aside"} padding={5}>
          <GeneList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
