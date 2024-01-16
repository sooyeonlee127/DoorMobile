import { useEffect } from 'react';
import { MainImage, MainImageContainer } from './MainPhoto.style';
import { useDispatch, useSelector } from 'react-redux';
import { getMainPhoto } from '@/store/main/thunkFunctions';
import { RootState } from '@/store';
import { useParams } from 'react-router-dom';
const MainPhoto = () => {
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const { key } = useSelector((state: RootState) => state.main.mainPhoto);
  useEffect(() => {
    dispatch(getMainPhoto(weddingKey));
  }, []);
  return (
    <MainImageContainer>
      <MainImage src={`https://door-mobile-website.s3.ap-northeast-2.amazonaws.com/raw/${key}`} alt="메인 사진" />
    </MainImageContainer>
  );
};
export default MainPhoto;
