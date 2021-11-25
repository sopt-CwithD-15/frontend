import styled from 'styled-components';
import Video from 'Components/Video';

function VideoContainer({ videoList }) {
  return <Container>{videoList && videoList.map((video) => <Video videoInfo={video} key={video.id} />)}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default VideoContainer;
