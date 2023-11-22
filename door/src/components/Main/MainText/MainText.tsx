import { Name, Date, MainTextContainer, MainTextBox } from './MainText.style'

const MainText = () => {
    const bridegroom = '김민규'
    const bride = '이주현'
    const weddingDay= '2024-02-10'
    const year = weddingDay.slice(0,4)
    const month = weddingDay.slice(5,7)
    const day = weddingDay.slice(8,10)
    const dayOfWeek = 'SATURDAY'
    const time = '11:30'
    const area = 'AB컨벤션 2층 abc홀'
    return (
        <MainTextContainer>
            <MainTextBox>
                <Name>{bridegroom}</Name>
                <Name>{bride}</Name>
            </MainTextBox>
            <MainTextBox>
                <Date>{year}년</Date>
                <Date>{month}월</Date>
                <Date>{day}일</Date>
                <Date>{dayOfWeek}</Date>
                <Date>{time}</Date>
            </MainTextBox>
            <MainTextBox>
                <Date>{area}</Date>
            </MainTextBox>
        </MainTextContainer>
    )
}
export default MainText