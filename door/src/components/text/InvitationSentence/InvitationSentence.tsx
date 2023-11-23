import {
  InvitationSentenceContainer,
  InvitationSentenceBox,
  Text,
} from './InvitationSentence.style';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
const InvitationSentence = () => {
  return (
    <InvitationSentenceContainer>
      <TopNavigation title='Invitation' subTitle='초대합니다' />
      <InvitationSentenceBox>
        <Text>저희 두 사람이 사랑과 믿음으로</Text>
        <Text>한 가정을 이루게 되었습니다.</Text>
        <Text>꼭 오셔서 밝은 미소와 힘찬 박수로</Text>
        <Text>축복해주시면 더없는 기쁨으로 간직하겠습니다.</Text>
      </InvitationSentenceBox>
    </InvitationSentenceContainer>
  );
};
export default InvitationSentence;
