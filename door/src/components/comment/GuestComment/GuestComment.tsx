import { CommentContainer, TopBox, BottomBox, NameText, DateText, CloseIcon } from "./GuestComment.style"
import { AiOutlineClose } from "react-icons/ai";

const GuestComment = () => {
    return (
        <CommentContainer>
            <TopBox><NameText>OOO</NameText><DateText>1234.12.
                34<CloseIcon><AiOutlineClose/></CloseIcon></DateText></TopBox>
            <BottomBox>축하합니다 ~~~~!</BottomBox>
        </CommentContainer>
    )
}
export default GuestComment