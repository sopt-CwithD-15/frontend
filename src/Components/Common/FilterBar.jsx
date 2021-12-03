import { useState } from 'react';
import styled from 'styled-components';
import colors from 'Constants/colors';
import { ReactComponent as refreshIC } from 'Assets/icon/Filterbar/refreshIC.svg';

function FilterBar() {
  const [click, setClick] = useState('all');

  const handlerClick = (e) => {
    setClick(e.target.name);
  };

  return (
    <StyledFilterbar>
      <FilterWrapper>
        <FilterBtn name={'all'} onClick={handlerClick} click={click}>
          전체
        </FilterBtn>
        <FilterBtn name={'music'} onClick={handlerClick} click={click}>
          음악
        </FilterBtn>
        <FilterBtn name={'live'} onClick={handlerClick} click={click}>
          실시간
        </FilterBtn>
      </FilterWrapper>
      <RefreshImg />
    </StyledFilterbar>
  );
}

const StyledFilterbar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 4.5rem;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 1.3rem;
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const FilterBtn = styled.button`
  height: 2.2rem;
  font-size: 1.2rem;
  padding: 0 1rem;
  border: 0;
  outline: 0;
  border-radius: 3rem;
  background-color: ${(props) =>
    props.click === props.name ? colors.light.filterBarActiveBg : colors.light.searchBarBg};
  color: ${(props) => (props.click === props.name ? colors.light.searchBarBg : colors.light.filterBarActiveBg)};
  margin-right: 1rem;
`;

const RefreshImg = styled(refreshIC)`
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 0.7rem;
  & > * {
    fill: ${({ theme }) => colors[theme.currentMode].navBarLogin};
  }
`;
export default FilterBar;
