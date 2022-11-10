
import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function nickel(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="2" subNavIndex="3">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 class="h4_tit">무전해 니켈-붕소 도금액 <span>(Electroless Ni-B Plating Bath)</span></h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">제품명</th>
                  <th scope="col">붕소(B) (%)</th>
                  <th scope="col">니켈농도 (g/L)</th>
                  <th scope="col">석출속도 (㎛/시간)</th>
                  <th scope="col">pH</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">경도(Hv0.1)</th>
                  <th scope="col" class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>EN8000NB</th>
                  <td>2.0이하</td>
                  <td>5</td>
                  <td>8~10</td>
                  <td>6.5~7.0</td>
                  <td>65±3</td>
                  <td>700±50</td>
                  <td className={sty.lastTd}>니켈붕소합금도금(2%이하)액으로 안정성과 평활성이 좋으며 석출피막은 내마모성과 솔더링이 뛰어나며 열처리를 하지 않고서도 경질크롬과 대등한 경도를 요구되는 제품의 표면강화에 최적인 제품.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 class="h4_tit">무전해 니켈-인 도금액 <span>(Electroless Ni-P Plating Bath)</span></h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col" rowspan="2">제품명</th>
                  <th scope="col" rowspan="2">인(P) (%)</th>
                  <th scope="col" rowspan="2">니켈농도 (g/L)</th>
                  <th scope="col" rowspan="2">석출속도 (㎛/시간)</th>
                  <th scope="col" rowspan="2">pH</th>
                  <th scope="col" rowspan="2">작업온도(℃)</th>
                  <th scope="col" colspan="2">경도(Hv0.1)</th>
                  <th scope="col" rowspan="2" class="last">특징 및 적용분야</th>
                </tr>
                <tr>
                  <th scope="col">도금후</th>
                  <th scope="col">열처리후</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>ENF</th>
                  <td>7~9</td>
                  <td>6</td>
                  <td>15~20</td>
                  <td>4.6</td>
                  <td>90</td>
                  <td>500±50</td>
                  <td>900±50</td>
                  <td className={sty.lastTd}>유해물질이 함유되지 않아 유해물질사용제한 지침(RoHS)에 대응할수 있는 중인 타입의 범용 무전해니켈 도금액.</td>
                </tr>
                <tr>
                  <th>HIPHOS</th>
                  <td>10~12</td>
                  <td>6</td>
                  <td>10~12</td>
                  <td>5.0</td>
                  <td>90</td>
                  <td>450±50</td>
                  <td>900±50</td>
                  <td className={sty.lastTd}>인(P)함량이 10~12% 함유하는 고인타입의 무전해니켈도금액으로 비정질(Amorphous) 도금층 유지.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
    </div>
  </SubLayout>
  )
}
export default nickel
