import styled from 'styled-components';
import VideoInfo from './VideoInfo';
import VideoProgressBar from './VideoProgressBar';
import VideoTitle from './VideoTitle';

function Video() {
  return (
    <StyledVideo>
      <VideoProgressBar />
      <Wrapper>
        <VideoThumbnail>
          <img
            src="https://i.ytimg.com/vi/DHvZLI7Db8E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAS7fYdyk_vT_HJ-cOUn-7gOg3p3g"
            alt="video-thumbnail"
          />
        </VideoThumbnail>
        <UserThumbnail>
          <img
            src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
            alt="user-thumbnail"
          />
        </UserThumbnail>
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
  border: 1px solid black;

  & > iframe {
    width: 100%;
  }
`;

const VideoThumbnail = styled.div`
  padding-top: 40%;
  position: relative;
  border-radius: 0 0 0 72px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: auto;
    top: 0;
    position: absolute;
    display: block;
    object-fit: cover;
  }
`;

const UserThumbnail = styled.div`
  position: absolute;
  left: 3px;
  bottom: 3px;
  width: 46px;
  height: 46px;
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

export default Video;
