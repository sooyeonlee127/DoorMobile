import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import { useState } from 'react';
import GalleryPopup from '../GalleryPopup/GalleryPopup';
import { GalleryContainer, PhotoBox, Photo } from './WeddingGallery.style';
const WeddingGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const photoClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <TopNavigation title="GALLERY" subTitle="갤러리" />
      <GalleryContainer>
        <PhotoBox>
          <Photo src="/img/gallery/1.jpg" alt="" onClick={photoClick} />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/2.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/3.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/4.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/5.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/6.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/7.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/8.jpg" alt="" />
        </PhotoBox>
        <PhotoBox>
          <Photo src="/img/gallery/9.jpg" alt="" />
        </PhotoBox>
      </GalleryContainer>
      <GalleryPopup selectPhoto="/img/gallery/1.jpg" isOpen={modalOpen} />
    </>
  );
};
export default WeddingGallery;
