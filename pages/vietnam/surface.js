import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/vietnam.module.css'

function device (props) {

  const picName = [
    "surface1.png", "surface2.png", "surface3.png",
    "surface4.png", "surface5.png", "surface6.png"]


  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="2">
      <div className="sub-inner">
        <div className={sty.deviceMain}>
          <div className={sty.deviceTxt}>
            <p>
              보유시설:RACK LINE/대형바렐/소형바렐/릴 라인/릴 판재라인/각종 분석기기/환경설비(폐수처리장치,대기정화장치)
            </p>
            <p>
              주요업무:금도금/은도금/니켈도금(전해,무전해)/주석도금아연,니켈합금도금/아연도금/삼원합금도금/릴도금(주석,니켈,동,금)/판재도금
            </p>
          </div>

          <ul>
            {picName.map((item, index) => {
              let picUrl = "/imgs/" + item;

              return <li key={index}>
                <div>
                  <img src={picUrl}></img>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </SubLayout>
  )
}

export default device;
