import colors from 'Constants/colors';
import styled from 'styled-components';

function VideoProgressBar({ progress }) {
  return <StyledProgressBar progress={progress} />;
}

const StyledProgressBar = styled.div`
  position: absolute;
  top: 0;
  width: ${(props) => props.progress || '100'}%;
  height: 4px;
  background-color: ${({ theme, progress }) => (progress ? colors[theme.currentMode].mainColor : '#CBCBCB')};
  margin-bottom: 3px;
`;

export default VideoProgressBar;
