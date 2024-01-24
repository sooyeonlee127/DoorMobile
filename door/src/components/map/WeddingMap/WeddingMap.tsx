import { Map, MapContainer, MapBtnBox, MapBtn } from './WeddingMap.style';
import { useEffect, useRef } from 'react';
declare global {
  interface Window {
    kakao: any;
  }
}

interface WeddingMapProps {
  latitude: number;
  longitude: number;
}

const WeddingMap = ({ latitude, longitude }: WeddingMapProps) => {
  const { kakao } = window;
  const mapRef = useRef(null);
  // const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  useEffect(() => {
    new kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <div>
      <MapContainer>
        <Map ref={mapRef}></Map>
        {/* <MapBtnBox>
          <MapBtn>네이버 지도</MapBtn>|<MapBtn>카카오 지도</MapBtn>|
          <MapBtn>티맵 지도</MapBtn>
        </MapBtnBox> */}
      </MapContainer>
    </div>
  );
};
export default WeddingMap;
