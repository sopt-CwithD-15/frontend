import styled, { css } from 'styled-components';
import newIcon from 'Assets/icon/new.svg';
import colors from 'Constants/colors';
import { applyMediaQuery } from 'Style/mediaQuery';
import VideoHot from './VideoHot';
import Responsive from 'Components/Responsive';

function VideoInfo({ viewCount, uploadDate, isHot }) {
  return (
    <StyledVideoInfo>
      <span>{`조회수 ${viewCount.toLocaleString()}회`}</span>
      <span>{uploadDate}</span>
      <div>
        <img src={newIcon} alt="new" />
      </div>
      <Responsive tablet desktop>
        {isHot ? <VideoHot width="2.8rem" height="1.5rem" fontSize="0.9rem" /> : <></>}
      </Responsive>
    </StyledVideoInfo>
  );
}

const StyledVideoInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${applyMediaQuery('mobile')} {
    padding: 0 0.5rem;
  }

  ${applyMediaQuery('tablet')} {
    ${({ theme }) =>
      theme.small &&
      css`
        order: 2;
      `};
  }
  & > span {
    color: ${({ theme }) => colors[theme.currentMode].subText};
    font-family: Roboto;
    letter-spacing: -0.03rem;
    ${applyMediaQuery('mobile')} {
      font-size: 1rem;
    }
    ${applyMediaQuery('tablet')} {
      font-size: 1.2rem;
      ${({ theme }) =>
        theme.small &&
        css`
          font-size: 1rem;
        `};
    }

    font-size: 1.4rem;
    ${({ theme }) =>
      theme.small &&
      css`
        font-size: 1.2rem;
      `};
  }

  & > span:first-child {
    &::after {
      content: '∙';
    }
  }

  & > div {
    margin-left: 0.5rem;
  }
`;

export default VideoInfo;
