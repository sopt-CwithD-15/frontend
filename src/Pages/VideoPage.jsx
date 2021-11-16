import styled from 'styled-components';
import NavBar from 'Components/NavBar';
import { useSearchParams } from 'react-router-dom';
import colors from 'Constants/colors';
import VideoContainer from 'Components/VideoContainer';
import VideoInfo from 'Components/Video/VideoInfo';
import VideoTitle from 'Components/Video/VideoTitle';
import VideoTag from 'Components/Video/VideoTag';
import useVideoInfo from 'Cores/Hooks/useVideoInfo';
import useVideoList from 'Cores/Hooks/useVideoList';

const getVideoTemplate = (vid) => {
  return (
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${vid}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  );
};

function VideoPage() {
  const [searchParams] = useSearchParams();
  const vid = searchParams.get('vid');
  const { data, loading } = useVideoInfo(vid);
  const { data: videoList, loading: videoListLoading } = useVideoList();
  return (
    <Container>
      <NavBar />
      {data && !loading && (
        <>
          {getVideoTemplate(vid)}
          <InfoContainer>
            <VideoTag color={colors.light.blue} tagList={data.tags} />
            <VideoTitle title={data.title} />
            <VideoInfo viewCount={data.viewCount} uploadDate={data.uploadDate} />
          </InfoContainer>
        </>
      )}
      {data && videoList && !videoListLoading && (
        <VideoContainer videoList={videoList.filter((video) => video.id !== data.id)} />
      )}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  & iframe {
    height: 20.3rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => colors[theme.currentMode].navBarBg};
  padding: 0.5rem;
`;

export default VideoPage;
