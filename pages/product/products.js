import SubLayout from '../../components/SubLayout' 

import sty from '../../styles/products.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="0">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <table className={sty.table}>
              <thead>
                <tr>
                  <th className={sty.th1} scope="col">프로세서</th>
                  <th className={sty.th2} scope="col" colspan="2">제품명</th>
                  <th className={sty.th3} scope="col" className="last">제품특징 및 적용분야</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th rowspan="5">무전해니켈도금</th>
                  <td colspan="2">E N F</td>
                  <td className= {sty.lastTd}>중인타입으로 안정적인 범용타입의 무전해니켈-인 도금액</td>
                </tr>
                <tr>
                  <td colspan="2">HIPHOS</td>
                  <td className={sty.lastTd}>고인( P 10~12%) 타입의 무전해Ni-P도금액</td>
                </tr>
                <tr>
                  <td colspan="2">LOPHOS</td>
                  <td className={sty.lastTd}>저인( P 3~4%) 중성타입의 고경도 무전해Ni-P도금액( Hv700 )</td>
                </tr>
                <tr>
                  <td colspan="2">ENF-100</td>
                  <td className={sty.lastTd}>저온타입 (65~70℃)으로 수지 및 LDS공정에 최적화된 무전해 Ni-P도금액</td>
                </tr>
                <tr>
                  <td colspan="2">EN8000NB (Ni-B)</td>
                  <td className={sty.lastTd}>니켈-붕소합금도금(2%이하)액으로 석출피막은 내마모성과<br/> 납땜성이 뛰어나며 열처리 없이 경질크롬과 대등한 경도를 가짐으로써 열처리를 할 수 없는 제품의 표면강화에 최적인 제품</td>
                </tr>
                <tr>
                  <th>알루미늄 디스머트제</th>
                  <td colspan="2">AL-103 / AL-104 / AL-DST</td>
                  <td className={sty.lastTd}>알루미늄 및 알루미늄합금의 디스머트 처리제 (질산 대체품)</td>
                </tr>
                <tr>
                  <th rowspan="2">알루미늄 징케이트제</th>
                  <td colspan="2">Tra coat-Zn</td>
                  <td rowspan="2" className={sty.lastTd}>알루미늄 및 알루미늄 합금에 도금이 가능토록하는 아연치환처리제</td>
                </tr>
                <tr>
                  <td colspan="2">AZP-1000</td>
                </tr>
                <tr>
                  <th rowspan="3">무전해동도금</th>
                  <td>LDS</td>
                  <td>ELC MPS STEP-1</td>
                  <td className={sty.lastTd}>LDS소재에 적합한 Strike type용액으로 으로 30분 내 균일하고 안정적인 무전해 동도금용액</td>
                </tr>
                <tr>
                  <td>PROCESS</td>
                  <td>ELC MPS STEP-2</td>
                  <td className={sty.lastTd}>Build type으로 장시간 작업시에도 안정적인 고속형 무전해동도금액 (두께 2.5~3㎛/hr )</td>
                </tr>
                <tr>
                  <td colspan="2">ELC-250</td>
                  <td className={sty.lastTd}>ABS수지 및 엔지니어링 플라스틱 수지에 적합한 안정된 무전해동도금액</td>
                </tr>
                <tr>
                  <th rowspan="2">일반합금도금</th>
                  <td colspan="2">Tri Alloy(F), (S)</td>
                  <td className={sty.lastTd}>Cu-Sn-Zn 합금도금액 ( Nickel free )-밝은 백색으로 니켈알러지 방지 및 RoHS대응제품</td>
                </tr>
                <tr>
                  <td colspan="2">SN-BL / BTC</td>
                  <td className={sty.lastTd}>Sn-Ni / Sn-Co 블랙색상의 합금도금액</td>
                </tr>
                <tr>
                  <th rowspan="3">아연 및 합금도금</th>
                  <td colspan="2">ZINKEL(아연니켈합금)</td>
                  <td className={sty.lastTd}>노시안타입의 알칼리성 아연-니켈 합금도금 약품</td>
                </tr>
                <tr>
                  <td colspan="2">ZENTRA-N series</td>
                  <td className={sty.lastTd}>아연-니켈 합금도금 크로메이트 처리제 ( 흑색. 유색. 청백색 )</td>
                </tr>
                <tr>
                  <td colspan="2">ZENTRA-Z series</td>
                  <td className={sty.lastTd}>아연 크로메이트 처리제 ( 흑색. 유색. 청백색 )</td>
                </tr>
                <tr>
                  <th rowspan="3">전해 금도금</th>
                  <td colspan="2">GC-ST (산성 Au strike도금액)</td>
                  <td className={sty.lastTd}>스테인레스강 위에 직접 금도금시 밀착성을 좋게 하고 높은 내부식성을 부여함</td>
                </tr>
                <tr>
                  <td colspan="2">HGP-C / HGP-N (Hard gold)</td>
                  <td className={sty.lastTd}>콘텍터 및 단자도금, PCB도금에 적합한 고속금도금으로 미려한 색상과 경도가 우수하고 선택적 또는 전체적으로 고속도금을 하는데 적합한 제품</td>
                </tr>
                <tr>
                  <td colspan="2">SOFA-100 ( Pure gold)</td>
                  <td className={sty.lastTd}>약산성의 순금도금액으로 부드럽고 Malt한 도금물성을 얻을 수 있고 반도체, 리드프레임 등 와이어 본딩에 적합한 제품</td>
                </tr>
                <tr>
                  <th rowspan="2">무전해 금도금</th>
                  <td colspan="2">KNE-GOLD 9000A / 9002A</td>
                  <td className={sty.lastTd}>전기화학적 이온화 경향의 원리를 이용한 것으로 간단하게 침적으로 석출금을 얻을 수 있으며 밀착성이 우수하고 전자부품, PCB.정밀부품 도금에 적합한 제품(0.05~0.5㎛가능)</td>
                </tr>
                <tr>
                  <td colspan="2">KNE-GOLD 9001A</td>
                  <td className={sty.lastTd}>자기 촉매형으로 환원에 의한 두께용 무전해 금도금액으로 전자부품의 본딩성 및 납땜용으로 적합한 제품(3㎛/hr)</td>
                </tr>
                <tr>
                  <th>3가 크롬 도금</th>
                  <td colspan="2">TCP(염화욕)</td>
                  <td className={sty.lastTd}>6가 크롬을 함유하지 않은 염화물 타입의 3가크롬 친환경 표면처리 약품</td>
                </tr>
                <tr>
                  <th rowspan="2">후처리제</th>
                  <td colspan="2">FC-400EP</td>
                  <td className={sty.lastTd}>전해식 후처리제로 내식성과 변색방지에 탁월하며 투명한 부동태 피막형성으로 본도금 외관변화에 영향을 주지 않는다. 여러 종류의 도금 (Cr3+,Ni,Au,Ag) 에 적용이 가능하다.</td>
                </tr>
                <tr>
                  <td colspan="2">Anta-100</td>
                  <td className={sty.lastTd}>켄넥터등 전자부품의 접촉저항에 우수한 전기적 특성과 내식성을 부여하는 후처리제로서 경제적이고 안정적으로 사용 가능하다.</td>
                </tr>
                <tr>
                  <th rowspan="4">기 타</th>
                  <td colspan="2">GPS-100 (금박리제)</td>
                  <td className={sty.lastTd}>하지도금을 부식시키지 않고 간단히 침적만으로 금도금층을 박리할 수 있는 제품</td>
                </tr>
                <tr>
                  <td colspan="2">NPS-100 (무전해니켈박리제)</td>
                  <td className={sty.lastTd}>동 또는 동 합금소재상의 무전해니켈 도금층을 소재부식없이 박리할 수 있는 제품</td>
                </tr>
                <tr>
                  <td colspan="2">PT-Activator</td>
                  <td className={sty.lastTd}>ABS 및 엔지니어링 플라스틱에 적용하는 콜로이드 타입의 Catalyst처리액</td>
                </tr>
                <tr>
                  <td colspan="2">Palla-Activator</td>
                  <td className={sty.lastTd}>Copper, Ceramic 적용하는 이온 타입의 촉매( sulfate./Chloride )</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}

