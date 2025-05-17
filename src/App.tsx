import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";

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
        <GridItem area={"aside"} bg={"pink"}>
          aside
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"red"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
