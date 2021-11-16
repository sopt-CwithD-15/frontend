import colors from 'Constants/colors';
import styled from 'styled-components';

function VideoProgressBar({ progress }) {
  return <StyledProgessBar progress={progress} />;
}

const StyledProgessBar = styled.div`
  width: ${(props) => props.progress || '100'}%;
  height: 3px;
  background-color: ${({ theme, progress }) => (progress ? colors[theme.currentMode].mainColor : '#CBCBCB')};
  margin-bottom: 3px;
`;

export default VideoProgressBar;
