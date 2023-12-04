import { CalendarContainer } from './WeddingCalendar.style';
import { useEffect } from 'react';
const WeddingCalendar = () => {
  const weddingDay = '2024-02-10';
  const weddingDayDateFomat = new Date(weddingDay);
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
  const today = new Date();
  const firstDay = firstDate.getDay();
  const blackTd = () => {
    let arr = [];
    for (let i = 0; i < firstDay; i++) {
      arr.push(<td>-</td>);
    }
    return arr;
  };
  const dateTd = () => {
    let arr = [];

    for (let i = 1; i < lastDate.getDate(); i++) {
      arr.push(<td>{i}</td>);
    }
    return arr;
  };

  return (
    <CalendarContainer>
      <p>{firstDate.toString()}</p>
      <p>{firstDay}</p>
      <table className="Calendar">
        <thead>
          <tr></tr>
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
        <tbody>
          <tr>
            {blackTd()}
            {dateTd()}
          </tr>
        </tbody>
      </table>
    </CalendarContainer>
  );
};
export default WeddingCalendar;
