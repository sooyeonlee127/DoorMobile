import { PopupBackground, GalleryPopupContainer } from './GalleryPopup.style';
import { RootState } from '@/store';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changePhotoPopup } from '@/store/popup/popupSlice';
const GalleryPopup = () => {
  const dispatch = useDispatch();

  const [popupImgs, setPopupImgs]: any = useState([]);

  const galleryPhoto = useSelector(
    (state: RootState) => state.gallery.galleryPhoto
  );
  const closePopup = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(changePhotoPopup(false));
    }
  };

  useEffect(() => {
    let imgList: { original: string; thumbnail: string }[] = [];
    galleryPhoto.map((img) =>
      imgList.push({
        original: '/uploads/' + img.key,
        thumbnail: '/uploads/' + img.key,
      })
    );
    setPopupImgs(imgList);
  }, []);
  return (
    <PopupBackground onClick={closePopup}>
      <GalleryPopupContainer>
        <ImageGallery items={popupImgs}></ImageGallery>
      </GalleryPopupContainer>
    </PopupBackground>
  );
};
export default GalleryPopup;
