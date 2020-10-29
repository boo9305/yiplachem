import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/develop.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="2" subNavIndex="1">
      <div className="sub-inner">
        <div className={sty.statusMain}>
          <img src="/imgs/status.jpg" alt="" />
        </div>
      </div>
    </SubLayout>
  )
}

