import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function znic(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="5">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 class="h4_tit">아연-니켈 합금도금액 <span>(Zn-Ni Alloy Plating Bath)</span></h4>
            <table className={sty.table} > 
              <thead>
                <tr>
                  <th scope="col" className={sty.th1}>Product</th>
                  <th scope="col">니켈함량 (%)</th>
                  <th scope="col">농도 (g/ℓ)</th>
                  <th scope="col">석출속도 (㎛/min)</th>
                  <th scope="col">작업온도 (℃)</th>
                  <th scope="col" class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Zinkel</th>
                  <td>12~18</td>
                  <td>아연:8.0 니켈:1.5</td>
                  <td>0.2~0.3</td>
                  <td>23~28</td>
                  <td className={sty.lastTd}>* 노시안 알카리타입 아연니켈 합금 도금액 * 내식성 우수 (Zn도금의4~5배)-염수분무테스트 적청&amp;nbsp&amp;nbsp 2000시간이상 * 고온에서 내식성 및 밀착성 우수 * 높은피막 경도 Hv350±50.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 class="h4_tit">3가 크로메이트 아연도금용 <span>(Trivalent Chromate for Zinc Plating)</span></h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th  colspan="2" className={sty.znicFirst}>Product</th>
                  <th >농도 (㎖/ℓ)</th>
                  <th >pH</th>
                  <th >작업온도 (℃)</th>
                  <th >처리시간 (SEC)</th>
                  <th >교반</th>
                  <th  class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="2">Zentra-Z100(유색)</th>
                  <td>100(80~140)</td>
                  <td>2(1.8~2.5)</td>
                  <td>25(22~30)</td>
                  <td>30~60</td>
                  <td rowspan="4">물품요동에어브로워</td>
                  <td className={sty.lastTd}>불소 성분이 없고 밝은 무지개색부터 녹색에 이르는 색상을 나타냄</td>
                </tr>
                <tr>
                  <th colspan="2">Zentra-Z200(청백색)</th>
                  <td>100(80~140)</td>
                  <td>1.8(1.6~2.0)</td>
                  <td>25(20~40)</td>
                  <td>10~30</td>
                  <td className={sty.lastTd}>상온에서 작업이 가능하고 내식성과 외관이 밝은 청색을 나타냄</td>
                </tr>
                <tr>
                  <th rowspan="2">CT-BLACK (흑색)</th>
                  <th className={sty.znicA}>A</th>
                  <td>50(40~60)</td>
                  <td rowspan="2">1.7(1.5~2.0)</td>
                  <td rowspan="2">25(20~30)</td>
                  <td rowspan="2">20(10~30)</td>
                  <td rowspan="2" className={sty.lastTd}>균일한 흑색 외관을 나타내고 소모량이 적고 상온에서 작업이 가능함으로 경제적임</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>50(40~60)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 class="h4_tit">3가 크로메이트 아연-니켈도금용 <span>(Trivalent Chromate for Zinc Nickel Alloy Plating)</span></h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col" colspan="2" className={sty.znicFirst}>Product</th>
                  <th scope="col">농도(㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">처리시간(SEC)</th>
                  <th scope="col">교반</th>
                  <th scope="col" class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="2">Zentra-N100(유색)</th>
                  <td>100(80~140)</td>
                  <td>1.8(1.6~2.3)</td>
                  <td>60(50~70)</td>
                  <td>30~60</td>
                  <td rowspan="8">물품요동에어브로워</td>
                  <td rowspan="2" className={sty.lastTd}>밝은 무지개색으로 내식성이 우수함</td>
                </tr>
                <tr>
                  <th colspan="2">Zentra-N100(S)유색</th>
                  <td>100(80~140)</td>
                  <td>2.0(1.8~2.2)</td>
                  <td>50(45~55)</td>
                  <td>40~60</td>
                </tr>
                <tr>
                  <th rowspan="2">Zentra-N200(청백색)</th>
                  <th className={sty.znicA}>A</th>
                  <td>60(50~70)</td>
                  <td rowspan="2">3.7(3.5~4.0)</td>
                  <td rowspan="2">25(20~30)</td>
                  <td rowspan="2">30~60</td>
                  <td rowspan="2" className={sty.lastTd}>상온에서 작업 가능하고 내식성과 외관이 밝은 청색을 나타냄</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>40(30~50)</td>
                </tr>
                <tr>
                  <th rowspan="2">Zentra-N350(흑색)</th>
                  <th>A</th>
                  <td>150(130~170)</td>
                  <td rowspan="2">2(1.8~2.3)</td>
                  <td rowspan="2">25(20~30)</td>
                  <td rowspan="2">40~60</td>
                  <td rowspan="2" className={sty.lastTd}>균일한 피막을 형성하며 내식성이 우수한 크로메이트제</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>50(30~70)</td>
                </tr>
                <tr>
                  <th colspan="2">TOP-COAT</th>
                  <td>원액사용</td>
                  <td>8~9</td>
                  <td>20~40</td>
                  <td>5~10</td>
                  <td className={sty.lastTd}>유기 타입의 수용성 마무리 코팅제</td>
                </tr>
                <tr>
                  <th colspan="2">UVI-COAT</th>
                  <td>원액사용</td>
                  <td>7~8</td>
                  <td>20~40</td>
                  <td>5~10</td>
                  <td className={sty.lastTd}>유기 타입의 수용성 마무리 코팅제</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </SubLayout>
  )
}
export default znic
