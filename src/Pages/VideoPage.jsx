import { useState } from 'react';
import styled from 'styled-components';
import NavBar from 'Components/NavBar';
import { useSearchParams } from 'react-router-dom';
import colors from 'Constants/colors';
import VideoContainer from 'Components/VideoContainer';
import VideoInfo from 'Components/Video/VideoInfo';
import VideoTitle from 'Components/Video/VideoTitle';
import VideoTag from 'Components/Video/VideoTag';
import VideoIcons from 'Components/Video/VideoIcons';
import useVideoInfo from 'Cores/Hooks/useVideoInfo';
import useVideoList from 'Cores/Hooks/useVideoList';
import CommentHandler from 'Components/Comment/CommentHandler';
import ChannelInfo from 'Components/Video/ChannelInfo';

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
  const [isMobileCommentOpen, setIsMobileCommentOpen] = useState(false);
  const toggle = () => setIsMobileCommentOpen(!isMobileCommentOpen);
  return (
    <Container>
      <NavBar />
      {data && !loading && (
        <>
          <IFrameWrapper>{getVideoTemplate(vid)}</IFrameWrapper>
          {!isMobileCommentOpen && (
            <>
              <InfoContainer>
                <VideoTag color={colors.light.blue} tagList={data.tags} />
                <VideoTitle title={data.title} />
                <VideoInfo viewCount={data.viewCount} uploadDate={data.uploadDate} />
              </InfoContainer>
              <VideoIcons />
              <ChannelInfo profile={data.thumbnail.user} author={data.author} subscribeCount={data.subscribeCount} />
            </>
          )}
        </>
      )}
      <CommentHandler isMobileCommentOpen={isMobileCommentOpen} toggle={toggle} />
      {data && videoList && !videoListLoading && !isMobileCommentOpen && (
        <VideoContainer videoList={videoList.filter((video) => video.id !== data.id)} />
      )}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};

  & iframe {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
  padding: 0.5rem;
`;

const IFrameWrapper = styled.div`
  position: relative;
  padding-top: 20.3rem;
`;

export default VideoPage;
