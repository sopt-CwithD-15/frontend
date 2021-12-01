import React from 'react';
import styled from 'styled-components';
import colors from 'Constants/colors';

const VideoHot = ({ width, height, fontSize }) => {
  return (
    <HotLabel width={width} height={height} fontSize={fontSize}>
      HOT
    </HotLabel>
  );
};

export default VideoHot;

const HotLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  padding: 0.4rem 0.6rem;
  font-weight: bolder;
  border-radius: 3px;
  border: 1px solid ${colors.light.mainColor};
  color: ${colors.light.mainColor};
`;
