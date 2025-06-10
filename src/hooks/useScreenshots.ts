import APIClient from "@/services/api";
import type { Screenshot } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";


const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: apiClient.getAll,
    });
}

export default useScreenshots;