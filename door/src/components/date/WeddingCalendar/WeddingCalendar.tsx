import { CalendarContainer, DateTitleBox, DateTopText, DateText } from './WeddingCalendar.style';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Global, ThemeProvider } from '@emotion/react';

const WeddingCalendar = () => {
  const calendarDays = useRef<HTMLTableElement>(null)

  const weddingDay = '2024-02-10 11:30';
  const weddingDayDateFomat = new Date(weddingDay);
  const year = weddingDayDateFomat.getFullYear()
  const month = weddingDayDateFomat.getMonth()
  const day = weddingDayDateFomat.getDay()
  const hours = weddingDayDateFomat.getHours()
  const time = weddingDayDateFomat.getMinutes()

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
    console.log(calendarDays.current?.innerHTML.length)
    if (calendarDays.current && calendarDays.current?.innerHTML.length <= 227) {
      let newRow = calendarDays.current.insertRow()
      for (let i = 0; i < firstDay; i++) {
        const newCell = newRow.insertCell()
        newCell.innerText = ' '
      }
      for (let i = 1; i <= lastDate.getDate(); i++) {
        if ((i+firstDay-1) % 7 === 0) {
          newRow = calendarDays.current.insertRow()
        }
        const newCell = newRow.insertCell()
        newCell.innerText = i.toString()
      }
    }
  };

 const dayToKo: { [key: number]: string } = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일"
  };

  useEffect(() => {
    createTd()
  }, [])
  return (
    <CalendarContainer>
      <DateTitleBox>
        <DateTopText>{year}.{month}.{day}</DateTopText>
        <DateText>{dayToKo[weddingDayDateFomat.getDay()]} {hours}시 {time}분</DateText>
      </DateTitleBox>
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
    </CalendarContainer>
  );
};
export default WeddingCalendar;
