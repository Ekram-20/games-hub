import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkelton() {
  return (
    <Card.Root width={300} borderRadius={10} overflow="hidden" margin={5}>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkelton;
