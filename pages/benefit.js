import SubLayout from '../components/SubLayout' 

import sty from '../styles/ceogreeting.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="3">
      <div className="sub-inner">
        <ul className={sty.benefitList}>
          <li>
            <div>
              <em/>
              <h1>ITEM1</h1>
              <p>this is item1</p>
            </div>
          </li>
          <li>
            <div>
            </div>
          </li>
          <li>
            <div>
            </div>
          </li>
          <li>
            <div>
            </div>
          </li>
          <li>
            <div>
            </div>
          </li>
          <li>
            <div>
            </div>
          </li>
          <li>
            <div>
            </div>
          </li>
        </ul>
      </div>
    </SubLayout>
  )
}

