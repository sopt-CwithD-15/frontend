import styled from 'styled-components';
import Responsive from 'Components/Responsive';
import Comment from 'Components/Comment';
import colors from 'Constants/colors';
import reply from 'Assets/icon/reply.svg';
import filter from 'Assets/icon/filter.svg';
import close from 'Assets/icon/close.svg';
<<<<<<< HEAD
import me from 'Assets/icon/me-thumbnail.svg';
=======
>>>>>>> comment

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
<<<<<<< HEAD
          <CommentWarnText>
            댓글을 사용할 때는 타인을 존중하고 <span>커뮤니티 가이드</span> 를 준수해야 합니다.
          </CommentWarnText>
          <InputWrapper>
            <img src={me} alt="my-thumbnail" />
            <CommentInput placeholder="공개 댓글 추가..." />
          </InputWrapper>
=======
>>>>>>> comment
          <CommentBody>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </CommentBody>
        </CommentContainer>
      </Responsive>
    </>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
`;

const CommentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;

<<<<<<< HEAD
  background-color: ${({ theme }) => colors[theme.currentMode].mobileCommentListHeader};

  & img {
    filter: ${({ theme }) => (theme.currentMode === 'dark' ? 'brightness(1) invert(1)' : 'brightness(0) invert(0)')};
  }
`;

const CommentWarnText = styled.p`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  letter-spacing: -0.03rem;
  & > span {
    color: ${colors.light.blue};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  padding-top: 0;
`;

const CommentInput = styled.input`
  width: 100%;
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  &::placeholder {
    color: ${({ theme }) => colors[theme.currentMode].iconText};
    font-size: 1.2rem;
    letter-spacing: -0.03rem;
  }

  &:hover {
    outline: none;
  }

  background-color: transparent;
  border: none;
=======
  background-color: #f4f4f4;
  border-bottom: 0.02rem solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
>>>>>>> comment
`;

const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  & > img {
    width: 1.6rem;
    height: 1.2rem;
  }
<<<<<<< HEAD

  & > span {
    color: ${({ theme }) => colors[theme.currentMode].iconText};
  }
=======
>>>>>>> comment
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

<<<<<<< HEAD
const CommentBody = styled.ul`
  display: flex;
  flex-direction: column;
`;
=======
const CommentBody = styled.ul``;
>>>>>>> comment

export default CommentList;
