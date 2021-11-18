import styled from 'styled-components';
import Responsive from 'Components/Responsive';
import Comment from 'Components/Comment';
import colors from 'Constants/colors';
import reply from 'Assets/icon/reply.svg';
import filter from 'Assets/icon/filter.svg';
import close from 'Assets/icon/close.svg';

const temporalComments = [
  {
    author: 'Julia Kim',
    text: 'Hello this is my text temporla test case comments',
    like: '1.2만',
    dislike: 12,
  },
  {
    author: 'Julia Kim',
    text: 'Hello this is my text temporla test case comments',
    like: '2.1천',
    dislike: 5,
  },
];

function CommentList({ comments = temporalComments, toggle }) {
  return (
    <>
      <Responsive mobile>
        <CommentContainer>
          <CommentHeader>
            <ReplyWrapper>
              <img src={reply} alt="reply-icon" />
              <span>{comments.length}</span>
            </ReplyWrapper>
            <RightWrapper>
              <img src={filter} alt="filter-icon" />
              <CloseButton onClick={toggle}>
                <img src={close} alt="close-icon" />
              </CloseButton>
            </RightWrapper>
          </CommentHeader>
          <CommentBody>
            <Comment />
          </CommentBody>
        </CommentContainer>
      </Responsive>
    </>
  );
}

const CommentContainer = styled.div`
  position: absolute;
  /* top: calc(4.5rem + 20.3rem); -> 메인 변경점 반영 */
  top: calc(1.1rem + 20.3rem);
  width: 100%;
  height: 100%;
  z-index: 1001;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
`;

const CommentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;

  background-color: #f4f4f4;
  border-bottom: 0.02rem solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
`;

const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  & > img {
    width: 1.6rem;
    height: 1.2rem;
  }
`;

const RightWrapper = styled(ReplyWrapper)`
  & img {
    width: 1.2rem;
  }

  display: flex;
  gap: 1rem;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
`;

const CommentBody = styled.ul``;

export default CommentList;
