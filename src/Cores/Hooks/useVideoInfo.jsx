import { client } from 'Cores/api';
import { useState, useEffect } from 'react';

function useVideoInfo(vid) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getVideoList() {
      try {
        setLoading(true);
        const { data } = await client.get(`/video/${vid}`);
        setData(data);
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

export default useVideoInfo;
