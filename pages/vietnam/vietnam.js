import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/ceogreeting.module.css'

import hsty from '../../styles/history.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="0">
      <div className="sub-inner">
        <div>
          <div className={sty.vietnamImg}>
            <img src="/imgs/vietnam.png" alt="" />
          </div>

          <div className={sty.vietnamTitle}>
          <span className={sty.emBlueBig}>RYONG-IN VINA</span>
              
          </div>

          <div className={sty.vietnamMain}>
          
            <div className={sty.vietnamTxt}>
              <div className={sty.vietnamTxtInner}>
                <p>
                  <span className={sty.emBar}>설립일자</span>
                </p>
                <p>
                  <span className={sty.emBar}>주소</span>
                </p>
                <p>
                  <span className={sty.emBar}>종업원수</span>
                </p>
                <p>
                  <span className={sty.emBar}>주요생산품</span>
                </p>
                <p>
                  <span className={sty.emBar}>주요거래처</span>

                </p>

              </div>

            </div>
            <div className={sty.vietnamSubTxt}>
              <p>2014년 9월 19일</p>
              <p>LOT K-1-1. QUE VO INDUSTRIAL ZONE(EXPENSION AREA) NAM SON WARD,BAC NINH CITY,BAC NINH PROVINCE, VN</p>
              <p>70명</p>
              <p>반도체,전자부품,시계도금,금형(지그)도금,일반약품,도금액,전처리액, 제조 및 유통</p>
              <p>삼성,에스코넥,서진비나,서진시스템,세광,미래테크,KMW, KMG 기타 중소기업 다수등</p>
            </div>
          </div>

          <div className={sty.clear}></div>

          <div className="histDiv">
            <div className={hsty.histMain}>
              <div className={hsty.histCenterLine}></div>
              <div className={hsty.histLeft}>
                <div className={hsty.histLeftImg}></div>
                <div className={hsty.histLeftTxt}>
                  <h2>2022</h2>
                  <p>약품 대형반응조 2개 추가설치</p>
                </div>
              </div>
              <div className={hsty.histRight}>
                <div className={hsty.histRightImg}></div>
                <div className={hsty.histRightTxt}>
                  <h2>2019</h2>
                  <p>KMW협력업체 지정</p>
                  <p>현장 반 자동화 시행 . 릴 판재도금라인 추가설치</p>
                </div>
              </div>
              <div className={hsty.histLeft}>
                <div className={hsty.histLeftImg}></div>
                <div className={hsty.histLeftTxt}>
                  <h2>2017</h2>
                  <p>신축공장 입주 . 릴 판재라인추가 설치</p>
                </div>
              </div>
              <div className={hsty.histRight}>
                <div className={hsty.histRightImg}></div>
                <div className={hsty.histRightTxt}>
                  <h2>2015</h2>
                  <p>Ryong-in vina 도금사업부 신설</p>
                </div>
              </div>
              <div className={hsty.histLeft}>
                <div className={hsty.histLeftImg}></div>
                <div className={hsty.histLeftTxt}>
                  <h2>2014</h2>
                  <p>Ryong-in vina 설립</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}
