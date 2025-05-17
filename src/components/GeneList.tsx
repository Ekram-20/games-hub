import useGenres from "@/hooks/useGeneres";

function GeneList() {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GeneList;
