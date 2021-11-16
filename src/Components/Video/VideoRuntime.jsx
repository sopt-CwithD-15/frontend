import colors from 'Constants/colors';
import styled from 'styled-components';

function VideoRuntime() {
  return <StyledViedoRuntime>29:34</StyledViedoRuntime>;
}

const StyledViedoRuntime = styled.span`
  background-color: ${({ theme }) => colors[theme.currentMode].progressBg};
  border-radius: 30px;
  padding: 0.2rem 0.6rem;
  color: white;
  font-size: 1rem;
`;

export default VideoRuntime;
