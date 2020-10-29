import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/develop.module.css'

export default (props) => {
  const picName = [
    "certification1.jpg", "certification2.jpg", "certification3.jpg", 
    "certification4.jpg","certification5.jpg","certification6.jpg"]

  const picTitle = [
    "ISO 9001" , "ISO14001" , "벤처기업 확인서" , "특허증" , "기업부설 인증서" , " 뿌리기술전문기업 인증서"
  ]
  return (
    <SubLayout location="Intro > CEO" navIndex="2" subNavIndex="3">
      <div className="sub-inner">
        <div className={sty.certiMain}>
          <ul>
            {picName.map((item, index) => {
              let picUrl = "/imgs/" + item;

              return <li>
                <div>
                  <img src={picUrl}></img>
                  <div className={sty.certiPicTxt}>
                    <h1>{picTitle[index]}</h1>
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

