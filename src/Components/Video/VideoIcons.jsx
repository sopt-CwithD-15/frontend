import { useState } from 'react';
import styled from 'styled-components';
import likeIcon from 'Assets/icon/like.svg';
import unlikeIcon from 'Assets/icon/unlike.svg';
import filledLikeIcon from 'Assets/icon/like(fill).svg';
import filledUnlikeIcon from 'Assets/icon/unlike(fill).svg';
import shareIcon from 'Assets/icon/arrow.svg';
import saveIcon from 'Assets/icon/list1.svg';
import reportIcon from 'Assets/icon/flag.svg';
import colors from 'Constants/colors';

function VideoIcons(props) {
  const [isLikeClicked, setLikeClicked] = useState(false);
  const [isUnlikeClicked, setUnlikeClicked] = useState(false);

  const handleLikeClick = () => setLikeClicked(!isLikeClicked);
  const handleUnlikeClick = () => setUnlikeClicked(!isUnlikeClicked);

  const { like, unlike } = props;

  return (
    <StyledVideoIcons>
      <IconLabelButton
        src={isLikeClicked ? filledLikeIcon : likeIcon}
        label={like}
        alt="like"
        onClick={handleLikeClick}></IconLabelButton>
      <IconLabelButton
        src={isUnlikeClicked ? filledUnlikeIcon : unlikeIcon}
        label={unlike}
        alt="unlike"
        onClick={handleUnlikeClick}></IconLabelButton>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageHolder = styled.span`
  display: flex;
  align-items: center;
  height: 2.6rem;
`;

const Image = styled.img``;

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
