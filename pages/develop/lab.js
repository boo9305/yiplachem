import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/develop.module.css'

function lab(props)  {
  return (
    <SubLayout location="Intro > CEO" navIndex="3" subNavIndex="0">
      <div className="sub-inner">
        <div className={sty.labMain}>
         <h1>표면처리공학연구소 소개</h1>
         <br/>
         <h2>연구원 일동은 환경친화적이며 <span className={sty.blueTxt}>인간중심의 연구철학으로 미래를</span> 앞당기겠습니다.</h2>
         <br/>
         <p>(주)영인플라켐의 부설연구소는 2004년 4월 설립되어 우수인력과 노하우를 바탕으로 급변하는 전방산업에 신속히 대응하고 있으며, 신기술 및 신제품 개발에 끊임없이 도전하고 있습니다.</p>
         <br/>
         <p>그뿐만 아니라,</p>
         <p>산학연 공동연구를 통해 산업기반기술과제나 청정생산기술과제 등과 같은 국책과제에 참여하고 있으며, 고객사의 연구소와도 긴밀한 협력 관계를 유지하여 선진기술 변화에 대응하고 있습니다.</p>

         <br/>
         <p>이로써,</p>
         <p>국내 반도체, PCB 및 정밀화학약품 발전에 선도적인 역할을 담당하고 있으며 사업 다각화를 위한 지속적인 투자와 연구개발은 고객의 이익증진 뿐만 아니라 고객제품의 품질 향상에 기여하고 있습니다.</p>

       </div>

    </div>
  </SubLayout>
  )
}

export default lab
