import { useQuery } from "@tanstack/react-query";
import api, { type PaginationResponse } from "@/services/api";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      api
        .get<PaginationResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatform;
