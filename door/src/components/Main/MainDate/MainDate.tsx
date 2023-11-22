import { MainDateContainer, MainBox, Date, DayOfWeek } from './MainDate.style'
const MainDate = () => {
    const weddingDay= '2024-02-10'
    const year = weddingDay.slice(0,4)
    const month = weddingDay.slice(5,7)
    const day = weddingDay.slice(8,10)
    const dayOfWeek = 'SATURDAY'
    return (
        <MainDateContainer>
            <MainBox>
                <Date>{year}</Date>
                <Date>{month}</Date>
                <Date>{day}</Date>
            </MainBox>
            <MainBox>
                <DayOfWeek>{dayOfWeek}</DayOfWeek>
            </MainBox>
        </MainDateContainer>
    )
}
export default MainDate