import {
  PopupBackground,
  PopupContainer,
  TopSection,
  TopBox,
  NameText,
  DateText,
  BottomBox,
  ContentContainer,
  InputDiv,
  NameInput,
  ErrText,
  BottomSection,
  SimpleBtn,
} from './CommentDetailPopup.style';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { changeCommentDetailPopup } from '@/store/popup/popupSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { requestDeleteComment } from '@/api/comment';
import { getCommentList } from '@/store/comment/thunkFunctions';
type Inputs = {
  password: string;
};
type Payload = Inputs & {
  commentId: string | undefined;
};
const CommentDetailPopup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { weddingKey } = useParams();
  const { _id, nickname, comment, createdAt } = useSelector(
    (state: RootState) => state.comment.commentDetail
  );
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload: Payload = {
      commentId: _id,
      password: data.password,
    };
    console.log(payload);

    const response = await requestDeleteComment(payload);
    setTimeout(() => dispatch(getCommentList(weddingKey)), 100);

    dispatch(changeCommentDetailPopup(false));
    console.log(response);
  };
  const closePopup = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(changeCommentDetailPopup(false));
    }
  };
  return (
    <PopupBackground onClick={closePopup}>
      <PopupContainer>
        <TopSection>방명록</TopSection>
        <ContentContainer>
          <TopBox>
            <NameText>{nickname}</NameText>
            <DateText>{createdAt.slice(0, 10)}</DateText>
          </TopBox>
          <BottomBox>{comment}</BottomBox>
          <BottomSection onSubmit={handleSubmit(onSubmit)}>
            <InputDiv>
              <NameInput
                placeholder="비밀번호"
                type="password"
                {...register('password', { required: true })}
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              {errors.password?.type === 'required' && (
                <ErrText role="alert">password is required</ErrText>
              )}
            </InputDiv>
            <SimpleBtn>삭제</SimpleBtn>
            <SimpleBtn>수정</SimpleBtn>
          </BottomSection>
        </ContentContainer>
      </PopupContainer>
    </PopupBackground>
  );
};
export default CommentDetailPopup;
