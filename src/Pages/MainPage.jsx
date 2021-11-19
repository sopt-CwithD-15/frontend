import styled from 'styled-components';
import NavBar from 'Components/Common/NavBar';
import VideoContainer from 'Components/Video/VideoContainer';
import FilterBar from 'Components/Common/FilterBar';
import useVideoList from 'Cores/Hooks/useVideoList';
import SideBar from 'Components/SideBar';
import Responsive from 'Components/Responsive';
import colors from 'Constants/colors';

function MainPage() {
  const { loading, data } = useVideoList();
  return (
    <Container>
      <NavBar />
      <Responsive mobile>
        <Wrapper>
          <SideBar />
          <Divider />
          <FilterBar />
        </Wrapper>
      </Responsive>
      {data && !loading && <VideoContainer videoList={data} />}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Divider = styled.div`
  width: 0.05rem;
  height: 3rem;
  background-color: ${colors.light.searchTabBorder};
`;
export default MainPage;
