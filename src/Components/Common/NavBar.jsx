import styled from 'styled-components';
import colors from 'Constants/colors';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useDarkmode from 'Cores/Hooks/useDarkmode';
import { ReactComponent as LogoIC } from 'Assets/icon/Navbar/logoIC.svg';
import { ReactComponent as ModeChangeIC } from 'Assets/icon/Navbar/modeChangeIC.svg';
import { ReactComponent as SearchIC } from 'Assets/icon/Navbar/searchIC.svg';
import { ReactComponent as DotMenuIC } from 'Assets/icon/Navbar/dotMenuIC.svg';
import { ReactComponent as LoginIC } from 'Assets/icon/Navbar/loginIC.svg';
import { ReactComponent as DarkModeChangeIC } from 'Assets/icon/Navbar/darkModeChangeIC.svg';
import { ReactComponent as MicIC } from 'Assets/icon/Navbar/mic.svg';
import { ReactComponent as MenuIC } from 'Assets/icon/Navbar/menu.svg';
import { ReactComponent as HamburgerIC } from 'Assets/icon/Navbar/hamburger.svg';
import Responsive from 'Components/Responsive';
import { applyMediaQuery } from 'Style/mediaQuery';

function NavBar() {
  const { currentMode, toggleMode } = useDarkmode();
  const location = useLocation();

  const handlerClick = () => {
    toggleMode();
  };

  return (
    <StyledNavBar pathname={location.pathname}>
      <StyledUL>
        <Responsive tablet desktop>
          <Hamburger alt="hamburger" pathname={location.pathname} />
        </Responsive>
        <Link to="/">
          <Logo alt="logo" pathname={location.pathname} />
        </Link>
      </StyledUL>
      <Responsive tablet desktop>
        <SearchBar pathname={location.pathname}>
          <input type="text" placeholder="검색"></input>
          <SearchICWrapper pathname={location.pathname}>
            <Search alt="search" pathname={location.pathname} />
          </SearchICWrapper>
          <Mic alt="mic" pathname={location.pathname} />
        </SearchBar>
      </Responsive>
      <StyledUL>
        <li onClick={handlerClick}>
          {currentMode === 'light' ? (
            <ModeChange alt="modeChange" pathname={location.pathname} />
          ) : (
            <DarkModeChange alt="modeChange" />
          )}
        </li>
        <Responsive mobile>
          <li>
            <Search alt="search" pathname={location.pathname} />
          </li>
        </Responsive>
        <Responsive tablet desktop>
          <li>
            <Menu alt="menu" pathname={location.pathname} />
          </li>
        </Responsive>
        <li>
          <DotMenu alt="menu" pathname={location.pathname} />
        </li>
        <li>
          <Login alt="login" pathname={location.pathname} />
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

  border-bottom: ${({ theme, pathname }) =>
    pathname === '/video'
      ? ' 1px solid' + colors.dark.searchTabBorder
      : ' 1px solid' + colors[theme.currentMode].navBarBg};
  background-color: ${({ theme, pathname }) =>
    pathname === '/video' ? colors.dark.navBarBg : colors[theme.currentMode].navBarBg};
`;

const SearchBar = styled.div`
  display: flex;

  & > input {
    width: 30rem;
    ${applyMediaQuery('desktop')} {
      width: 40vw;
    }
    height: 3rem;
    outline: none;
    border: ${({ theme, pathname }) =>
      pathname === '/video'
        ? '1px solid' + colors.dark.searchTabBorder
        : '1px solid' + colors[theme.currentMode].searchTabBorder};
    background-color: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.searchBarBg : colors[theme.currentMode].searchBarBg};
  }
`;

const SearchICWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 2px 2px 0px;
  border: ${({ theme, pathname }) =>
    pathname === '/video'
      ? '1px solid' + colors.dark.searchTabBorder
      : '1px solid' + colors[theme.currentMode].searchTabBorder};
  width: 5rem;
  height: 3rem;
  background-color: ${({ theme, pathname }) =>
    pathname === '/video' ? colors.dark.navBarBtnBg : colors[theme.currentMode].navBarBtnBg};
`;

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  & > li {
    float: left;
  }
`;

const Logo = styled(LogoIC)`
  width: 8rem;
  height: 2.2rem;
  ${applyMediaQuery('mobile')} {
    margin-left: 1.3rem;
  }
  & > :nth-child(n + 4) {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
`;

const ModeChange = styled(ModeChangeIC)`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
  & > * {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
`;

const DarkModeChange = styled(DarkModeChangeIC)`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
`;

const Search = styled(SearchIC)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
  & > * {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
`;

const DotMenu = styled(DotMenuIC)`
  width: 2.3rem;
  height: 3.3rem;
  /* margin-right: 0.5rem; */
  & > * {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
`;

const Login = styled(LoginIC)`
  width: 8.5rem;
  height: 3.3rem;
  margin: 0.7rem;
  & > :first-child {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
  & > :nth-child(n + 2),
  & > :last-child > * {
    stroke: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
`;

const Mic = styled(MicIC)`
  width: 3rem;
  height: 3rem;
  margin-left: 1.3rem;
  & > :nth-child(1) {
    fill: ${({ theme, pathname }) => (pathname === '/video' ? colors.dark.micBg : colors[theme.currentMode].micBg)};
  }
  & > :last-child {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.micColor : colors[theme.currentMode].micColor};
  }
`;

const Menu = styled(MenuIC)`
  width: 2.5rem;
  height: 2.5rem;
`;

const Hamburger = styled(HamburgerIC)`
  width: 3.2rem;
  height: 2.2rem;
  margin-top: 0.5rem;
  & > * {
    fill: ${({ theme, pathname }) =>
      pathname === '/video' ? colors.dark.navBarLogin : colors[theme.currentMode].navBarLogin};
  }
`;
export default NavBar;
