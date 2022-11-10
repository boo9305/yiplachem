import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function lds (props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="2" subNavIndex="6" lang="eng">
      <div className="sub-inner">
          <div className={sty.ldsMain}>
            <img src="/imgs/ldsEng.jpg" alt=""></img>
        </div>
      </div>
    </SubLayout>
  )
}

export default lds
