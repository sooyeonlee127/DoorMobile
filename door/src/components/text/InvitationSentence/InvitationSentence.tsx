import {
  InvitationSentenceContainer,
  InvitationSentenceBox,
} from './InvitationSentence.style';
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/index'
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';

const InvitationSentence = () => {
  const { invitationSentence } = useSelector((state: RootState) => state.wedding.weddingInfo || {});

  return (
    <InvitationSentenceContainer>
      <TopNavigation title='Invitation' subTitle='초대합니다' />
      <InvitationSentenceBox dangerouslySetInnerHTML={{ __html: invitationSentence }}>
      </InvitationSentenceBox>
    </InvitationSentenceContainer>
  );
};
export default InvitationSentence;
