import {
  CommentContainer,
  TopBox,
  BottomBox,
  NameText,
  DateText,
  CloseIcon,
} from './GuestComment.style';
import { AiOutlineClose } from 'react-icons/ai';

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
  return (
    <CommentContainer>
      <TopBox>
        <NameText>{commentInfo.nickname}</NameText>
        <DateText>
          {commentInfo.createdAt}
          <CloseIcon>
            <AiOutlineClose />
          </CloseIcon>
        </DateText>
      </TopBox>
      <BottomBox>{commentInfo.comment}</BottomBox>
    </CommentContainer>
  );
};
export default GuestComment;
