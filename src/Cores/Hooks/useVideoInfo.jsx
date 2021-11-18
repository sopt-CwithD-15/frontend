import { client } from 'Cores/api';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const VID = 'vid';

function useVideoInfo() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initialVid = searchParams.get(VID);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [currentVid, setCurrentVid] = useState(initialVid);

  useEffect(() => {
    setCurrentVid(searchParams.get(VID));
  }, [location]);

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

  return { data, loading, error, vid: currentVid };
}

export default useVideoInfo;
