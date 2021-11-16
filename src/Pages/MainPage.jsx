import styled from 'styled-components';
import NavBar from 'Components/NavBar';
import VideoContainer from 'Components/VideoContainer';
import FilterBar from 'Components/FilterBar';
import useVideoList from 'Cores/Hooks/useVideoList';

function MainPage() {
  const { loading, data } = useVideoList();
  return (
    <Container>
      <NavBar />
      <FilterBar />
      {data && !loading && <VideoContainer videoList={data} />}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
`;

export default MainPage;
