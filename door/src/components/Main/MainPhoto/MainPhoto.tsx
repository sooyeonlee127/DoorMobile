import { MainImage, MainImageContainer } from './MainPhoto.style';

const MainPhoto = () => {
    const user = 'Abcd123'
    const imgPath = `/img/main/${user}.png`
    return (
        <MainImageContainer>
            <MainImage src={imgPath} alt="메인 사진" />
        </MainImageContainer>            
    )
}
export default MainPhoto