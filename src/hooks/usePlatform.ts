import APIClient from "@/services/api";
import type { Platform } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");


const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatform;
