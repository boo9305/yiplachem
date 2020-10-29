import SubLayout from '../../components/SubLayout' 

import sty from '../../styles/products.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="0">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <table>
            <thead>
              <tr>
                <th>프로세서</th>
                <th>제품명</th>
                <th>제품특징 및 적용분야</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={sty.tbTh1} rowspan="5">무전해니켈도금</th>
                <th className={sty.tbTh2} >E N F</th>
                <th className={sty.tbTh3} >중인타입으로 안정적인 범용타입의 무전해니켈-인 도금액</th>
              </tr>
              <tr>
                <th>HIPHOS</th>
                <th className={sty.tbTh3} >고인( P 10~12%) 타입의 무전해Ni-P도금액</th>
              </tr>
              <tr>
                <th>LOPHOS</th>
                <th className={sty.tbTh3} >저인( P 3~4%) 중성타입의 고경도 무전해Ni-P도금액( Hv700 )</th>
              </tr>
              <tr>
                <th>ENF-100</th>
                <th className={sty.tbTh3} >저온타입 (65~70℃)으로 수지 및 LDS공정에 최적화된 무전해 Ni-P도금액</th>
              </tr>
              <tr>
                <th>EN8000NB (Ni-B)</th>
                <th className={sty.tbTh3} >니켈-붕소합금도금(2%이하)액으로 석출피막은 내마모성과 납땜성이 뛰어나며 열처리 없이 경질크롬과 대등한 경도를 가짐으로써 열처리를 할 수 없는 제품의 표면강화에 최적인 제품</th>
              </tr>
              <tr>
                <th>알루미늄 디스머트제</th>
                <th>AL-103 / AL-104 / AL-DST</th>
                <th className={sty.tbTh3} >알루미늄 및 알루미늄합금의 디스머트 처리제 (질산 대체품)</th>
              </tr> 
              <tr>
                <th rowspan="2">알루미늄 징케이트제</th>
                <th>Tra coat-Zn</th>
                <th className={sty.tbTh3}  rowspan="2">알루미늄 및 알루미늄 합금에 도금이 가능토록하는 아연치환처리제</th>
              </tr>
              <tr>
                <th>AZP-1000</th>
              </tr>
              <th>무전해동도금</th>
            </tbody>
          </table>
        </div>
      </div>
    </SubLayout>
  )
}

