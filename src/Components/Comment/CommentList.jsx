import { useState } from 'react';
import styled from 'styled-components';
import Responsive from 'Components/Responsive';
import Comment from 'Components/Comment';
import { client } from 'Cores/api';
import colors from 'Constants/colors';
import reply from 'Assets/icon/reply.svg';
import filter from 'Assets/icon/filter.svg';
import close from 'Assets/icon/close.svg';
import meWhite from 'Assets/icon/me-thumbnail-white.svg';
import { applyMediaQuery } from 'Style/mediaQuery';

function CommentList({ comments, toggle, vid }) {
  const [commentValue, setCommentValue] = useState('');
  const [currentComments, setCurrentComments] = useState(comments);
  const showComment = () =>
    currentComments
      .map((comment) => <Comment data={comment} key={`${comment.content}-${new Date().getTime()}`} />)
      .reverse();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await client.post(`/video/comment/${vid}`, {
        content: commentValue,
        userId: 4,
      });
      setCurrentComments((prevComments) => [...prevComments, result.data.data]);
    } catch (error) {
      throw Error('Failed to post comment');
    }

    setCommentValue('');
  };

  return (
    <>
      <CommentContainer>
        <CommentHeader>
          <Responsive mobile>
            <ReplyWrapper>
              <img src={reply} alt="reply-icon" />
              <span>{currentComments.length}</span>
            </ReplyWrapper>
            <RightWrapper>
              <img src={filter} alt="filter-icon" />
              <CloseButton onClick={toggle}>
                <img src={close} alt="close-icon" />
              </CloseButton>
            </RightWrapper>
          </Responsive>
          <Responsive tablet desktop>
            <ReplyWrapper>
              <img src={reply} alt="reply-icon" />
              <span>{`댓글 ${currentComments.length}`}</span>
            </ReplyWrapper>
            <RightWrapper>
              <CommonButton>내 댓글 바로보기</CommonButton>
              <CommonButton>
                <img src={filter} alt="filter-icon" />
                <span>정렬</span>
              </CommonButton>
            </RightWrapper>
          </Responsive>
        </CommentHeader>
        <Responsive mobile>
          <CommentWarnText>
            댓글을 사용할 때는 타인을 존중하고 <span>커뮤니티 가이드</span> 를 준수해야 합니다.
          </CommentWarnText>
        </Responsive>
        <InputWrapper onSubmit={handleSubmit}>
          <img src={meWhite} alt="my-thumbnail" />
          <CommentInput
            placeholder="공개 댓글 추가..."
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
        </InputWrapper>
        <CommentBody>{showComment()}</CommentBody>
      </CommentContainer>
    </>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => colors[theme.currentMode].mainVideoListBg};
  order: 1;

  border-top: 0.02px solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
  ${applyMediaQuery('desktop')} {
    order: unset;
    border-top: none;
    background-color: transparent;
  }
  ${applyMediaQuery('mobile')} {
    border: none;
  }
`;

const CommentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  ${applyMediaQuery('mobile')} {
    background-color: ${({ theme }) => colors[theme.currentMode].mobileCommentListHeader};
  }

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

const InputWrapper = styled.form`
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
`;

const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.4rem;
  ${applyMediaQuery('mobile')} {
    font-size: inherit;
  }

  & > img {
    width: 1.6rem;
    height: 1.2rem;
  }

  & > span {
    color: ${({ theme }) => colors[theme.currentMode].iconText};
  }
`;

const RightWrapper = styled(ReplyWrapper)`
  & img {
    width: 1.2rem;
  }

  & > * {
    color: ${({ theme }) => colors[theme.currentMode].iconText};
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

const CommonButton = styled(CloseButton)`
  gap: 0.5rem;
`;

const CommentBody = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default CommentList;
