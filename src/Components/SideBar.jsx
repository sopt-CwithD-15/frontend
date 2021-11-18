import colors from 'Constants/colors';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as finderIC } from '../Assets/icon/Filterbar/finderIC.svg';

const SideBar = () => {
  return (
    <StyledSidebar>
      <FinderImg />
      <span>탐색</span>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  height: 4.5rem;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 2.1rem;
  margin-right: 1.3rem;
  & > span {
    font-size: 1.2rem;
    color: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;

const FinderImg = styled(finderIC)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.3rem;
  & > .middle {
    fill: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
  & > .circle {
    stroke: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;
export default SideBar;
