import styled from 'styled-components';

function VideoTag(props) {
  const { color = 'white' } = props;
  return (
    <StyledVideoTag>
      <Tag color={color}>PLAYLIST</Tag>
      <Tag color={color}>CALMMOOD</Tag>
    </StyledVideoTag>
  );
}

const StyledVideoTag = styled.ul`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

const Tag = styled.li`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: 1.1rem;
  line-height: 1.1rem;
  letter-spacing: -0.03rem;
  &::before {
    content: '#';
    color: ${(props) => props.color};
  }
`;

export default VideoTag;
