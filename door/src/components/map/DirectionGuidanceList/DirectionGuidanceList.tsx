import DirectionGuidanceItem from '../DirectionGuidanceItem/DirectionGuidanceItem';

const DirectionGuidanceList = () => {
  return (
    <>
      <DirectionGuidanceItem
        wayType="지하철"
        wayContent="1호선/ 서해선 소사역 1번출구 건너편 좌측"
      />
      <DirectionGuidanceItem
        wayType="자가용"
        wayContent="네비게이션 - 부천시 소사구 소사본동 65-7번지"
      />
      <DirectionGuidanceItem
        wayType="버스"
        wayContent="소서어울림마당삼거리, MJ컨벤션: 19, 83, 88, 88-1"
      />
    </>
  );
};
export default DirectionGuidanceList;
