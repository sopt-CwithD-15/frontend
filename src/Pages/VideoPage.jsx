import { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from 'Components/Common/NavBar';
import VideoContainer from 'Components/Video/VideoContainer';
import VideoInfo from 'Components/Video/VideoInfo';
import VideoTitle from 'Components/Video/VideoTitle';
import VideoTag from 'Components/Video/VideoTag';
import VideoIcons from 'Components/Video/VideoIcons';
import CommentHandler from 'Components/Comment/CommentHandler';
import ChannelInfo from 'Components/Video/ChannelInfo';
import colors from 'Constants/colors';
import useVideoInfo from 'Cores/Hooks/useVideoInfo';
import { applyMediaQuery } from 'Style/mediaQuery';
import { shortenDate } from 'Utils/shortenDate';
import Responsive from 'Components/Responsive';
import { ReactComponent as FoldImg } from 'Assets/icon/foldToggleBtn.svg';

function VideoPage() {
  const navigator = useNavigate();
  const [isMobileCommentOpen, setIsMobileCommentOpen] = useState(false);
  const [isDesktopVideoListOpen, setIsDesktopVideoListOpen] = useState(true);
  const { data: videoInfo, loading: videoInfoLoading, error, vid } = useVideoInfo();
  const toggleMobileComment = () => setIsMobileCommentOpen(!isMobileCommentOpen);
  const toggleDesktopVideoList = () => setIsDesktopVideoListOpen(!isDesktopVideoListOpen);

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
      <FlexWrapper>
        <ColumnWrapper>
          <Responsive desktop>
            <VideoListToggleBtn onClick={toggleDesktopVideoList}>
              <FoldImg />
            </VideoListToggleBtn>
          </Responsive>
          {videoInfo && !videoInfoLoading && !isMobileCommentOpen && (
            <>
              <InfoContainer>
                <VideoTag color={colors.light.blue} tagList={videoInfo.video.tags} />
                <VideoTitle title={videoInfo.video.title} />
                <VideoInfo viewCount={videoInfo.video.viewCount} uploadDate={shortenDate(videoInfo.video.createdAt)} />
              </InfoContainer>
              <VideoIcons
                like={videoInfo.video.likeCount}
                dislike={videoInfo.video.dislikeCount}
                isLike={videoInfo.video.isLike}
                isDislike={videoInfo.video.isDislike}
                vid={videoInfo.video.videoId}
              />
              <ChannelInfo
                profile={videoInfo.video.author.profileImage}
                author={videoInfo.video.author.nickname}
                subscribeCount={1234}
              />
            </>
          )}
          {!videoInfoLoading && videoInfo && (
            <CommentHandler
              isMobileCommentOpen={isMobileCommentOpen}
              toggle={toggleMobileComment}
              comments={videoInfo.comments}
              vid={videoInfo.video.videoId}
            />
          )}
          <Responsive mobile tablet>
            {videoInfo && !videoInfoLoading && !isMobileCommentOpen && (
              <VideoContainer videoList={videoInfo.recommended} />
            )}
          </Responsive>
        </ColumnWrapper>
        <Responsive desktop>
          {videoInfo && !videoInfoLoading && !isMobileCommentOpen && (
            <FoldableVideoList isOpen={isDesktopVideoListOpen}>
              <VideoContainer videoList={videoInfo.recommended} />
            </FoldableVideoList>
          )}
        </Responsive>
      </FlexWrapper>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};

  ${applyMediaQuery('desktop')} {
    background-color: ${({ theme }) => colors[theme.currentMode].navBarBg};
  }

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
  gap: 1rem;
  padding: 1.1rem;
  ${applyMediaQuery('mobile')} {
    padding: 0.5rem;
    gap: 0;
  }
`;

const IFrameWrapper = styled.div`
  position: relative;
  ${applyMediaQuery('mobile')} {
    padding-top: 20.3rem;
  }
  ${applyMediaQuery('tablet')} {
    padding-top: 43rem;
  }
  ${applyMediaQuery('desktop')} {
    padding-top: 40%;
  }
`;

const FoldableVideoList = styled.div`
  ${(props) =>
    props.isOpen
      ? css`
          overflow: auto;
          animation: open 300ms ease-in-out forwards;
        `
      : css`
          overflow: hidden;
          animation: fold 300ms ease-in-out forwards;
        `};

  background-color: ${({ theme }) => colors[theme.currentMode].rightVideoListBg};

  @keyframes open {
    from {
      width: 0;
      height: 0;
    }

    to {
      width: 30%;
      height: auto;
    }
  }
  @keyframes fold {
    from {
      width: 30%;
    }

    to {
      width: 0;
      height: 0;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const ColumnWrapper = styled(FlexWrapper)`
  flex-direction: column;
  flex: 1;

  position: relative;
`;

const VideoListToggleBtn = styled.button`
  padding: 0.8rem 0.3rem;
  border: 0;
  border-radius: 0 0 0 10px;
  background-color: ${({ theme }) => colors[theme.currentMode].rightVideoListBg};

  position: absolute;
  top: 0;
  right: 0;

  & svg {
    & path {
      fill: ${({ theme }) => (theme.currentMode === 'dark' ? 'white' : 'black')};
    }
    width: 2rem;
  }
`;

export default VideoPage;
