import SubLayout from '../../components/SubLayout'
import sty from '../../styles/develop.module.css'

function status(props) {
  const HexagonIcon = ({ color }) => (
    <svg width="120" height="138" viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg">
      {/* 육각형 배경 */}
      <polygon points="60,0 120,34.5 120,103.5 60,138 0,103.5 0,34.5" fill={color} />

      {/* 내부 흰색 육각형 - 정중앙 */}
      <polygon points="60,41 85,55 85,83 60,97 35,83 35,55" fill="white" />
    </svg>
  )

  return (
    <SubLayout location="Intro > CEO" navIndex="3" subNavIndex="1">
      <div className="sub-inner">
        <div className={sty.statusMain}>
          <div className={sty.researchContainer}>
            {/* 표면처리약품 국산화 */}
            <div className={sty.researchItem}>
              <div className={sty.hexagonWrapper}>
                <HexagonIcon color="#c94854" />
              </div>
              <div className={sty.researchTitleArea}>
                <h3 className={`${sty.researchTitle} ${sty.colorRed}`}>표면처리약품 국산화</h3>
                <div className={`${sty.researchLine} ${sty.lineRed}`}></div>
              </div>
              <ul className={`${sty.researchList} ${sty.listRed}`}>
                <li>전자소자용 soft gold 도금액</li>
                <li>나노 복합도금액 개발</li>
                <li>무전해 니켈도금액 개발<br/>(Ni-P, Ni-B, Ni-W-P 등)</li>
                <li>무니켈 3원합금 도금액</li>
                <li>LDS도금프로세스 공정액 등</li>
              </ul>
            </div>

            {/* 맞춤형 약품 개발 */}
            <div className={sty.researchItem}>
              <div className={sty.hexagonWrapper}>
                <HexagonIcon color="#2b8b9a" />
              </div>
              <div className={sty.researchTitleArea}>
                <h3 className={`${sty.researchTitle} ${sty.colorTeal}`}>맞춤형 약품 개발</h3>
                <p className={`${sty.researchSubtitle} ${sty.colorTeal}`}>고객사 요구에 맞는 맞춤약품</p>
                <div className={`${sty.researchLine} ${sty.lineTeal}`}></div>
              </div>
              <ul className={`${sty.researchList} ${sty.listTeal}`}>
                <li>EMI차폐용 블랙도금</li>
                <li>중성타입 글라스 세정제</li>
                <li>고경도 Ni-W 도금액</li>
                <li>고내식 Sn-Ni 도금액 등</li>
                <li>고자성 Ni-Fe 도금액</li>
                <li>고연성 (전해)Ni-P 도금액</li>
              </ul>
            </div>

            {/* 친환경 약품 개발 */}
            <div className={sty.researchItem}>
              <div className={sty.hexagonWrapper}>
                <HexagonIcon color="#5a6670" />
              </div>
              <div className={sty.researchTitleArea}>
                <h3 className={`${sty.researchTitle} ${sty.colorGray}`}>친환경 약품 개발</h3>
                <div className={`${sty.researchLine} ${sty.lineGray}`}></div>
              </div>
              <ul className={`${sty.researchList} ${sty.listGray}`}>
                <li>질산대체 Aluminium처리제</li>
                <li>3가 Chromate 처리제</li>
                <li>질소,인 Free 중성 세정제 등</li>
              </ul>
            </div>

            {/* 경량화 신소재 표면처리 공정개발 */}
            <div className={sty.researchItem}>
              <div className={sty.hexagonWrapper}>
                <HexagonIcon color="#e67e22" />
              </div>
              <div className={sty.researchTitleArea}>
                <h3 className={`${sty.researchTitle} ${sty.colorOrange}`}>경량화 신소재 표면처리 공정개발</h3>
                <div className={`${sty.researchLine} ${sty.lineOrange}`}></div>
              </div>
              <ul className={`${sty.researchList} ${sty.listOrange}`}>
                <li>Mg 도금 및 크로메이트 공정개발</li>
                <li>엔지니어링 플라스틱 도금공정 개발<br/>(PA, PPA, PPS, PA-6 등)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}

export default status
