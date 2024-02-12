import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import { useEffect } from 'react';
import { GalleryContainer, PhotoBox, Photo } from './WeddingGallery.style';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGalleryPhoto } from '@/store/gallery/thunkFunctions';
import { RootState } from '@/store';
import {
  changePhotoPopup,
  changePhotoPopupStart,
} from '@/store/popup/popupSlice';

const WeddingGallery = () => {
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const galleryPhoto = useSelector(
    (state: RootState) => state.gallery.galleryPhoto
  );
  const photoClick = (idx: any) => {
    console.log('클릭');
    dispatch(changePhotoPopup(true));
    dispatch(changePhotoPopupStart(idx));
  };
  useEffect(() => {
    dispatch(getGalleryPhoto(weddingKey));
  }, []);
  return (
    <>
      {/* <TopNavigation title="GALLERY" subTitle="갤러리" /> */}
      <GalleryContainer>
        {galleryPhoto.map((photo: any, index: number) => (
          <PhotoBox key={index}>
            <Photo
              src={`https://d1dzjjwht1k5xk.cloudfront.net/raw/${photo.key}`}
              alt=""
              onClick={() => photoClick(index)}
            />
          </PhotoBox>
        ))}
      </GalleryContainer>
    </>
  );
};
export default WeddingGallery;
