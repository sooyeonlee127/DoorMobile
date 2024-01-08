import TopNavigation from '../common/TopNavigation/TopNavigation';
import WeddingMap from './WeddingMap/WeddingMap';
import DirectionGuidanceList from './DirectionGuidanceList/DirectionGuidanceList';
import { LocationContainer, MainLocation, SubLocation, ComponentContainer, CheckEndBox } from './index.style';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Map = () => {

  return (
    <ComponentContainer>
      <TopNavigation title="LOCATION" subTitle="오시는 길" />
      <LocationContainer>
        <MainLocation>Mj컨벤션 3층, 다이너스티홀</MainLocation>
        <SubLocation>경기 부천시 경인로 386 (소사본동 65-7)</SubLocation>
      </LocationContainer>
      <WeddingMap />
      <DirectionGuidanceList />
      <CheckEndBox></CheckEndBox>
    </ComponentContainer>
  );
};
export default Map;
