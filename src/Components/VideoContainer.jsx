import styled from 'styled-components';
import Video from './Video';

function VideoContainer() {
  return (
    <Container>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export default VideoContainer;
