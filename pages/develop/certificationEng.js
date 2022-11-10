import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/develop.module.css'

function certification(props) {
  const picName = [
    "certification1.jpg", "certification2.jpg", "certification3.jpg", 
    "certification4.jpg","certification5.jpg","certification6.jpg"]

  const picTitle = [
    "ISO 9001" , "ISO14001" , "Certificate of Venture company" , "Certificate of a patent" , "Certificate of affiliated research center" , "Certificate of Korea national ppuri industry"
  ]
  return (
    <SubLayout location="Intro > CEO" navIndex="3" subNavIndex="3" lang="eng">
      <div className="sub-inner">
        <div className={sty.certiMain}>
          <ul>
            {picName.map((item, index) => {
              let picUrl = "/imgs/" + item;

              return <li key={index}>
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

export default certification
