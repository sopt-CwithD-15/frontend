import styled from 'styled-components';
import colors from 'Constants/colors';
import useDarkmode from 'Cores/Hooks/useDarkmode';
import { ReactComponent as LogoIC } from 'Assets/icon/Navbar/logoIC.svg';
import { ReactComponent as ModeChangeIC } from 'Assets/icon/Navbar/modeChangeIC.svg';
import { ReactComponent as SearchIC } from 'Assets/icon/Navbar/searchIC.svg';
import { ReactComponent as DotMenuIC } from 'Assets/icon/Navbar/dotMenuIC.svg';
import { ReactComponent as LoginIC } from 'Assets/icon/Navbar/loginIC.svg';
import { ReactComponent as DarkModeChangeIC } from 'Assets/icon/Navbar/darkModeChangeIC.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  const { currentMode, toggleMode } = useDarkmode();

  const handlerClick = () => {
    toggleMode();
  };

  return (
    <StyledNavBar>
      <Link to="/">
        <Logo alt="logo" />
      </Link>
      <StyledUL>
        <li onClick={handlerClick}>
          {currentMode === 'light' ? <ModeChange alt="modeChange" /> : <DarkModeChange alt="modeChange" />}
        </li>
        <li>
          <Search alt="search" />
        </li>
        <li>
          <DotMenu alt="menu" />
        </li>
        <li>
          <Login alt="login" />
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

const Logo = styled(LogoIC)`
  width: 8.9rem;
  height: 2.6rem;
  margin-left: 1.3rem;
  & > :nth-child(n + 4) {
    fill: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;

const ModeChange = styled(ModeChangeIC)`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
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
    fill: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;

const DotMenu = styled(DotMenuIC)`
  width: 2.3rem;
  height: 3.3rem;
  margin-right: 1rem;
  & > * {
    fill: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;

const Login = styled(LoginIC)`
  width: 8.7rem;
  height: 3.7rem;
  margin: 0.7rem;
  & > :first-child {
    fill: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
  & > :nth-child(n + 2),
  & > :last-child > * {
    stroke: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;
export default NavBar;
