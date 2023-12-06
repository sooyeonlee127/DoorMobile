import {
  PopupBackground,
  PopupContainer,
  SelectImg,
  BtnGroup,
} from './GalleryPopup.style';
import {
  AiFillRightCircle,
  AiFillLeftCircle,
  AiFillCloseCircle,
} from 'react-icons/ai';

interface GalleryPopupProps {
  selectPhoto: string;
  isOpen: boolean;
}

const GalleryPopup = ({ selectPhoto, isOpen }: GalleryPopupProps) => {
  if (!isOpen) return null;
  return (
    <PopupBackground>
      <PopupContainer>
        <SelectImg src={selectPhoto} />
      </PopupContainer>
      <BtnGroup>
        <AiFillLeftCircle size="40" fill="white" />
        <AiFillRightCircle size="40" fill="white" />
        <AiFillCloseCircle size="40" fill="white" />
      </BtnGroup>
    </PopupBackground>
  );
};
export default GalleryPopup;
