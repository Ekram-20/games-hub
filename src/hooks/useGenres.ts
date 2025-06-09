import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api";
import type { Genre } from "@/types/entities";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    // initialData: { count: 0, results: [] },
  });

export default useGenres;
