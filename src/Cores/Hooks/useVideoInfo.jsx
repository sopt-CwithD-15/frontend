import { client } from 'Cores/api';
import { useState, useEffect } from 'react';

function useVideoInfo(vid) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [currentVid, setCurrentVid] = useState(vid);

  const mutate = (newVid) => setCurrentVid(newVid);

  useEffect(() => {
    async function getVideoList() {
      try {
        setLoading(true);
        const { data } = await client.get(`/video/${currentVid}`);
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
  }, [currentVid]);

  return { data, loading, error, mutate };
}

export default useVideoInfo;
