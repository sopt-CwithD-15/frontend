import styled, { css } from 'styled-components';
import colors from 'Constants/colors';
import { applyMediaQuery } from 'Style/mediaQuery';

function VideoTitle({ title }) {
  return <StyledVideoTitle>{title}</StyledVideoTitle>;
}

const StyledVideoTitle = styled.h2`
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1.8rem;
  line-height: 1.6rem;
  letter-spacing: -0.05rem;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 3.2rem;

  ${applyMediaQuery('mobile')} {
    padding: 0 0.5rem;
    font-size: 1.3rem;
    letter-spacing: -0.03rem;
    margin: 1rem 0 0.5rem 0;
  }

  ${applyMediaQuery('tablet')} {
    font-size: 1.6rem;
    ${({ theme }) =>
      theme.small &&
      css`
        font-size: 1.2rem;
        line-height: 1.4rem;
        max-height: 2.8rem;
      `};
  }
  ${applyMediaQuery('desktop')} {
    ${({ theme }) =>
      theme.small &&
      css`
        font-size: 1.2rem;
        line-height: 1.4rem;
        max-height: 2.8rem;
      `};
  }
  font-family: Arial;
`;

export default VideoTitle;
