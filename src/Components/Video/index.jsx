import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import VideoInfo from './VideoInfo';
import VideoProgressBar from './VideoProgressBar';
import VideoTitle from './VideoTitle';
import VideoTag from './VideoTag';

import video1 from 'Assets/img/video1.png';
import VideoRuntime from './VideoRuntime';

function Video() {
  const navigator = useNavigate();
  return (
    <StyledVideo onClick={() => navigator('/video?vid=123')}>
      <VideoProgressBar />
      <Wrapper>
        <VideoThumbnail>
          <img src={video1} alt="video-thumbnail" />
        </VideoThumbnail>
        <ToolWrapper>
          <FlexWrapper>
            <UserThumbnail>
              <img
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
                alt="user-thumbnail"
              />
            </UserThumbnail>
            <VideoTag />
          </FlexWrapper>
          <VideoRuntime />
        </ToolWrapper>
      </Wrapper>
      <VideoTitle />
      <VideoInfo />
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
  width: 3.538rem;
  height: 3.538rem;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1001;

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
