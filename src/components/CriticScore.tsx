import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorPalette={color}
      fontSize="14px"
      paddingX={3}
      paddingY={1}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
