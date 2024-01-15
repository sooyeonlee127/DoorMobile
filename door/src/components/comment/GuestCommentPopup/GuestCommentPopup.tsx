import {
  PopupBackground,
  PopupContainer,
  TopSection,
  CloseIcon,
  FormSection,
  NameInput,
  ContentInput,
  InputDiv,
  TopInputBox,
  CommentInputDiv,
  BtnStyle,
} from './GuestCommentPopup.style';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { changeCommentPopup } from '@/store/popup/popupSlice';
import RoundedButton from '@/components/common/RoundedButton/RoundedButton';
const GuestCommentPopup = () => {
  const dispatch = useDispatch();
  const temp = () => {
    console.log('클릭');
  };
  const closePopup = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(changeCommentPopup(false));
    }
  };
  return (
    <PopupBackground onClick={closePopup}>
      <PopupContainer>
        <TopSection>
          방명록
          <CloseIcon>
            <AiOutlineClose />
          </CloseIcon>
        </TopSection>
        <FormSection>
          <TopInputBox>
            <InputDiv>
              <NameInput placeholder="이름" />
            </InputDiv>
            <InputDiv>
              <NameInput placeholder="비밀번호" />
            </InputDiv>
          </TopInputBox>
          <CommentInputDiv>
            <ContentInput placeholder="내용" />
          </CommentInputDiv>
        </FormSection>
        <RoundedButton btnText="등록" btnStyle={BtnStyle} clickEvent={temp} />
      </PopupContainer>
    </PopupBackground>
  );
};
export default GuestCommentPopup;
