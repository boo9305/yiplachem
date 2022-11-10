import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function alloy(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="2" subNavIndex="2">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 class="h4_tit">삼원합금도금</h4>
            <h5 class="h5_tit mt30">삼원합금도금<span>(Tri-Alloy Plating Bath)</span></h5>
            <table className={sty.table} > 
              <thead>
                <tr>
                  <th scope="col" rowspan="2">Product</th>
                  <th scope="col" rowspan="2">표준농도(g/ℓ)</th>
                  <th scope="colgroup" colspan="2">약품소모량</th>
                  <th scope="col" rowspan="2">작업온도(℃)</th>
                  <th scope="col" rowspan="2">도금속도(㎛/min)</th>
                  <th scope="col" rowspan="2">전류밀도(A/d㎡)</th>
                  <th scope="col" rowspan="2">경도(Hv0.025)</th>
                  <th scope="col" rowspan="2" class="last">특징 및 적용분야</th>
                </tr>
                <tr>
                  <th scope="col">약품명</th>
                  <th scope="col">소모량(100A-hr당)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="5">Tri-Alloy(F)Tri-Alloy(S)</th>
                  <td>Cu:12</td>
                  <td>CuCN</td>
                  <td>80g</td>
                  <td rowspan="5">55(50~60)</td>
                  <td rowspan="5">0.3</td>
                  <td rowspan="5">2(0.5~5)</td>
                  <td rowspan="5">400±50</td>
                  <td rowspan="5" className={sty.lastTd}>밝은 백색의 3원합금으로 부식에 대한 저항이 매우 우수하며 은의 전기적 특성과 니켈의 높은 경도를 가지며 핸드폰 외장재 및 니켈프리제품 및 전기접점 통신부품으로 사용할 수 있는 제품</td>
                </tr>
                <tr>
                  <td>Sn:32</td>
                  <td>Na<sub>2</sub>SnO<sub>3</sub></td>
                  <td>75g</td>
                </tr>
                <tr>
                  <td>Zn:1</td>
                  <td>Zn(CN)2</td>
                  <td>18g</td>
                </tr>
                <tr>
                  <td>NaCN:35</td>
                  <td rowspan="2">광택제</td>
                  <td rowspan="2">50㎖</td>
                </tr>
                <tr>
                  <td>NaOH:25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 class="h4_tit">이원합금도금</h4>
            <h5 class="h5_tit mt30">주석-니켈 합금도금액 <span>(Tin-Nickel Alloy Plating Bath)</span></h5>
            <table className={sty.table} > 
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">농도(㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">교반</th>
                  <th scope="col" class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="2">SN-BL</th>
                  <td>Sn:100</td>
                  <td rowspan="2">9(9.0~10.0)</td>
                  <td rowspan="2">25(20~35)</td>
                  <td rowspan="2">1(0.5~2)</td>
                  <td rowspan="2">음극교반공기교반안됨</td>
                  <td rowspan="2" className={sty.lastTd}>균일한 블랙색상 도금액. 액 안정성이 좋아 관리가 용이함 RoHS 대응제품</td>
                </tr>
                <tr>
                  <td>Ni:200</td>
                </tr>
                <tr>
                  <th rowspan="2">TNP</th>
                  <td>Sn:320</td>
                  <td rowspan="2">4.8(4.0~5.8)</td>
                  <td rowspan="2">65(60~70)</td>
                  <td rowspan="2">1(0.3~3)</td>
                  <td rowspan="2">음극교반공기교반안됨</td>
                  <td rowspan="2" className={sty.lastTd}>균일한 밝은 백색피막의 도금액. 내식성이 우수하고 액 안정성이 좋아 관리가 용이함 RoHS 대응제품</td>
                </tr>
                <tr>
                  <td>Ni:200</td>
                </tr>
              </tbody>
            </table>
            <h5 class="h5_tit mt30">주석-코발트 합금도금액 <span>(Tin-Cobalt Alloy Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">농도(㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">전류밀도(A/d㎡)</th>
                  <th scope="col">교반</th>
                  <th scope="col" class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="2">BTC</th>
                  <td>Sn:50</td>
                  <td rowspan="2">9.5(9.0~10.0)</td>
                  <td rowspan="2">40(35~45)</td>
                  <td rowspan="2">1(0.5~1.5)</td>
                  <td rowspan="2">음극교반공기교반안됨</td>
                  <td rowspan="2" className={sty.lastTd}>균일한 블랙색상 도금을 얻을 수 있는 약알카리성 타입의 석-코발트 합금도금액,RoHS 대응제품</td>
                </tr>
                <tr>
                  <td>Co:100</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </SubLayout>
  )
}

export default alloy
