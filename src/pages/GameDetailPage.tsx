import useGame from "@/hooks/useGame";
import { Text, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // appending ! to slug because we know slug is not null

  if (isLoading) return <Spinner />;

  // will wrapped by error component
  // TODO: log the error with sentry tool
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;
