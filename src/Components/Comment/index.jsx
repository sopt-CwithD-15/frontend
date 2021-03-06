import colors from 'Constants/colors';
import styled from 'styled-components';
import reReply from 'Assets/icon/re-reply.svg';
import like from 'Assets/icon/like_no_margin.svg';
import unlike from 'Assets/icon/unlike_no_margin.svg';
import blueDown from 'Assets/icon/blue-down.svg';
import close from 'Assets/icon/close.svg';
import { client } from 'Cores/api';
import { applyMediaQuery } from 'Style/mediaQuery';
import { shortenDate } from 'Utils/shortenDate';

function Comment({ data }) {
  const { commenter, createdAt, content, commentId } = data;
  const { nickname, profileImage } = commenter;

  const handleClickRemoveBtn = async () => {
    try {
      await client.delete(`/video/comment/${commentId}`);
      window.location.reload();
    } catch (error) {
      throw Error('Failed to remove comment');
    }
  };

  return (
    <StyledComment>
      <UserThumbnail>
        <img src={profileImage} alt="user-thumbnail" />
      </UserThumbnail>
      <CommentContainer>
        <CommentHeader>
          <CommentAuthor>{nickname}</CommentAuthor>
          <CommentDate>{shortenDate(createdAt)}</CommentDate>
          <RemoveBtn onClick={handleClickRemoveBtn}>
            <img src={close} alt="close" />
          </RemoveBtn>
        </CommentHeader>
        <CommentBody>{content}</CommentBody>
        <CommentFooter>
          <IconWrapper>
            <img src={like} alt="like" />
            <span>1.2만</span>
          </IconWrapper>
          <IconWrapper>
            <img src={unlike} alt="unlike" />
            <span>53</span>
          </IconWrapper>
          <IconWrapper>
            <img src={reReply} alt="reReply" id="except" />
            <BlueText>
              답글 2개 <img src={blueDown} alt="blueDown" />
            </BlueText>
          </IconWrapper>
        </CommentFooter>
      </CommentContainer>
    </StyledComment>
  );
}

const StyledComment = styled.article`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  padding: 1rem 1.5rem;

  ${applyMediaQuery('mobile')} {
    gap: 1rem;
    border-top: 0.02px solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
  }

  color: ${({ theme }) => colors[theme.currentMode].iconText};
`;

const UserThumbnail = styled.div`
  & > img {
    border-radius: 50%;
    overflow: hidden;
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CommentAuthor = styled.h2`
  font-size: 1.2rem;
  ${applyMediaQuery('desktop')} {
    font-size: 1.4rem;
  }
  font-weight: bolder;
`;

const CommentDate = styled.span`
  font-size: 1.1rem;
  letter-spacing: -0.025rem;
  color: ${colors.light.copyRightText};
`;

const CommentBody = styled.p`
  font-size: 1.2rem;
  ${applyMediaQuery('desktop')} {
    font-size: 1.4rem;
  }
  letter-spacing: -0.03rem;
`;

const CommentFooter = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;

  & > img {
    width: 1rem;
    height: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  & > span {
    font-size: 1rem;
  }

  & > img:not(#except) {
    filter: ${({ theme }) => (theme.currentMode === 'light' ? 'brightness(0) invert(0)' : 'brightness(1) invert(1)')};
  }
`;

const BlueText = styled.span`
  color: ${colors.light.blue};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const RemoveBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;

  width: 0.5rem;
  height: 0.5rem;

  display: flex;
  align-items: center;
  & > img {
    max-width: 100%;
  }
`;

export default Comment;
