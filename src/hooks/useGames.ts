import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import api, { type PaginationResponse } from "@/services/api";
import type { Platform } from "./usePlatform";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<PaginationResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // will only fetch from server when game query changes
    queryFn: () =>
      api
        .get<PaginationResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });


export default useGames;
