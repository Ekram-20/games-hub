import useTrailer from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls/>
  ) : null;
}

export default GameTrailer;
