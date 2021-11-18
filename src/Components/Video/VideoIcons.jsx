import styled from 'styled-components';
import likeIcon from 'Assets/icon/like.svg';
import unlikeIcon from 'Assets/icon/unlike.svg';
import shareIcon from 'Assets/icon/arrow.svg';
import saveIcon from 'Assets/icon/list1.svg';
import reportIcon from 'Assets/icon/flag.svg';
import colors from 'Constants/colors';

function VideoIcons() {
  return (
    <StyledVideoIcons>
      <IconLabelButton src={likeIcon} label="9.3천" alt="like"></IconLabelButton>
      <IconLabelButton src={unlikeIcon} label="10" alt="unlike"></IconLabelButton>
      <IconLabelButton src={shareIcon} label="공유" alt="share"></IconLabelButton>
      <IconLabelButton src={saveIcon} label="저장" alt="save"></IconLabelButton>
      <IconLabelButton src={reportIcon} label="신고" alt="report"></IconLabelButton>
    </StyledVideoIcons>
  );
}

function IconLabelButton({ src, label, alt }) {
  return (
    <StyledIconLabelButton>
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
