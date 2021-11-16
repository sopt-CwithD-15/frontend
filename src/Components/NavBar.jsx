import styled from 'styled-components';
import colors from 'Constants/colors';
import logo from '../Assets/icon/logoIC.svg';
import modeChange from '../Assets/icon/modeChangeIC.svg';
import search from '../Assets/icon/searchIC.svg';
import dotMenu from '../Assets/icon/dotMenuIC.svg';
import login from '../Assets/icon/loginIC.svg';

function NavBar() {
  return (
    <StyledNavBar>
      <LogoImg src={logo} alt="logo"></LogoImg>
      <StyledUL>
        <li>
          <ModeImg src={modeChange} alt="modeChange"></ModeImg>
        </li>
        <li>
          <SearchImg src={search} alt="search"></SearchImg>
        </li>
        <li>
          <MenuImg src={dotMenu} alt="menu"></MenuImg>
        </li>
        <li>
          <LoginBtn src={login} alt="login"></LoginBtn>
        </li>
      </StyledUL>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 4.5rem;
  z-index: 1004;
  color: black;

  border-bottom: ${({ theme }) => ' 1px solid' + colors[theme.currentMode].searchTabBorder};
  background-color: ${({ theme }) => colors[theme.currentMode].navBarBg};
`;

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  & > li {
    float: left;
  }
`;

const LogoImg = styled.img`
  width: 8.9rem;
  height: 2.6rem;
  margin-left: 1.3rem;
`;

const ModeImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
`;

const SearchImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
`;

const MenuImg = styled.img`
  width: 2.3rem;
  height: 3.3rem;
  margin-right: 1rem;
`;

const LoginBtn = styled.img`
  width: 8.7rem;
  height: 3.7rem;
  margin: 0.7rem;
`;
export default NavBar;
