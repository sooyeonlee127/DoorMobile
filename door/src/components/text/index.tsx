import FamousSaying from './FamousSaying/FamousSaying';
import InvitationSentence from './InvitationSentence/InvitationSentence';
import { ComponentContainer } from './index.style';
const text = () => {
  return (
    <ComponentContainer>
      <FamousSaying />
      <InvitationSentence />
    </ComponentContainer>
  );
};
export default text;
