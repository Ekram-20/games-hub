import APIClient from "@/services/api";
import type { Trailer } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";


const useTrailer = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    gameId,
                },
            }),
    });
}

export default useTrailer;