import { useEffect, useState } from 'react';
import styled, { css, ThemeProvider as SizeProvider } from 'styled-components';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import VideoInfo from './VideoInfo';
import VideoProgressBar from './VideoProgressBar';
import VideoTitle from './VideoTitle';
import VideoTag from './VideoTag';
import VideoRuntime from './VideoRuntime';
import VideoHot from './VideoHot';
import Responsive, { useMedia } from 'Components/Responsive';
import { applyMediaQuery } from 'Style/mediaQuery';

import colors from 'Constants/colors';
import { ReactComponent as AddList } from 'Assets/icon/addList.svg';
import { ReactComponent as PlayList } from 'Assets/icon/playlist.svg';
import { ReactComponent as DotMenu } from 'Assets/icon/dot-menu.svg';
import { shortenDate } from 'Utils/shortenDate';

function Video({ videoInfo }) {
  const { videoId, title, viewCount, createdAt, author, description, runtime, thumbnail, isHot } = videoInfo;
  const navigator = useNavigate();
  const location = useLocation();
  const { isDesktop, isTablet } = useMedia();
  const [isVideoPage, setIsVideoPage] = useState(false);
  const tags = ['제로초', '리액트', 'React'];
  const hideOnVideoPage = (element) => !isVideoPage && element;

  useEffect(() => {
    if (location) setIsVideoPage(location.pathname === '/video');
  }, [location]);

  return (
    <SizeProvider
      theme={{
        small: isVideoPage,
      }}>
      <StyledVideo
        onClick={() =>
          navigator({
            pathname: '/video',
            search: `?${createSearchParams({
              vid: videoId,
            })}`,
          })
        }>
        <Wrapper>
          <VideoThumbnail>
            <img src={thumbnail} alt="video-thumbnail" />
            <VideoProgressBar />
          </VideoThumbnail>
          <ToolWrapper>
            <Responsive mobile>
              <FlexWrapper>
                <UserThumbnail>
                  <img src={author.profileImage} alt="user-thumbnail" />
                </UserThumbnail>
                <VideoTag tagList={tags} />
              </FlexWrapper>
            </Responsive>
            {hideOnVideoPage(<VideoRuntime runtime={runtime} />)}
          </ToolWrapper>
        </Wrapper>

        <Responsive mobile>
          <VideoTitleMenuWrapper>
            <VideoInfoWrapper>
              <VideoTitle title={title} />
              <VideoInfo viewCount={viewCount} uploadDate={shortenDate(createdAt)} />
            </VideoInfoWrapper>
            <PlayListWrapper>
              {isHot ? <VideoHot width="2.8rem" height="1.5rem" fontSize="0.9rem" /> : <></>}
              <DotMenu />
            </PlayListWrapper>
          </VideoTitleMenuWrapper>
        </Responsive>

        <Responsive tablet desktop>
          <VideoInfoWrapper>
            <VideoTitle title={title} />
            <VideoInfo viewCount={viewCount} uploadDate={shortenDate(createdAt)} isHot={isHot} />
            <UserInfoWrapper>
              {hideOnVideoPage(
                <UserThumbnail>
                  <img src={author.profileImage} alt="user-thumbnail" />
                </UserThumbnail>,
              )}
              <UserName>{author.nickname}</UserName>
            </UserInfoWrapper>
            {hideOnVideoPage(<VideoDescription>{description}</VideoDescription>)}
            {isVideoPage && isDesktop && (
              <PlayListWrapper>
                <AddList />
                <PlayList />
                <DotMenu />
              </PlayListWrapper>
            )}
          </VideoInfoWrapper>
          {!(isVideoPage && isDesktop) && (
            <PlayListWrapper>
              <AddList />
              <PlayList />
              <DotMenu />
            </PlayListWrapper>
          )}
        </Responsive>
      </StyledVideo>
    </SizeProvider>
  );
}

const StyledVideo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem 1.5rem 0rem 1rem;
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  padding-top: 20.3rem;
  border-radius: 0 0 8px 8px;

  ${applyMediaQuery('mobile')} {
    border-radius: 0 0 0 72px;
  }

  ${applyMediaQuery('tablet')} {
    ${({ theme }) =>
      theme.small &&
      css`
        padding-top: 7.2rem;
        border-radius: 0 0 4px 4px;
      `};
  }
  ${applyMediaQuery('desktop')} {
    ${({ theme }) =>
      theme.small &&
      css`
        padding-top: 10rem;
        border-radius: 0 0 4px 4px;
      `};
  }

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
  flex: 3;
  ${applyMediaQuery('mobile')} {
    flex: unset;
  }
  ${applyMediaQuery('tablet')} {
    ${({ theme }) =>
      theme.small &&
      css`
        flex: 0.77;
      `};
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

const VideoTitleMenuWrapper = styled.div`
  display: flex;
  padding-right: 1.2rem;
`;

const VideoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;

  gap: 0.5rem;
`;

const PlayListWrapper = styled.div`
  margin-left: auto;
  display: flex;
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
  ${applyMediaQuery('mobile')} {
    margin-top: 1.3rem;
  }
`;

const VideoDescription = styled.p`
  color: ${({ theme }) => colors[theme.currentMode].subText};

  font-size: 0.9rem;
  line-height: 1.4rem;
  letter-spacing: -0.03rem;
  max-height: 11.2rem;
  white-space: break-spaces;
  overflow-y: hidden;
  text-overflow: ellipsis;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${applyMediaQuery('tablet')} {
    ${({ theme }) =>
      theme.small &&
      css`
        order: 1;
      `};
  }
`;

const UserName = styled.span`
  color: ${({ theme }) => colors[theme.currentMode].subText};

  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: -0.03rem;
`;

export default Video;
