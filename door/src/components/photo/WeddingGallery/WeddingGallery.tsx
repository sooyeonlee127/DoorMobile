import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import { useEffect } from 'react';
import { GalleryContainer, PhotoBox, Photo } from './WeddingGallery.style';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGalleryPhoto } from '@/store/gallery/thunkFunctions';
import { RootState } from '@/store';
import { changePhotoPopup } from '@/store/popup/popupSlice';
const WeddingGallery = () => {
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const galleryPhoto = useSelector(
    (state: RootState) => state.gallery.galleryPhoto
  );
  const photoClick = () => {
    console.log('클릭');
    dispatch(changePhotoPopup(true));
  };
  useEffect(() => {
    dispatch(getGalleryPhoto(weddingKey));
  }, []);
  return (
    <>
      <TopNavigation title="GALLERY" subTitle="갤러리" />
      <GalleryContainer>
        {galleryPhoto.map((photo: any, index: number) => (
          <PhotoBox key={index}>
            <Photo src={`/uploads/${photo.key}`} alt="" onClick={photoClick} />
          </PhotoBox>
        ))}
      </GalleryContainer>
    </>
  );
};
export default WeddingGallery;
