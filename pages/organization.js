import SubLayout from '../components/SubLayout' 

import sty from '../styles/ceogreeting.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="4">
      <div className="sub-inner">
        <div className={sty.orgaMain}>
          <div className={sty.orgaLine1}>
            <h1>
              CEO
            </h1>
          </div>
          <div className={sty.orgaLine2}>
            <h1>
              CEO
            </h1>
          </div>

          <div className={sty.orgaLine3}>
            
          </div>

        </div>


      </div>
    </SubLayout>
  )
}

