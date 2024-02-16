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
import {
  changeCommentDetailPopup,
  changeCommentCreatePopup,
  changeCommentContent,
} from '@/store/popup/popupSlice';
import useSnackbar from '@/hooks/useSnackbar';
import { useForm, SubmitHandler } from 'react-hook-form';
import { requestDeleteComment } from '@/api/comment';
import { getCommentList } from '@/store/comment/thunkFunctions';
import SNACKBAR_MESSAGE from '@/constants/snackbar';

type Inputs = {
  password: string;
};
type Payload = Inputs & {
  commentId: string | undefined;
};
const CommentDetailPopup = () => {
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { weddingKey } = useParams();
  const { _id, nickname, comment, createdAt, password } = useSelector(
    (state: RootState) => state.comment.commentDetail
  );
  const onUpdate = () => {
    dispatch(
      changeCommentContent({
        nickname: nickname,
        comment: comment,
        password: password,
        commentId: _id,
      })
    );
    dispatch(changeCommentCreatePopup(true));
    dispatch(changeCommentDetailPopup(false));
  };
  const onDelete: SubmitHandler<Inputs> = async (data) => {
    const payload: Payload = {
      commentId: _id,
      password: data.password,
    };
    await requestDeleteComment(payload);
    setTimeout(() => dispatch(getCommentList(weddingKey)), 100);
    dispatch(changeCommentDetailPopup(false));
    showSnackbar(SNACKBAR_MESSAGE.COMMENT_DELETE)
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
          <BottomSection>
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
            <SimpleBtn onClick={handleSubmit(onDelete)}>삭제</SimpleBtn>
            <SimpleBtn onClick={handleSubmit(onUpdate)}>수정</SimpleBtn>
          </BottomSection>
        </ContentContainer>
      </PopupContainer>
    </PopupBackground>
  );
};
export default CommentDetailPopup;
