import {
  CommentContainer,
  TopBox,
  BottomBox,
  NameText,
  DateText,
  CloseIcon,
} from './GuestComment.style';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { changeDetailComment } from '@/store/comment/thunkFunctions';
interface PropsComment {
  commentInfo: {
    _id: string;
    weddingKey: string;
    nickname: string;
    password: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    __v: null | number;
  };
}

const GuestComment = ({ commentInfo }: PropsComment) => {
  const dispatch = useDispatch()
  const clickComment = () => {
    // clickComment(changeDetailComment(commentInfo))
  }
  return (
    <CommentContainer>
      <TopBox>
        <NameText>{commentInfo.nickname}</NameText>
        <DateText>
          {commentInfo.createdAt.slice(0,10)}
        </DateText>
      </TopBox>
      <BottomBox>{commentInfo.comment}</BottomBox>
    </CommentContainer>
  );
};
export default GuestComment;
