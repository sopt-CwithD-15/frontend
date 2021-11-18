import styled from 'styled-components';
import colors from 'Constants/colors';

function VideoTitle({ title }) {
  return <StyledVideoTitle>{title}</StyledVideoTitle>;
}

const StyledVideoTitle = styled.h2`
  margin: 1rem 0 0.5rem 0;
  padding: 0 0.5rem;
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1.3rem;
  font-family: Arial;
`;

export default VideoTitle;
