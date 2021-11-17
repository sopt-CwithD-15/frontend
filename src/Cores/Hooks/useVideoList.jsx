import { client } from 'Cores/api';
import { useState, useEffect } from 'react';

function useVideoList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getVideoList() {
      try {
        setLoading(true);
        const result = await client.get('/video');
        setData(result.data);
      } catch (error) {
        setError({
          message: error,
        });
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getVideoList();
  }, []);

  return { data, loading, error };
}

export default useVideoList;
