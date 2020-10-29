import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/history.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="1">
      <div className="inner">
        <div className={sty.histMain}>
          <div className={sty.histCenterLine}></div>

          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2016</h2>
              <p>백만불 수출의 탑 수상</p>
              <p>뿌리기술전문기업 인증</p>
              <p>베트남법인 신축공사 <span>(5000m2)</span></p>
              <p>친환경 알류미늄 탈지제 개발 <span>(N ,P free)</span></p>
              <p>삼성 글로벌기술센터 공동 개발과제 수행</p>
              <p>본사 건물 증축 <span>(560m2)</span></p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2015</h2>
              <p>Silver brightener 개발</p>
              <p>고경도 Brake pad liner용 hybrid - 수지 코팅제 및 프로세스개발</p>
              <p><span>(생산기술지원사업 과제수행)</span></p>
            </div>
          </div>
          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2014</h2>
              <p>삼성전자 베트남법인에 글라스세정제 공급</p>
              <p>베트남 법인 설립<span>(베트남 박닌성 꾸에보 공단)</span></p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2013</h2>
              <p>LDS공정용 동도금 프로세스 출시</p>
              <p>생산기술지원사업 과제수행</p>
              <p>고연성, 고내식성 사양의 니켈합금청정 표면처리 기술개발</p>
            </div>
          </div>
          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2012</h2>
              <p>산학공동연구과제 진행</p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2010</h2>
              <p>This is history2</p>
            </div>
          </div>
          
          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2009</h2>
              <p>This is history2</p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2008</h2>
              <p>This is history2</p>
            </div>
          </div>
          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2007</h2>
              <p>This is history2</p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2006</h2>
              <p>This is history2</p>
            </div>
          </div>
        </div>
      </div>

    <style jsx>{`
    
    
    `}</style>
    </SubLayout>
  )
}
