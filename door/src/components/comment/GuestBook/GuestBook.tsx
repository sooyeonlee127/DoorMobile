import { GuestBookContainer, BtnStyle, BtnBox } from "./GuestBook.style"
import GuestComment from "../GuestComment/GuestComment"
import RoundedButton from "@/components/common/RoundedButton/RoundedButton"
import GuestCommentPopup from "../GuestCommentPopup/GuestCommentPopup"
const GuestBook = () => {
    const clickBtn = () => {
        console.log()
    }
    return (
        <>
        <GuestBookContainer>
            <GuestComment/>
        <BtnBox>
        <RoundedButton  btnText="작성하기" btnStyle={BtnStyle} clickEvent={clickBtn}/>
        </BtnBox>
        </GuestBookContainer>
        {/* <GuestCommentPopup/> */}
        </>
    )
}
export default GuestBook