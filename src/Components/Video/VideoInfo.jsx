import styled from 'styled-components';
import newIcon from 'Assets/icon/new.png';
import colors from 'Constants/colors';

function VideoInfo() {
  return (
    <StyledViedoInfo>
      <span>조회수 45,187회</span>
      <span>2021. 11. 9.</span>
      <div>
        <img src={newIcon} alt="new" />
      </div>
    </StyledViedoInfo>
  );
}

const StyledViedoInfo = styled.div`
  padding: 0 0.5rem;
  position: relative;
  display: flex;
  align-items: center;

  & > span {
    color: ${({ theme }) => colors[theme.currentMode].subText};
    font-family: Roboto;
    letter-spacing: -0.03rem;
    font-size: 0.769rem;
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
