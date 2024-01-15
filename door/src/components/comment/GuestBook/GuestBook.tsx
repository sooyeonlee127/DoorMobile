import { GuestBookContainer, BtnStyle, BtnBox } from './GuestBook.style';
import GuestComment from '../GuestComment/GuestComment';
import RoundedButton from '@/components/common/RoundedButton/RoundedButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentList } from '../../../store/comment/thunkFunctions';
import { useParams } from 'react-router-dom';
import { RootState } from '@/store';
import { changeCommentPopup } from '@/store/popup/popupSlice';
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
    dispatch(changeCommentPopup(true));
  };
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const commentList = useSelector(
    (state: RootState) => state.comment.commentList
  );
  console.log(commentList, '>>>');
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
          <RoundedButton
            btnText="작성하기"
            btnStyle={BtnStyle}
            clickEvent={clickBtn}
          />
        </BtnBox>
      </GuestBookContainer>
    </>
  );
};
export default GuestBook;
