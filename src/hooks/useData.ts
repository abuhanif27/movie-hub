import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface FetchResponse<T> {
  [key: string]: T[];
}

const useData = <T>(endPoint: string, dataKey: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data[dataKey]);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, errorMessage, isLoading };
};

export default useData;
