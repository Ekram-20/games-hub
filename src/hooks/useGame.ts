import APIClient from "@/services/api";
import type { Game } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug)
})

export default useGame;