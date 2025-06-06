import useGameQueryStore from "@/zustand/store";
import { Heading } from "@chakra-ui/react";

function GameHeading() {
  const genre = useGameQueryStore((s) => s.gameQuery.genre);
  const platform = useGameQueryStore((s) => s.gameQuery.platform);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading margin={4} fontSize={"4xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
