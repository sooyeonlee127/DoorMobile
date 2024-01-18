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
  BtnBox,
  SubmitInput,
  ErrText
} from './CommentCreatePopup.style';
import { useForm, SubmitHandler } from "react-hook-form"
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { requestPostComment } from '@/api/comment';
import { useParams } from 'react-router-dom';
import { changeCommentCreatePopup } from '@/store/popup/popupSlice';
import { getCommentList } from '@/store/comment/thunkFunctions';

type Inputs = {
  nickname: string
  password: string
  comment: string
}
type Payload = Inputs & {
  weddingKey: string | undefined
};


const GuestCommentPopup = () => {
  const dispatch = useDispatch();
  const { weddingKey } = useParams()
  const { register, handleSubmit, watch, formState: { errors },} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload: Payload = {
      weddingKey: weddingKey,
      nickname: data.nickname,
      password: data.password,
      comment: data.comment
    }
    const response = await requestPostComment(payload)
    dispatch(getCommentList(weddingKey))
    dispatch(changeCommentCreatePopup(false));
    console.log(response)
  }

  const closePopup = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(changeCommentCreatePopup(false));
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
        <FormSection onSubmit={handleSubmit(onSubmit)}>
          <TopInputBox>
              <InputDiv>
                <NameInput placeholder="이름" {...register("nickname", { required: true })}
                  aria-invalid={errors.nickname ? "true" : "false"}
                />
              {errors.nickname?.type === "required" && (
                <ErrText role="alert">nickname is required</ErrText>
              )}
              </InputDiv>
              <InputDiv>
                <NameInput placeholder="비밀번호"  type="password" {...register("password", { required: true })} 
                aria-invalid={errors.password ? "true" : "false"}
                />
              {errors.password?.type === "required" && (
                <ErrText role="alert">password is required</ErrText>
              )}
              </InputDiv>
          </TopInputBox>
          <CommentInputDiv>
            <ContentInput placeholder="내용"  {...register("comment", { required: true })} 
              aria-invalid={errors.comment ? "true" : "false"}
            />
            {errors.comment?.type === "required" && (
              <ErrText role="alert">comment is required</ErrText>
            )}
          </CommentInputDiv>
          <BtnBox>
            <SubmitInput type="submit" />
          </BtnBox>
        </FormSection>
      </PopupContainer>
    </PopupBackground>
  );
};
export default GuestCommentPopup;
