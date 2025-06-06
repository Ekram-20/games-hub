import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image_url";
import useGameQueryStore from "@/zustand/store";
import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";

function GeneList() {
  const { data } = useGenres();
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
  const setSelectedGenre = useGameQueryStore((s) => s.setGenre);

  if (data?.results === undefined) return null;

  return (
    <List.Root>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} listStyle="None">
          <HStack paddingY={2}>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => setSelectedGenre(genre)}
              variant={"ghost"}
              fontSize={"lg"}
              color={selectedGenre?.id === genre.id ? "white" : "gray.500"}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}

export default GeneList;
