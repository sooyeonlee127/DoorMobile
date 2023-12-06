import {
  GuidanceContainer,
  GuidanceName,
  GuidanceLocation,
} from './DirectionGuidanceItem.style';

interface DirectionGuidanceItemProps {
  wayType: string;
  wayContent: string;
}

const DirectionGuidanceItem = ({
  wayType,
  wayContent,
}: DirectionGuidanceItemProps) => {
  return (
    <GuidanceContainer>
      <GuidanceName>{wayType}</GuidanceName>
      <GuidanceLocation>{wayContent}</GuidanceLocation>
    </GuidanceContainer>
  );
};
export default DirectionGuidanceItem;
