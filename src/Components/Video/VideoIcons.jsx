import { useState } from 'react';
import styled from 'styled-components';
import likeIcon from 'Assets/icon/Videoicon/like.svg';
import dislikeIcon from 'Assets/icon/Videoicon/unlike.svg';
import filledLikeIcon from 'Assets/icon/Videoicon/like(fill).svg';
import filledDislikeIcon from 'Assets/icon/Videoicon/unlike(fill).svg';
import shareIcon from 'Assets/icon/Videoicon/arrow.svg';
import saveIcon from 'Assets/icon/Videoicon/list1.svg';
import reportIcon from 'Assets/icon/Videoicon/flag.svg';
import colors from 'Constants/colors';
import { shortenNumber } from 'Utils/shortenNumber';

function VideoIcons(props) {
  const { like, dislike } = props;
  const [isLikeClicked, setLikeClicked] = useState(false);
  const [isDislikeClicked, setDislikeClicked] = useState(false);

  const handleLikeClick = () => setLikeClicked(!isLikeClicked);
  const handleDislikeClick = () => setDislikeClicked(!isDislikeClicked);

  return (
    <StyledVideoIcons>
      <IconLabelButton
        src={isLikeClicked ? filledLikeIcon : likeIcon}
        label={shortenNumber(like)}
        alt="like"
        onClick={handleLikeClick}></IconLabelButton>
      <IconLabelButton
        src={isDislikeClicked ? filledDislikeIcon : dislikeIcon}
        label={shortenNumber(dislike)}
        alt="dislike"
        onClick={handleDislikeClick}></IconLabelButton>
      <IconLabelButton src={shareIcon} label="공유" alt="share"></IconLabelButton>
      <IconLabelButton src={saveIcon} label="저장" alt="save"></IconLabelButton>
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
  font-size: 1.1rem;
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageHolder = styled.span`
  display: flex;
  align-items: center;
  height: 2.6rem;
`;

const Image = styled.img`
  filter: ${({ theme }) => (theme.currentMode === 'dark' ? 'brightness(1) invert(1)' : 'brightness(0) invert(0)')};
`;

const Label = styled.span`
  color: ${({ theme }) => colors[theme.currentMode].iconText};
  font-size: 1.1rem;
`;

const StyledVideoIcons = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default VideoIcons;
