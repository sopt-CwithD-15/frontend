import React from 'react';
import styled from 'styled-components';
import SideBarTab from './SideBarTab';
import Responsive from 'Components/Responsive';
import colors from 'Constants/colors';
import { mobileList, storageList, famousYoutube, channelSearch, youtubeMore, lastTabs } from 'Constants/sidebar-list';
import { TERMS } from 'Constants/terms-text';
import { applyMediaQuery } from 'Style/mediaQuery';
import { ReactComponent as finderIC } from 'Assets/icon/Filterbar/finderIC.svg';
import { ReactComponent as LoginIC } from 'Assets/icon/Sidebar/loginBtn.svg';

const SideBar = () => {
  const showSideBarTab = (tabList, tabTitle) => {
    return (
      <>
        {tabTitle && <SidebarTabTitle>{tabTitle}</SidebarTabTitle>}
        {tabList.map((tab) => (
          <SideBarTab key={`${tab.label}-${new Date().getTime()}`} icon={tab.icon} label={tab.label} />
        ))}
      </>
    );
  };

  return (
    <>
      <Responsive mobile>
        <MobileSideBar>
          <FinderImg />
          <span>탐색</span>
        </MobileSideBar>
      </Responsive>

      <Responsive tablet>
        <StyledSidebar>
          <SidebarTabList>{showSideBarTab([...mobileList, ...storageList])}</SidebarTabList>
        </StyledSidebar>
      </Responsive>

      <Responsive desktop>
        <StyledSidebar>
          <SidebarTabList>{showSideBarTab(mobileList)}</SidebarTabList>
          <SidebarTabList>{showSideBarTab(storageList)}</SidebarTabList>
          <LoginIntro>
            <LoginText>{`로그인하면 동영상에 좋아요를
            표시하고 댓글을 달거나 구독할 수 있습니다.`}</LoginText>
            <LoginBtn />
          </LoginIntro>
          <SidebarTabList>{showSideBarTab(famousYoutube, '인기 YOUTUBE')}</SidebarTabList>
          <SidebarTabList>{showSideBarTab(channelSearch)}</SidebarTabList>
          <SidebarTabList>{showSideBarTab(youtubeMore, 'YOUTUBE 더보기')}</SidebarTabList>
          <SidebarTabList>{showSideBarTab(lastTabs)}</SidebarTabList>
          <SidebarTermList>
            <Term>{TERMS[0]}</Term>
            <Term>{TERMS[1]}</Term>
            <Term>{TERMS[2]}</Term>
          </SidebarTermList>
        </StyledSidebar>
      </Responsive>
    </>
  );
};

const StyledSidebar = styled.aside`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  margin-top: 4.5rem;
  padding: 1rem 0;

  ${applyMediaQuery('tablet')} {
    width: 6rem;
    height: calc(100vh - 4.5rem);
  }

  ${applyMediaQuery('desktop')} {
    width: 22rem;
    height: calc(100vh - 4.5rem);
  }

  overflow-y: scroll;
  background-color: ${({ theme }) => colors[theme.currentMode].navBarBg};

  display: flex;
  flex-direction: column;
`;

const SidebarTabTitle = styled.h3`
  color: ${({ theme }) => colors[theme.currentMode].copyRightText};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.03rem;
`;

const SidebarTabList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
  border-bottom: 0.02rem solid #e5e5e5;
  padding: 1rem;

  ${applyMediaQuery('tablet')} {
    align-items: center;
    gap: 3rem;
    border-bottom: none;
  }
`;

const MobileSideBar = styled.div`
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

const LoginIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const LoginText = styled.p`
  color: ${({ theme }) => colors[theme.currentMode].subText};
  letter-spacing: -0.04rem;
  white-space: pre-line;
`;

const LoginBtn = styled(LoginIC)``;

const SidebarTermList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Term = styled.p`
  color: ${({ theme }) => colors[theme.currentMode].copyRightText};
  letter-spacing: -0.04rem;
  white-space: pre-line;
  line-height: 1.35rem;
`;

export default SideBar;
