import styled from 'styled-components';
import newIcon from 'Assets/icon/new.svg';
import colors from 'Constants/colors';
import { applyMediaQuery } from 'Style/mediaQuery';

function VideoInfo({ viewCount, uploadDate }) {
  return (
    <StyledVideoInfo>
      <span>{`조회수 ${viewCount.toLocaleString()}회`}</span>
      <span>{uploadDate}</span>
      <div>
        <img src={newIcon} alt="new" />
      </div>
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

  & > span {
    color: ${({ theme }) => colors[theme.currentMode].subText};
    font-family: Roboto;
    letter-spacing: -0.03rem;
    font-size: 1rem;
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
