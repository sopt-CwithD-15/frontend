import styled from 'styled-components';

function VideoTitle({ title }) {
  return <StyledViedoTitle>{title}</StyledViedoTitle>;
}

const StyledViedoTitle = styled.h2`
  margin: 1rem 0 0.5rem 0;
  padding: 0 0.5rem;

  font-size: 1.3rem;
  font-family: Arial;
`;

export default VideoTitle;
