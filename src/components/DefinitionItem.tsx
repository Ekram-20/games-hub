import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
function DefinitionItem({ term, children }: Props) {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="grey">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
