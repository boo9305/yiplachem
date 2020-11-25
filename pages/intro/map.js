import React, {useEffect} from 'react'
import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/ceogreeting.module.css'
import Head from 'next/head'

function map (props) {

  useEffect(() => {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.319054,126.750851),
        level: 5
      };
      var map = new kakao.maps.Map(container, options);
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


      var markerPosition  = new kakao.maps.LatLng(37.319054,126.750851);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
  }, [])
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="5">
      <div className="sub-inner">
        <div className="map-txt">
          <p>- 주소 경기도 안산시 단원구 신원로 76(성곡동),반월공단 606B 9-1L 15408</p>
          <p>- 주차안내 건물 내, 주차시설 및 주변 공영주차장 이용</p>
          <p>- 연락처 Tel. 031-491-9406 / Fax. 031-491-9401</p>
          <p>- 대표메일 byb89@yiplachem.com</p>
        </div>
        <div id='map'></div>

      </div>

      <style jsx> {`
        .map-txt {
          margin-bottom: 50px; 
        }
        .map-txt > p {
          margin-bottom : 5px;
          font-size : 15px;
          font-weight : 400;
          color : #333;
        }
          
      `} </style>
    </SubLayout>
  )
}

export default map;
