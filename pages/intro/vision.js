import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/vision.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="2">
      <div className="sub-inner">

        <div className={sty.visionTxt}>
          <h2>고객의 성공을 위해 최선을 다하는 것이 <span className={sty.emBlue}>(주)영인플라켐</span>의 최고의 가치입니다.</h2>
        </div>

        <div className={sty.visionImgWrap}>
          <img src="/imgs/vision.png" />
          
        </div>

        <div className={sty.visionImgWrap}>
        <img src="/imgs/vision2.png" />
        </div>
        
      </div>
    </SubLayout>
  )
}
