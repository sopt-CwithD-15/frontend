import styled from 'styled-components';
import NavBar from 'Components/NavBar';
import VideoContainer from 'Components/VideoContainer';
import FilterBar from 'Components/FilterBar';

function MainPage() {
  return (
    <Container>
      <NavBar />
      <FilterBar />
      <VideoContainer />
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
`;

export default MainPage;
