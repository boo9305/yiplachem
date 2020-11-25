import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function eco (props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="4">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 class="h4_tit">3가 크롬 도금액 <span>(Trivalent Chromium Plating Bath)</span></h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col" rowspan="2">Product</th>
                  <th scope="col" rowspan="2">표준농도(Cr<sup>3+</sup>g/ℓ)</th>
                  <th scope="colgroup" colspan="2">약품소모량</th>
                  <th scope="col" rowspan="2">작업온도(℃)</th>
                  <th scope="col" rowspan="2">도금속도(㎛/min)</th>
                  <th scope="col" rowspan="2">전류밀도(A/d㎡)</th>
                  <th scope="col" rowspan="2">pH</th>
                  <th scope="col" rowspan="2" class="last">특징 및 적용분야</th>
                </tr>
                <tr>
                  <th scope="col">약품명</th>
                  <th scope="col">소모량(100A-hr당)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>TCP(염화욕)</th>
                  <td>22(20~24)</td>
                  <td>TCP-M TCP-R TCP-S TCP-W TCP-F</td>
                  <td>250g 1Lt 45~50㎖</td>
                  <td>32(27~43)</td>
                  <td>0.16~0.25</td>
                  <td>8(7~12)</td>
                  <td>2.7(2.3~2.9)</td>
                  <td className={sty.lastTd}>6가 크롬을 함유하지 않은 염화물 타입의 환경친화적인 제품으로 전류효율이 우수하고 균일한 도금 두께를 얻을 수 있고 작업 온도가 낮아 작업성이 용이함</td>
                </tr>
                <tr>
                  <th>TCS(황산욕)</th>
                  <td>10(8~12)</td>
                  <td>TCS-M TCS-R TCS-CR TCS-Salt</td>
                  <td>4~6Lt8~10Lt</td>
                  <td>52(48~58)</td>
                  <td>0.1</td>
                  <td>8(5~10)</td>
                  <td>3.5(3.2~3.8)</td>
                  <td className={sty.lastTd}>6가 크롬을 함유하지 않은 황산타입의 환경친화적인 제품으로 전류효율이 우수하고 석출속도가 빨라 생산성이 좋음. 간단한 도금액 구성으로 타사제품보다 작업자의 편의성이 좋아졌으며 건욕비 및 보급비용 절감</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 class="h4_tit">알루미늄 활성화제 및 징케이트제 <span>(Aluminium Desmut &amp; Zincate)</span></h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">pH</th>
                  <th scope="col">처리시간(sec)</th>
                  <th scope="col">작업온도(℃)</th>
                  <th scope="col">작업방법</th>
                  <th scope="col" class="last">특징 및 적용분야</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>AL-103</th>
                  <td>산성</td>
                  <td>10~60</td>
                  <td>23~28</td>
                  <td rowspan="5">침적식</td>
                  <td className={sty.lastTd}>알루미늄 및 알루미늄합금의 처리제. (질산 대체품)</td>
                </tr>
                <tr>
                  <th>AL-104</th>
                  <td>산성</td>
                  <td>10~60</td>
                  <td>23~28</td>
                  <td className={sty.lastTd}>알루미늄 및 알루미늄합금의 처리제. (질산 대체품)및 Zincate 에칭제</td>
                </tr>
                <tr>
                  <th>AL-DST(W)</th>
                  <td>산성</td>
                  <td>10~60</td>
                  <td>10~60</td>
                  <td className={sty.lastTd}>알루미늄 및 다이캐스팅 소재의 처리제. (질산 대체품)</td>
                </tr>
                <tr>
                  <th>Tra coat-Zn(징케이트)</th>
                  <td>알칼리</td>
                  <td>10~30</td>
                  <td>15~30</td>
                  <td className={sty.lastTd}>알루미늄 및 알루미늄 합금에 우수한 밀착성을 부여하는 원액타입 아연치환처리제</td>
                </tr>
                <tr>
                  <th>AZP-1000(보충Type 징케이트)</th>
                  <td>알칼리</td>
                  <td>10~30</td>
                  <td>15~30</td>
                  <td className={sty.lastTd}>알루미늄 및 알루미늄 합금에 도금이 가능토록하고 밀착력이 좋은 보충Type타입의 아연치환처리제</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
    </div>
  </SubLayout>
  )
}

export default eco
