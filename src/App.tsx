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
    >
      <GridItem area={"nav"}>
        <Nav />
      </GridItem>

      {/* TODO: check when display only for dessktop */}
      <Show when={true}>
        <GridItem area={"aside"}>
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
