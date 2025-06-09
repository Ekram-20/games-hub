import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/utils/image_url";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Game } from "@/types/entities";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card.Root
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
        borderRadius={10}
        overflow="hidden"
        margin={5}
      >
        <Image
          objectFit={"cover"}
          src={getCroppedImageUrl(game.background_image)}
        />
        <Card.Body>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />

            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>

          <HStack marginTop={4}>
            <FaStar color="yellow" />
            <Text>{game.rating}</Text>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
}

export default GameCard;
