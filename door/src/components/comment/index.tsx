import GuestBook from "./GuestBook/GuestBook"
import TopNavigation from "../common/TopNavigation/TopNavigation"
import { CommentContainer } from "./index.style"

const Comment = () => {
    return (
        <CommentContainer>
        <TopNavigation title='GUESTBOOK' subTitle="방명록"/>
        <GuestBook/>
        </CommentContainer>
    )
}
export default Comment