import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function gold (props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="1">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 className="h4_tit">전기금도금</h4>
            <h5 className="h5_tit mt30">산성 금스트라이크 도금액 <span>(Gold Strike Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도(g/L)</th>
                  <th scope="col">석출속도(㎛)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GC-ST</th>
                  <td>99.7</td>
                  <td>2</td>
                  <td>flash</td>
                  <td>1이하</td>
                  <td>25~35</td>
                  <td>2(1~5)</td>
                  <td>100~120</td>
                  <td className={sty.lastTd}>스테인레스강 위에 직접 금도금 시 밀착성을 좋게 하고 높은 내부식성을 부여 함.</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">약 산성 금도금액 <span>(Hard Gold Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">합금</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GC-700</th>
                  <td>Co</td>
                  <td>99.7</td>
                  <td>4(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8(3.5~4.2)</td>
                  <td>45</td>
                  <td>0.2~1.5</td>
                  <td>160</td>
                  <td rowSpan="4" className={sty.lastTd}>콘텍터, 접점, 단자도금과 Rack 또는 Barrel 도금에 적합하며 미려한 색상과 경도가 우수한 제품.</td>
                </tr>
                <tr>
                  <th>GCI-700</th>
                  <td>Co,In</td>
                  <td>92.0</td>
                  <td>4(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8(3.5~4.0)</td>
                  <td>30</td>
                  <td>0.2~1.5</td>
                  <td>180</td>
                </tr>
                <tr>
                  <th>GN-700</th>
                  <td>Ni</td>
                  <td>99.7</td>
                  <td>4(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8(3.5~4.2)</td>
                  <td>45</td>
                  <td>0.2~1.5</td>
                  <td>160</td>
                </tr>
                <tr>
                  <th>GNI-700</th>
                  <td>Ni,In</td>
                  <td>92.0</td>
                  <td>4(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8(3.5~4.0)</td>
                  <td>30</td>
                  <td>0.2~1.5</td>
                  <td>180</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">고속 금도금액 <span>(High Speed Gold Plating Bath)</span> - Reel To Reel</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">합금</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>HGP-C</th>
                  <td>Co</td>
                  <td>99.7</td>
                  <td>10</td>
                  <td>1~8</td>
                  <td>4.0(3.5~4.5)</td>
                  <td>55</td>
                  <td>1~30</td>
                  <td>140</td>
                  <td rowSpan="2" className={sty.lastTd}>콘넥터 및 단자도금, PCB도금에 적합한 고속금도금으로 미려한 색상과 경도가 우수하고 선택적 또는 전체적으로 고속도금을 하는데 적합한 제품.</td>
                </tr>
                <tr>
                  <th>HGP-N</th>
                  <td>Ni</td>
                  <td>99.8</td>
                  <td>10</td>
                  <td>1~8</td>
                  <td>4.0(3.5~4.5)</td>
                  <td>55</td>
                  <td>1~30</td>
                  <td>140</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">산성 금-주석 합금도금액 <span>(Gold-Tin Alloy Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">합금</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GTP-750</th>
                  <td>Sn</td>
                  <td>Au:70~80 Sn:20~30</td>
                  <td>6(5~8)</td>
                  <td>0.3</td>
                  <td>4.7(4.5~5.0)</td>
                  <td>65</td>
                  <td>0.5</td>
                  <td>300</td>
                  <td className={sty.lastTd}>주석합금(20~30%)의 반광택 도금액으로 280±10℃에서 접합용으로 적합한 제품.</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">순금도금액 <span>(Pure Gold Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>SOFA-100</th>
                  <td>99.9</td>
                  <td>8</td>
                  <td>0.15</td>
                  <td>6.0(5.8~6.2)</td>
                  <td>65(60~70)</td>
                  <td>0.5(0.1~1.0)</td>
                  <td>80</td>
                  <td className={sty.lastTd}>약산성의 도금액으로 부드럽고 Matt한 도금물성을 얻을 수 있고 반도체, 리드프레임등 와이어 본딩에 적합한 제품.</td>
                </tr>
              </tbody>
            </table>
          </div>        
          <div className={sty.productInner}>
            <h4 className="h4_tit">무전해금도금</h4>
            <h5 className="h5_tit mt30">치환형 무전해 금도금 <span>(Immersion Electroless Gold Plating Bath)</span></h5>
            <table className={sty.table}  >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KNE-GOLD9000A</th>
                  <td>99.9</td>
                  <td>2(0.5~5.0)</td>
                  <td>0.08~0.1㎛/ 10min</td>
                  <td>4.5~5.3</td>
                  <td>85~90</td>
                  <td>85~90</td>
                  <td className={sty.lastTd}>전기화학적 이온화 경향의 원리를 이용한 것으로 간단하게 침적으로 석출금을 얻을 수 있으며 밀착성이 우수하고 전자부품, PCB, 정밀부품도금에 적합한 제품.</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">치환형 무전해 두께 금도금 <span>(Immersion Electroless Thicker Gold Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KNE-GOLD9002A</th>
                  <td>99.9</td>
                  <td>4</td>
                  <td>0.5~0.7㎛ /20min</td>
                  <td>4.6</td>
                  <td>85~88</td>
                  <td>60~80</td>
                  <td className={sty.lastTd}>PCB, 전자부품, 반도체부품용으로 최대 0.8㎛까지 도금두께가 가능한 제품.</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">환원형 무전해 금도금 <span>(Electroless Gold Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">석출순도(%)</th>
                  <th scope="col">금농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/분)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">경도(Hv0.025)</th>
                  <th scope="col" className={sty.lastTh}>특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KNE-GOLD9001A</th>
                  <td>99.9</td>
                  <td>3</td>
                  <td>4~6 ㎛/hr</td>
                  <td>13.7</td>
                  <td>70±5</td>
                  <td>60~80</td>
                  <td className={sty.lastTd}>자기촉매형으로 환원에 의한 두께용 무전해 금도금액으로 전자부품의 본딩성 및 솔더링용으로 적합한 제품.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}

export default gold
