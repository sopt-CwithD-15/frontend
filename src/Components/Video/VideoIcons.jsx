import { useState } from 'react';
import styled from 'styled-components';
import { client } from 'Cores/api';
import likeIcon from 'Assets/icon/Videoicon/like.svg';
import dislikeIcon from 'Assets/icon/Videoicon/unlike.svg';
import filledLikeIcon from 'Assets/icon/Videoicon/like(fill).svg';
import filledDislikeIcon from 'Assets/icon/Videoicon/unlike(fill).svg';
import shareIcon from 'Assets/icon/Videoicon/arrow.svg';
import saveIcon from 'Assets/icon/Videoicon/list1.svg';
import scriptIcon from 'Assets/icon/Videoicon/script.svg';
import reportIcon from 'Assets/icon/Videoicon/flag.svg';
import colors from 'Constants/colors';
import { shortenNumber } from 'Utils/shortenNumber';
import { applyMediaQuery } from 'Style/mediaQuery';
import { useMedia } from 'Components/Responsive';

function VideoIcons(props) {
  const { isMobile } = useMedia();

  const { like, dislike, isLike, isDislike, vid } = props;

  const [isLikeClicked, setLikeClicked] = useState(isLike);
  const [isDislikeClicked, setDislikeClicked] = useState(isDislike);
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);

  const handleLikeClick = async (e) => {
    e.preventDefault();
    try {
      await client.post(`/video/like/${vid}`);
      setLikeClicked(!isLikeClicked);
      setLikeCount((likeCount) => (isLikeClicked ? likeCount - 1 : likeCount + 1));
    } catch (error) {
      throw Error('Failed to post like');
    }
  };

  const handleDislikeClick = async (e) => {
    e.preventDefault();
    try {
      await client.post(`/video/dislike/${vid}`);
      setDislikeClicked(!isDislikeClicked);
      setDislikeCount((dislikeCount) => (isDislikeClicked ? dislikeCount - 1 : dislikeCount + 1));
    } catch (error) {
      throw Error('Failed to post dislike');
    }
  };

  return (
    <StyledVideoIcons>
      <IconLabelButton
        src={isLikeClicked ? filledLikeIcon : likeIcon}
        label={shortenNumber(likeCount)}
        alt="like"
        onClick={handleLikeClick}></IconLabelButton>
      <IconLabelButton
        src={isDislikeClicked ? filledDislikeIcon : dislikeIcon}
        label={shortenNumber(dislikeCount)}
        alt="dislike"
        onClick={handleDislikeClick}></IconLabelButton>
      <IconLabelButton src={shareIcon} label="공유" alt="share"></IconLabelButton>
      <IconLabelButton src={saveIcon} label="저장" alt="save"></IconLabelButton>
      {!isMobile && <IconLabelButton src={scriptIcon} label="스크립트 열기" alt="script"></IconLabelButton>}
      <IconLabelButton src={reportIcon} label="신고" alt="report"></IconLabelButton>
    </StyledVideoIcons>
  );
}

function IconLabelButton({ src, label, alt, onClick }) {
  return (
    <StyledIconLabelButton onClick={onClick}>
      <ImageHolder>
        <Image src={src} alt={alt} />
      </ImageHolder>
      <Label>{label}</Label>
    </StyledIconLabelButton>
  );
}

const StyledIconLabelButton = styled.button`
  background-color: transparent;
  border: 0;
  font-family: Roboto;
  display: flex;
  align-items: center;

  ${applyMediaQuery('mobile')} {
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageHolder = styled.span`
  display: flex;
  align-items: center;
  height: 3.7rem;

  ${applyMediaQuery('mobile')} {
    height: 2.6rem;
  }
`;

const Image = styled.img`
  filter: ${({ theme }) => (theme.currentMode === 'dark' ? 'brightness(1) invert(1)' : 'brightness(0) invert(0)')};
`;

const Label = styled.span`
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1.8rem;

  ${applyMediaQuery('mobile')} {
    font-size: 1.1rem;
  }
  ${applyMediaQuery('tablet')} {
    font-size: 1.2rem;
  }
`;

const StyledVideoIcons = styled.div`
  padding-bottom: 1rem;
  display: flex;

  ${applyMediaQuery('mobile')} {
    justify-content: space-around;
    align-items: center;
  }
`;

export default VideoIcons;
