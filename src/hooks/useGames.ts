import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { type PaginationResponse } from "@/services/api";
import type { Platform } from "./usePlatform";
import APIClient from "@/services/api";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
}

// This implement pagination logic using useInfiniteQuery
/*
1. useInfiniteQuery
2. define first page param and initialPageParam
3. define getNextPageParam to return next page number
**/
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<PaginationResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // will only fetch from server when game query changes
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
