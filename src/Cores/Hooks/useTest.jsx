import { useState, useEffect } from 'react';
import { test } from 'Cores/api';

function useAPI(apiInfo) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [shouldUpdate, setShouldUpdate] = useState(0);
  const mutate = () => setShouldUpdate((prev) => prev + 1);

  useEffect(() => {
    async function execAPICall() {
      try {
        setLoading(true);
        const result = await test.request(apiInfo);
        setData(result.data.data);
      } catch (error) {
        setError({
          message: error,
        });
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    execAPICall();
  }, [shouldUpdate]);

  return { data, loading, error, mutate };
}

export default useAPI;
