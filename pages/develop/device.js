import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/develop.module.css'

function device (props) {

  const picName = [
    "equipment1.jpg", "equipment2.jpg", "equipment3.jpg", 
    "equipment4.jpg","equipment5.jpg","equipment6.jpg",
    "equipment7.jpg","equipment8.jpg","equipment9.jpg",
    "equipment10.jpg","equipment11.jpg","equipment12.jpg"]

  const picTitle = [
    "SEM/EDS", "GC-MS" ,"HPLC",
    "ICP-OES", "AAS" ,"X-RAY THICKNESS TESTER",
    "CE(전기영동장치)", "IC" ,"비디오카메라",
    "경도기", "X-ray 측정기", "FT-IR"
  ]
  const picSubTitle = [
    "(금속표면조직분석 및 표면 성분분석)", "(휘발성유기물 정성/정량분석)", "(유기물 정량분석)",
    "(다원소 무기물분석)", "(무기물분석)", "",
    "유기물 / 무기물 이온분석", "", "",
    "", ""
  ]

  return (
    <SubLayout location="Intro > CEO" navIndex="3" subNavIndex="2">
      <div className="sub-inner">
        <div className={sty.deviceMain}>
          <ul>
            {picName.map((item, index) => {
              let picUrl = "/imgs/" + item;

              return <li key={index}>
                <div>
                  <img src={picUrl}></img>
                  <div className={sty.devicePicTxt}>
                    <h1>{picTitle[index]}</h1>
                    <h2>{picSubTitle[index]}</h2>
                  </div> 
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
