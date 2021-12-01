import { useState } from 'react';
import styled from 'styled-components';
import colors from 'Constants/colors';
import noticeIcon from 'Assets/icon/bell.svg';
import { shortenNumber } from 'Utils/shortenNumber';
import { applyMediaQuery } from 'Style/mediaQuery';

function ChannelInfo(props) {
  const { profile, author, subscribeCount } = props;

  const [isSubscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => setSubscribed(!isSubscribed);

  const subscribe = isSubscribed ? '구독중' : '구독';

  return (
    <StyledChannelInfo>
      <ChannelProfile>
        <img src={profile}></img>
      </ChannelProfile>
      <ChannelInfoWrapper>
        <ChannelName>{author}</ChannelName>
        <ChannelSubscribeCount>{shortenNumber(subscribeCount)}</ChannelSubscribeCount>
      </ChannelInfoWrapper>
      <SubscribeWrapper>
        <NoticeIcon src={noticeIcon} subscribe={subscribe}></NoticeIcon>
        <SubscribeButton onClick={handleSubscribe} subscribe={subscribe}>
          {subscribe}
        </SubscribeButton>
      </SubscribeWrapper>
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
  &::before {
    content: '구독자 ';
  }
  &::after {
    content: '명';
  }
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1rem;
  letter-spacing: -0.03rem;
`;

const SubscribeWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: right;
`;

const NoticeIcon = styled.img`
  width: ${(props) => (props.subscribe === '구독중' ? '1.3rem;' : '0rem;')};
  overflow: hidden;
  margin-right: 1rem;
`;

const SubscribeButton = styled.button`
  border: 0;
  margin-left: auto;

  ${applyMediaQuery('mobile')} {
    font-size: 1rem;
    background-color: ${(props) =>
      props.subscribe === '구독중' ? colors.light.subscribingText : colors.light.mainColor};
    height: 2rem;
    width: ${(props) => (props.subscribe === '구독중' ? '4.9rem;' : '3.7rem;')};
    text-align: center;
    border-radius: 0.5rem;
  }
  color: ${({ theme }) => colors[theme.currentMode].navBarBg};
  background-color: ${(props) =>
    props.subscribe === '구독중' ? colors.light.subscribingText : colors.light.mainColor};
  height: 5.1rem;
  width: ${(props) => (props.subscribe === '구독중' ? '10.9rem;' : '9.3rem;')};
  border-radius: 0.5rem;
`;

export default ChannelInfo;
