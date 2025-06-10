import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
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
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
}

export default GameDetailPage;
