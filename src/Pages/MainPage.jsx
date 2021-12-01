import styled from 'styled-components';
import NavBar from 'Components/Common/NavBar';
import VideoContainer from 'Components/Video/VideoContainer';
import FilterBar from 'Components/Common/FilterBar';
import SideBar from 'Components/Common/SideBar';
import Responsive from 'Components/Responsive';
import colors from 'Constants/colors';
import useAPI from 'Cores/Hooks/useAPI';
import { applyMediaQuery } from 'Style/mediaQuery';

function MainPage() {
  const { loading, data } = useAPI({
    method: 'GET',
    url: '/video',
  });

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
  min-height: 100%;
  background-color: ${({ theme }) => (theme.currentMode === 'dark' ? 'black' : '#F9F9F9')};

  ${applyMediaQuery('mobile')} {
    background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
  }
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
