import GuestBook from "./GuestBook/GuestBook"
import TopNavigation from "../common/TopNavigation/TopNavigation"
const Comment = () => {
    return (
        <>
        <TopNavigation title='GUESTBOOK' subTitle="방명록"/>
        <GuestBook/>
        </>
    )
}
export default Comment