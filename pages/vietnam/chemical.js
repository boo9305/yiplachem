import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/vietnam.module.css'

function device (props) {

  const picName = [
    "chemical1.png", "chemical2.png", "chemical3.png",
    "chemical4.png", "chemical5.png", "chemical6.png"]


  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="1">
      <div className="sub-inner">
        <div className={sty.deviceMain}>
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
