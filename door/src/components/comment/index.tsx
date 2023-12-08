import GuestBook from "./GuestBook/GuestBook"
import TopNavigation from "../common/TopNavigation/TopNavigation"
const comment = () => {
    return (
        <>
        <TopNavigation title='GUESTBOOK' subTitle="방명록"/>
        <GuestBook/>
        </>
    )
}
export default comment