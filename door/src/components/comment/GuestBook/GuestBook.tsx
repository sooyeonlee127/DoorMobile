import { GuestBookContainer, BtnStyle, BtnBox } from './GuestBook.style';
import GuestComment from '../GuestComment/GuestComment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentList } from '../../../store/comment/thunkFunctions';
import { useParams } from 'react-router-dom';
import { RootState } from '@/store';
import {
  changeCommentCreatePopup,
  changeCommentContent,
} from '@/store/popup/popupSlice';
import CommonButton from '../../common/CommonButton/CommonButton';
interface PropsComment {
  _id: string;
  weddingKey: string;
  nickname: string;
  password: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: null | number;
}

const GuestBook = () => {
  const clickBtn = () => {
    dispatch(
      changeCommentContent({
        nickname: '',
        password: '',
        comment: '',
        commentId: '',
      })
    );
    dispatch(changeCommentCreatePopup(true));
  };
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const commentList = useSelector(
    (state: RootState) => state.comment.commentList
  );
  useEffect(() => {
    dispatch(getCommentList(weddingKey));
  }, []);
  return (
    <>
      <GuestBookContainer>
        {commentList.map((comment: PropsComment, index: number) => (
          <GuestComment commentInfo={comment} key={index} />
        ))}
        <BtnBox>
          <CommonButton btnText="작성하기" clickEvent={clickBtn} />
        </BtnBox>
      </GuestBookContainer>
    </>
  );
};
export default GuestBook;
