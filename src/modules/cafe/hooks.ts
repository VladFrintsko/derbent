import { useCallback, useEffect, useState } from "react";
import { getCafeContent } from "./api";
import { CafeContent } from "./types";

type CafeContentState = {
  data: CafeContent | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export const useCafeContent = (): CafeContentState => {
  const [data, setData] = useState<CafeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getCafeContent();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    data,
    loading,
    error,
    refetch: load,
  };
};

