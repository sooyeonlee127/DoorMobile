import {
  CalendarContainer,
  DateTitleBox,
  DateTopText,
  DateText,
  DateTextBox,
  MainCalendar,
  DdayContainer,
  DdaySection,
  DdayName,
  DdayWeddingText,
} from './WeddingCalendar.style';
import { useEffect, useRef, useState } from 'react';
import { IoIosHeart } from 'react-icons/io';

const WeddingCalendar = () => {
  const calendarDays = useRef<HTMLTableElement>(null);
  const weddingDay = '2024-02-10 11:30';
  const weddingDayDateFomat = new Date(weddingDay);
  const year = weddingDayDateFomat.getFullYear();
  const month = weddingDayDateFomat.getMonth() + 1;
  const day = weddingDayDateFomat.getDate();
  const hours = weddingDayDateFomat.getHours();
  const time = weddingDayDateFomat.getMinutes();
  const dayHalf = () => {
    if (hours < 12) {
      return '오전';
    } else {
      return '오후';
    }
  };
  const firstDate = new Date(
    weddingDayDateFomat.getFullYear(),
    weddingDayDateFomat.getMonth(),
    1
  );
  const lastDate = new Date(
    weddingDayDateFomat.getFullYear(),
    weddingDayDateFomat.getMonth() + 1,
    0
  );
  const firstDay = firstDate.getDay();
  const createTd = () => {
    console.log(calendarDays.current?.innerHTML.length);
    if (calendarDays.current && calendarDays.current?.innerHTML.length <= 227) {
      let newRow = calendarDays.current.insertRow();
      for (let i = 0; i < firstDay; i++) {
        const newCell = newRow.insertCell();
        newCell.innerText = ' ';
      }
      for (let i = 1; i <= lastDate.getDate(); i++) {
        if ((i + firstDay - 1) % 7 === 0) {
          newRow = calendarDays.current.insertRow();
        }
        const newCell = newRow.insertCell();
        newCell.innerText = i.toString();
        if ((i + firstDay - 1) % 7 === 0) {
          newCell.className += 'sun-day';
        }
        if (i === day) {
          newCell.className += 'wedding-day';
        }
      }
    }
  };

  const dayToKo: { [key: number]: string } = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
  };

  const diffDay = () => {
    const today = new Date();
    const diff = weddingDayDateFomat.getTime() - today.getTime();
    const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const diffHour = String(
      Math.floor((diff / (1000 * 60 * 60)) % 24)
    ).padStart(2, '0');
    const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
      2,
      '0'
    );
    const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    setDday(diffDay);
    setDdayHour(diffHour);
    setDdayMin(diffMin);
    setDdaySec(diffSec);
  };

  const init = () => {
    setInterval(diffDay, 1000);
  };
  const [dday, setDday] = useState('');
  const [ddayHour, setDdayHour] = useState('');
  const [ddayMin, setDdayMin] = useState('');
  const [ddaySec, setDdaySec] = useState('');

  useEffect(() => {
    init();
    createTd();
  }, []);
  return (
    <>
      <CalendarContainer>
        <DateTitleBox>
          <DateTopText>
            {year}.{month}.{day}
          </DateTopText>
          <DateTextBox>
            <DateText>{dayToKo[weddingDayDateFomat.getDay()]}</DateText>
            <DateText>
              {dayHalf()} {hours}시 {time}분
            </DateText>
          </DateTextBox>
        </DateTitleBox>
        <MainCalendar>
          <table ref={calendarDays}>
            <thead>
              <tr>
                <td>일</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
                <td>토</td>
              </tr>
            </thead>
          </table>
        </MainCalendar>
      </CalendarContainer>
      <DdayContainer>
        <DdaySection>
          {dday}
          <DdayName>DAYS</DdayName>
        </DdaySection>
        <DdaySection>
          {ddayHour}
          <DdayName>HOUR</DdayName>
        </DdaySection>
        <DdaySection>
          {ddayMin}
          <DdayName>MIN</DdayName>
        </DdaySection>
        <DdaySection>
          {ddaySec}
          <DdayName>SEC</DdayName>
        </DdaySection>
      </DdayContainer>
      <DdayWeddingText>
        민규 <IoIosHeart color="#E27A67" /> 주현의 결혼식이 {Number(dday) + 1}일
        남았습니다.
      </DdayWeddingText>
    </>
  );
};
export default WeddingCalendar;
