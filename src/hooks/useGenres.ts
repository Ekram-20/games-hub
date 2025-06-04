import { useQuery } from "@tanstack/react-query";
import api, { type PaginationResponse } from "@/services/api";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      api.get<PaginationResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    // initialData: { count: 0, results: [] },
  });

export default useGenres;
