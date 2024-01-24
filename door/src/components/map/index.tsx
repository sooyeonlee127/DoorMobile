import TopNavigation from '../common/TopNavigation/TopNavigation';
import WeddingMap from './WeddingMap/WeddingMap';
import {
  LocationContainer,
  MainLocation,
  SubLocation,
  ComponentContainer,
  CheckEndBox,
} from './index.style';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMapInfo } from '@/store/map/thunkFunctions';
import { useParams } from 'react-router-dom';
import { RootState } from '@/store';
import DirectionGuidanceItem from './DirectionGuidanceItem/DirectionGuidanceItem';
const Map = () => {
  const dispatch = useDispatch();
  const { weddingKey } = useParams();
  const { locaionName, address, directionList, center } = useSelector(
    (state: RootState) => state.map.mapInfo
  );
  console.log('[[', directionList);
  useEffect(() => {
    dispatch(getMapInfo(weddingKey));
  }, []);

  return (
    <ComponentContainer>
      <TopNavigation title="LOCATION" subTitle="오시는 길" />
      <LocationContainer>
        <MainLocation>{locaionName}</MainLocation>
        <SubLocation>{address}</SubLocation>
      </LocationContainer>
      {center && (
        <WeddingMap latitude={center?.latitude} longitude={center?.longitude} />
      )}
      {directionList?.map((direction: any, index: number) => (
        <DirectionGuidanceItem
          key={index}
          wayContent={direction.wayContent}
          wayType={direction.wayTypeName}
        />
      ))}
      <CheckEndBox></CheckEndBox>
    </ComponentContainer>
  );
};
export default Map;
