import styled from 'styled-components';

function VideoTag() {
  return (
    <StyledVideoTag>
      <Tag>PLAYLIST</Tag>
      <Tag>CALMMOOD</Tag>
    </StyledVideoTag>
  );
}

const StyledVideoTag = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.li`
  color: white;
  font-family: Roboto;
  font-size: 0.846rem;
  line-height: 0.846rem;
  letter-spacing: -0.03rem;

  &::before {
    content: '#';
    color: white;
  }
`;

export default VideoTag;
