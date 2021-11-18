import styled from 'styled-components';
import colors from 'Constants/colors';

function ChannelInfo(props) {
  const { profile, author, subscribeCount } = props;
  return (
    <StyledChannelInfo>
      <ChannelProfile>
        <img src={profile}></img>
      </ChannelProfile>
      <ChannelInfoWrapper>
        <ChannelName>{author}</ChannelName>
        <ChannelSubscribeCount>{subscribeCount}</ChannelSubscribeCount>
      </ChannelInfoWrapper>
      <SubscribeButton>구독</SubscribeButton>
    </StyledChannelInfo>
  );
}

const StyledChannelInfo = styled.div`
  padding: 0 1.1rem;
  display: flex;
  align-items: center;
  border-top: 0.02rem solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
  border-bottom: 0.02rem solid ${({ theme }) => colors[theme.currentMode].channelInfoBorder};
`;

const ChannelProfile = styled.div`
  padding: 1.2rem 0;

  & img {
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const ChannelInfoWrapper = styled.div`
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const ChannelName = styled.div`
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.3rem;
`;

const ChannelSubscribeCount = styled.div`
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1rem;
`;

const SubscribeButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => colors[theme.currentMode].mainColor};
  margin-left: auto;
  font-size: 1.1rem;
`;

export default ChannelInfo;
