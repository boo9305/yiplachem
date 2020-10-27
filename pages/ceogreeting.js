import SubLayout from '../components/SubLayout' 

import sty from '../styles/ceogreeting.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="0">
      <div className="inner">
        <div className={sty.ceoMain}>
          <div className={sty.ceoTitle}>
            <h2>CEO Intro</h2>
          </div>
          <div>
            <img src="./imgs/ceo_tit.jpg" alt="" />
          </div>
          <div className={sty.ceoMaintxt}>
            <p>
              안녕하십니까 ㈜영인플라켐 대표 백승룡입니다.
              <br/>
              <br/>
              언제나 ㈜영인플라켐에 많은 관심과 성원을 보내주심에 감사의 인사를 올립니다.
              <br />
              <br />
              1999년 창립을 시작으로 표면처리약품을 국산화하는데 집중하여 많은 고객분들께 사랑받는 기업으로 성장하였습니다.
              <br />
              <br />
              그 후 전자부품과 정밀부품용 표면처리약품-무전해금도금,무전해니켈도금 등과 자동차용 내부식성 향상을 위한 크로메이트 제품, RoHS에 부합되는 친환경 표면처리 약품 등을 개발하여 고객이 만족하는 품질을 자랑하고있습니다.
              <br />
              <br />
              뿐만 아니라, 기업부설연구소를 통해 국내 표면처리 산업이 보다 좋은 품질의 제품과 원가절감을 통한 경쟁력 향상에 기여할수 있도록 연구개발에 힘쓰고 있습니다.
              <br />
              <br />
              혁신적인 기술력과 안정적인 생산력을 바탕으로 표면처리시장의 New leader가 되어 기술 개발에 더욱 더 매진하여 고객 여러분의 기대에 부응할 수 있는 <span className={sty.emBlue}>㈜영인플라켐</span>의 더 큰 도약을 지켜봐주시기 바랍니다.
              <br />
            </p>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}
