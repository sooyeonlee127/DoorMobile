import {
  PopupBackground,
  GalleryPopupContainer,
  Image,
} from './GalleryPopup.style';
import { RootState } from '@/store';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changePhotoPopup } from '@/store/popup/popupSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const GalleryPopup = () => {
  const dispatch = useDispatch();

  const [popupImgs, setPopupImgs]: any = useState([]);

  const galleryPhoto = useSelector(
    (state: RootState) => state.gallery.galleryPhoto
  );

  const photoPopupStart = useSelector(
    (state: RootState) => state.popup.photoPopupStart
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
        original: 'https://d1dzjjwht1k5xk.cloudfront.net/raw/' + img.key,
        thumbnail: 'https://d1dzjjwht1k5xk.cloudfront.net/raw/' + img.key,
      })
    );
    setPopupImgs(imgList);
  }, []);
  return (
    <PopupBackground onClick={closePopup}>
      <GalleryPopupContainer>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          loop={true}
          initialSlide={photoPopupStart}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {popupImgs?.map((photo: any) => (
            <SwiperSlide>
              <Image src={photo?.original} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </GalleryPopupContainer>
    </PopupBackground>
  );
};
export default GalleryPopup;
