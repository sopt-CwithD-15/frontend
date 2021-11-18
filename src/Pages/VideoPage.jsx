import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from 'Components/NavBar';
import VideoContainer from 'Components/VideoContainer';
import VideoInfo from 'Components/Video/VideoInfo';
import VideoTitle from 'Components/Video/VideoTitle';
import VideoTag from 'Components/Video/VideoTag';
import VideoIcons from 'Components/Video/VideoIcons';
import CommentHandler from 'Components/Comment/CommentHandler';
import ChannelInfo from 'Components/Video/ChannelInfo';
import colors from 'Constants/colors';
import useVideoInfo from 'Cores/Hooks/useVideoInfo';
import useVideoList from 'Cores/Hooks/useVideoList';

function VideoPage() {
  const navigator = useNavigate();
  const [isMobileCommentOpen, setIsMobileCommentOpen] = useState(false);
  const { data: videoInfo, loading: videoInfoLoading, error, vid } = useVideoInfo();
  const { data: videoList, loading: videoListLoading } = useVideoList();
  const toggle = () => setIsMobileCommentOpen(!isMobileCommentOpen);

  const getVideoTemplate = useCallback(
    () => (
      <iframe
        width="100%"
        src={`https://www.youtube.com/embed/${vid}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    ),
    [vid],
  );

  useEffect(() => {
    if (error)
      navigator({
        pathname: '/NOTFOUND',
      });
  }, [error]);

  return (
    <Container>
      <NavBar />
      <IFrameWrapper>{getVideoTemplate()}</IFrameWrapper>
      {videoInfo && !videoInfoLoading && !isMobileCommentOpen && (
        <>
          <InfoContainer>
            <VideoTag color={colors.light.blue} tagList={videoInfo.tags} />
            <VideoTitle title={videoInfo.title} />
            <VideoInfo viewCount={videoInfo.viewCount} uploadDate={videoInfo.uploadDate} />
          </InfoContainer>
          <VideoIcons like={videoInfo.like} unlike={videoInfo.unlike} />
          <ChannelInfo
            profile={videoInfo.thumbnail.user}
            author={videoInfo.author}
            subscribeCount={videoInfo.subscribeCount}
          />
        </>
      )}
      <CommentHandler isMobileCommentOpen={isMobileCommentOpen} toggle={toggle} />
      {videoInfo && videoList && !videoListLoading && !isMobileCommentOpen && (
        <VideoContainer videoList={videoList.filter((video) => video.id !== videoInfo.id)} />
      )}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
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
