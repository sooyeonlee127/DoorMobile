import { PopupBackground, PopupContainer,TopSection, CloseIcon, FormSection, NameInput, ContentInput, PasswordInput } from "./GuestCommentPopup.style"
import { AiOutlineClose } from "react-icons/ai";

const GuestCommentPopup = () => {

    return (
        <PopupBackground>
            <PopupContainer>
            <TopSection>
            방명록
                <CloseIcon><AiOutlineClose/></CloseIcon>
            </TopSection>
            <FormSection>
                <NameInput/>
                <ContentInput/>
                <PasswordInput/>
            </FormSection>
            </PopupContainer>
        </PopupBackground>
    )
}
export default GuestCommentPopup