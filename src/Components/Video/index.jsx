import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import VideoInfo from './VideoInfo';
import VideoProgressBar from './VideoProgressBar';
import VideoTitle from './VideoTitle';
import VideoTag from './VideoTag';

import VideoRuntime from './VideoRuntime';

function Video({ videoInfo }) {
  const navigator = useNavigate();
  const { id, thumbnail, tags, viewCount, uploadDate, runtime, title } = videoInfo;
  return (
    <StyledVideo
      onClick={() =>
        navigator({
          pathname: '/video',
          search: `?${createSearchParams({
            vid: id,
          })}`,
        })
      }>
      <VideoProgressBar />
      <Wrapper>
        <VideoThumbnail>
          <img src={thumbnail.video} alt="video-thumbnail" />
        </VideoThumbnail>
        <ToolWrapper>
          <FlexWrapper>
            <UserThumbnail>
              <img src={thumbnail.user} alt="user-thumbnail" />
            </UserThumbnail>
            <VideoTag tagList={tags} />
          </FlexWrapper>
          <VideoRuntime runtime={runtime} />
        </ToolWrapper>
      </Wrapper>
      <VideoTitle title={title} />
      <VideoInfo viewCount={viewCount} uploadDate={uploadDate} />
    </StyledVideo>
  );
}

const StyledVideo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const VideoThumbnail = styled.div`
  padding-top: 203px;
  position: relative;
  border-radius: 0 0 0 72px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    display: block;
    object-fit: cover;
  }
`;

const UserThumbnail = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const ToolWrapper = styled.div`
  position: absolute;
  bottom: -0.5rem;

  padding: 0 0.5rem;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export default Video;
