import SubLayout from '../components/SubLayout' 

import sty from '../styles/ceogreeting.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="3">
      <div className="sub-inner">
        <ul className={sty.benefitList}>
          <li>
            <div>
              <em/>
              <h1>경조금</h1>
              <p>경조사 경조금, 경조 휴가</p>
            </div>
          </li>
          <li>
            <div>
              <h1>학자금</h1>
              <p>고등학교, 대학교 등록금</p>
              <p>(10년 장기근속자)</p>
            </div>
          </li>
          <li>
            <div>
              <h1>상조회</h1>
              <p>경조금 지급</p>
            </div>
          </li>
          <li>
            <div>
              <h1>사내식당</h1>
              <p>회사 식당 운영, 중식비 지급</p>
            </div>
          </li>
          <li>
            <div>
              <h1>교통비, 통신비 지원</h1>
              <p>영업사원 업무 교통비, 통신비 지원</p>
            </div>
          </li>
          <li>
            <div>
              <h1>포상휴가</h1>
              <p>포상금, 휴가</p>
            </div>
          </li>
          <li>
            <div>
              <h1>명절선물</h1>
              <p>설날, 추석, 회사창립일 선물지급</p>
            </div>
          </li>
          <li>
            <div>
              <h1>근무복</h1>
              <p>하계, 춘추계, 동계 근무복 지급</p>
            </div>
          </li>
          <li>
            <div>
              <h1>기타선물</h1>
              <p>본인 생일 선물지급</p>
            </div>
          </li>
          <li>
            <div>
              <h1>건강검진</h1>
              <p>매년 1회(개발, 생산직)</p>
              <p>격년 1회(사무직)</p>
            </div>
          </li>
          <li>
            <div>
              <h1>단체보험</h1>
              <p>재해사고, 입원진료시 보험금 지급</p>
            </div>
          </li>
          <li>
            <div>
              <h1>휴가제도</h1>
              <p>명절, 하계휴가</p>
            </div>
          </li>
        </ul>
      </div>
    </SubLayout>
  )
}

