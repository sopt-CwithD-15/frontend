import colors from 'Constants/colors';
import styled from 'styled-components';

import profile from 'Assets/icon/profileImage.svg';
import reReply from 'Assets/icon/re-reply.svg';
import like from 'Assets/icon/like_no_margin.svg';
import dislike from 'Assets/icon/unlike_no_margin.svg';
import blueDown from 'Assets/icon/blue-down.svg';

function Comment() {
  return (
    <StyledComment>
      <UserThumbnail>
        <img src={profile} alt="user-thumbnail" />
      </UserThumbnail>
      <CommentContainer>
        <CommentHeader>
          <CommentAuthor>김밥말아</CommentAuthor>
          <CommentDate>7시간 전</CommentDate>
        </CommentHeader>
        <CommentBody>
          We can all agree that MAVERICK is one of their POWERFUL cb!!!!! VISUALS + SONG + CHOREOGRAPY = POWERFUL
        </CommentBody>
        <CommentFooter>
          <IconWrapper>
            <img src={like} alt="like" />
            <span>1.2만</span>
          </IconWrapper>
          <IconWrapper>
            <img src={dislike} alt={dislike} />
            <span>53</span>
          </IconWrapper>
          <IconWrapper>
<<<<<<< HEAD
            <img src={reReply} alt={reReply} id="except" />
=======
            <img src={reReply} alt={reReply} />
>>>>>>> comment
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
  gap: 1rem;
  padding: 1rem 1.5rem;

<<<<<<< HEAD
  border-top: 0.02px solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
  color: ${({ theme }) => colors[theme.currentMode].iconText};
=======
  border-top: 0.02rem solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
>>>>>>> comment
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
  line-height: 1.4rem;
  font-size: 1.2rem;
  font-weight: bolder;
<<<<<<< HEAD
=======
  color: ${({ theme }) => colors[theme.currentMode].iconText};
>>>>>>> comment
`;

const CommentDate = styled.span`
  line-height: 1.4rem;
  font-size: 1.1rem;
  letter-spacing: -0.025rem;
  color: ${colors.light.copyRightText};
  margin: auto 0;
`;

const CommentBody = styled.p`
  font-size: 1.2rem;
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
<<<<<<< HEAD

  & > img:not(#except) {
    filter: ${({ theme }) => (theme.currentMode === 'light' ? 'brightness(0) invert(0)' : 'brightness(1) invert(1)')};
  }
=======
>>>>>>> comment
`;

const BlueText = styled.span`
  color: ${colors.light.blue};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export default Comment;
