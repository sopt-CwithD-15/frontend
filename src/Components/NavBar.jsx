import styled from 'styled-components';
import colors from 'Constants/colors';

function NavBar() {
  return <StyledNavBar>네브바입니다.</StyledNavBar>;
}

const StyledNavBar = styled.ul`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1004;
  color: black;

  border-bottom: 1px solid gray;
  background-color: ${({ theme }) => colors[theme.currentMode].navBarBg};
`;

export default NavBar;
