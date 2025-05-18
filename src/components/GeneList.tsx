import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image_url";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";

function GeneList() {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} as="li">
          <HStack paddingY={2}>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}

export default GeneList;
