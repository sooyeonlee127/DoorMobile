import { Container, CalendarImage } from './WeddingCalendar.style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCalendarPhoto } from '@/store/calendar/thunkFunctions';
import { RootState } from '@/store';
const WeddingCalendar = () => {
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const { key } = useSelector(
    (state: RootState) => state.calendar.calendarPhoto
  );
  useEffect(() => {
    dispatch(getCalendarPhoto(weddingKey));
  }, []);
  return (
    <>
      <Container>
        <CalendarImage
          src={`https://d1dzjjwht1k5xk.cloudfront.net/raw/${key}`}
          alt="캘린더 사진"
        />
      </Container>
    </>
  );
};
export default WeddingCalendar;
