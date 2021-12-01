import styled from 'styled-components';
import colors from 'Constants/colors';
import { applyMediaQuery } from 'Style/mediaQuery';

function SideBarTab(props) {
  const { label, icon: Icon } = props;
  return (
    <StyledTab>
      <Icon />
      <span>{label}</span>
    </StyledTab>
  );
}

const StyledTab = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${applyMediaQuery('tablet')} {
    flex-direction: column;
    gap: 0.5rem;
  }

  & > svg {
    width: 1.5rem;
    height: 1.5rem;

    fill: ${({ theme }) => (theme.currentMode === 'dark' ? 'white' : '')};
  }

  & > span {
    color: ${({ theme }) => colors[theme.currentMode].subText};
  }
`;

export default SideBarTab;
