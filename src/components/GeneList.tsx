import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image_url";
import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GeneList({ selectedGenre, onSelectGenre }: Props) {
  const { data } = useGenres();

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
              onClick={() => onSelectGenre(genre)}
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
