import SubLayout from '../components/SubLayout' 

import sty from '../styles/ceogreeting.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="1">
      <div className="sub-inner">
        <div className={sty.histMain}>
          <div className={sty.histCenterLine}></div>

          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2016</h2>
              <p>This is history</p>
              <p>This is history</p>
              <p>This is history</p>
              <p>This is history</p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2014</h2>
              <p>This is history2</p>
            </div>
          </div>
          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2013</h2>
              <p>This is history2</p>
            </div>
          </div>
          <div className={sty.histRight}>
            <div className={sty.histRightImg}></div>
            <div className={sty.histRightTxt}>
              <h2>2012</h2>
              <p>This is history2</p>
            </div>
          </div>
          <div className={sty.histLeft}>
            <div className={sty.histLeftImg}></div>
            <div className={sty.histLeftTxt}>
              <h2>2011</h2>
              <p>This is history2</p>
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
    </SubLayout>
  )
}
