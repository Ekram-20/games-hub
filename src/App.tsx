import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // desktop > 1024px
      }}
    >
      <GridItem area={"nav"} bg={"green"}>
        nav
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
