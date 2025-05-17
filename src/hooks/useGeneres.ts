import api from "@/services/api";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface Genre {
  id: number;
  name: string;
}

interface FetchResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const controller = new AbortController();
      api
        .get<FetchResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setIsLoading(false);
          setGenres(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;
