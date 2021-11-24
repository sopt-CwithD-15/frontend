import styled, { css } from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import VideoInfo from './VideoInfo';
import VideoProgressBar from './VideoProgressBar';
import VideoTitle from './VideoTitle';
import VideoTag from './VideoTag';

import VideoRuntime from './VideoRuntime';
import Responsive from 'Components/Responsive';
import { applyMediaQuery } from 'Style/mediaQuery';

import colors from 'Constants/colors';
import { ReactComponent as AddList } from 'Assets/icon/addList.svg';
import { ReactComponent as PlayList } from 'Assets/icon/playlist.svg';
import { ReactComponent as DotMenu } from 'Assets/icon/dot-menu.svg';

function Video({ videoInfo }) {
  const navigator = useNavigate();
  const { id, thumbnail, tags, viewCount, uploadDate, runtime, title, author, desc } = videoInfo;
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
      <Wrapper>
        <VideoThumbnail>
          <img src={thumbnail.video} alt="video-thumbnail" />
          <VideoProgressBar />
        </VideoThumbnail>
        <ToolWrapper>
          <Responsive mobile>
            <FlexWrapper>
              <UserThumbnail>
                <img src={thumbnail.user} alt="user-thumbnail" />
              </UserThumbnail>
              <VideoTag tagList={tags} />
            </FlexWrapper>
          </Responsive>
          <VideoRuntime runtime={runtime} />
        </ToolWrapper>
      </Wrapper>

      <Responsive mobile>
        <VideoTitle title={title} />
        <VideoInfo viewCount={viewCount} uploadDate={uploadDate} />
      </Responsive>

      <Responsive tablet desktop>
        <VideoInfoWrapper>
          <VideoTitle title={title} />
          <VideoInfo viewCount={viewCount} uploadDate={uploadDate} />
          <UserInfoWrapper>
            <UserThumbnail>
              <img src={thumbnail.user} alt="user-thumbnail" />
            </UserThumbnail>
            <UserName>{author}</UserName>
          </UserInfoWrapper>
          <VideoDescription>{desc}</VideoDescription>
        </VideoInfoWrapper>

        <PlayListWrapper>
          <AddList />
          <PlayList />
          <DotMenu />
        </PlayListWrapper>
      </Responsive>
    </StyledVideo>
  );
}

const StyledVideo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
    padding: 0;
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  padding-top: 20.3rem;

  ${applyMediaQuery('mobile')} {
    border-radius: 0 0 0 72px;
  }

  border-radius: 0 0 8px 8px;
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
  ${applyMediaQuery('mobile')} {
    width: 4.6rem;
    height: 4.6rem;
  }
  width: 2.3rem;
  height: 2.3rem;

  border-radius: 50%;
  overflow: hidden;

  & > img {
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  flex: 3.3;
  ${applyMediaQuery('mobile')} {
    flex: unset;
  }
  position: relative;
`;

const ToolWrapper = styled.div`
  position: absolute;
  padding: 0 0.5rem;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  bottom: 0.5rem;
  ${applyMediaQuery('mobile')} {
    justify-content: space-between;
    bottom: -0.5rem;
  }

  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const VideoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 3;
`;

const PlayListWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;

  & > svg:hover {
    cursor: pointer;
  }

  & svg path {
    ${({ theme }) =>
      theme.currentMode === 'dark' &&
      css`
        fill: white;
      `}
  }
`;

const VideoDescription = styled.p`
  color: ${({ theme }) => colors[theme.currentMode].subText};

  font-size: 0.9rem;
  line-height: 1.4rem;
  letter-spacing: -0.03rem;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  color: ${({ theme }) => colors[theme.currentMode].subText};

  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: -0.03rem;
`;

export default Video;
