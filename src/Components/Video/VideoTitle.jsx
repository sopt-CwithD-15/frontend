import styled from 'styled-components';

function VideoTitle() {
  return <StyledViedoTitle>Playlist | 나른한 인스타 감성에 취하고 싶을 때</StyledViedoTitle>;
}

const StyledViedoTitle = styled.h2`
  margin: 1rem 0 0.5rem 0;
  padding: 0 0.5rem;

  font-size: 1.3rem;
  font-family: Arial;
`;

export default VideoTitle;
