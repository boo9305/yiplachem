import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/organization.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="4" lang="eng">
      <div className="sub-inner">
        <div className={sty.orgaMain}>
          <img src="/imgs/organizationEng.jpg" alt=""/>
        </div>
      </div>
    </SubLayout>
  )
}

