
import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function lds (props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="6">
      <div className="sub-inner">
          <div className={sty.ldsMain}>
            <img src="/imgs/lds.jpg" alt=""></img>
        </div>
      </div>
    </SubLayout>
  )
}

export default lds
