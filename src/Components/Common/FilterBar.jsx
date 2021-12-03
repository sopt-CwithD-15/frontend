import { useState } from 'react';
import styled from 'styled-components';
import colors from 'Constants/colors';
import { ReactComponent as refreshIC } from 'Assets/icon/Filterbar/refreshIC.svg';
import { ReactComponent as filterIC } from 'Assets/icon/Filterbar/filter.svg';
import Responsive from 'Components/Responsive';
import { applyMediaQuery } from 'Style/mediaQuery';

function FilterBar() {
  const [click, setClick] = useState('all');

  const handlerClick = (e) => {
    setClick(e.target.name);
  };

  return (
    <StyledFilterbar>
      <FilterWrapper>
        <Responsive mobile>
          <FilterBtn name={'all'} onClick={handlerClick} click={click}>
            전체
          </FilterBtn>
          <FilterBtn name={'music'} onClick={handlerClick} click={click}>
            음악
          </FilterBtn>
          <FilterBtn name={'live'} onClick={handlerClick} click={click}>
            실시간
          </FilterBtn>
        </Responsive>
        <Responsive tablet desktop>
          <Filter alt="filter"></Filter>
          <span>필터</span>
        </Responsive>
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
  border-bottom: 1px solid ${colors.light.searchTabBorder};
  ${applyMediaQuery('mobile')} {
    border-bottom: 0;
    margin-left: 1.3rem;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 11px;
    color: ${colors.light.subText};
    margin-left: 0.8rem;
  }
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

const Filter = styled(filterIC)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
`;
export default FilterBar;
