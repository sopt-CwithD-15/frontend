import styled from 'styled-components';
import colors from 'Constants/colors';
import { applyMediaQuery } from 'Style/mediaQuery';

function VideoTitle({ title }) {
  return <StyledVideoTitle>{title}</StyledVideoTitle>;
}

const StyledVideoTitle = styled.h2`
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1.4rem;
  letter-spacing: -0.05rem;

  ${applyMediaQuery('mobile')} {
    padding: 0 0.5rem;
    font-size: 1.3rem;
    letter-spacing: -0.03rem;
    margin: 1rem 0 0.5rem 0;
  }
  font-family: Arial;
`;

export default VideoTitle;
