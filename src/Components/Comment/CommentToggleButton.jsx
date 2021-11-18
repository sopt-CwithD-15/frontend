import styled from 'styled-components';

import reply from 'Assets/icon/reply.svg';
import down from 'Assets/icon/down.svg';
import colors from 'Constants/colors';

function CommentToggleButton(props) {
  const { initComment, toggle } = props;
  return (
    <>
      <CommentOpenButton onClick={toggle}>
        <OepnButtonHeader>
          <ReplyWrapper>
            <img src={reply} alt="reply-icon" />
            <span>{initComment.commentCount}</span>
          </ReplyWrapper>
          <img src={down} alt="down-up" />
        </OepnButtonHeader>
        <OepnButtonBody>
          <ImageWrapper>
            <img src={initComment.thumbnail} alt="thumbnail" />
          </ImageWrapper>
          <p>{initComment.text}</p>
        </OepnButtonBody>
      </CommentOpenButton>
    </>
  );
}

const CommentOpenButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
  border: none;
  color: ${({ theme }) => colors[theme.currentMode].iconText};

  & img {
    filter: ${({ theme }) => (theme.currentMode === 'light' ? 'brightness(0) invert(0)' : 'brightness(1) invert(1)')};
  }
`;

const OepnButtonHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OepnButtonBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  & > p {
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: -0.03rem;
  }
`;

const ImageWrapper = styled.div`
  & > img {
    border-radius: 50%;
    overflow: hidden;
    width: 2.3rem;
    height: 2.3rem;
    filter: unset;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.2rem;

  & > img {
    width: 1.6rem;
    height: 1.2rem;
  }
`;

export default CommentToggleButton;
