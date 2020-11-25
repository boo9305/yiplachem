import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/ceogreeting.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="0" lang="eng">
      <div className="sub-inner">
        <div>
          <div className={sty.ceoImg}>
            { /*<img src="./imgs/ceo_tit.jpg" alt="" />*/ }
            <h1><span className={sty.emBlue}>Young-In Plachem</span>try every day for satisfaction of customer's </h1>
            <h1>more requirement with continuous R&D and innovation</h1>
          </div>
          <div className={sty.ceoMaintxt}>
            <p>
              Young-in Plachem is growing up with customers together as replacing drug imports for localizing surface treatment chemical which is a basis of root industry and solving difficulties of surface businesses.
              <br/>
              <br/>
              Young-in Plachem try every day for satisfaction of customer’s more requirement with continuous R&D and innovation.
              <br/>
              <br/>

              Hi! I am the CEO of Young-in Plachem, Seungryong Beak. I appreciate for visiting our homepage and I would like to thank for your interest and support to Young-in Plachem

              <br/>
              <br/>
              Since establishment in 1999, we are growing up as a loved company from various customers for concentrating localization of surface treatment chemical.
              <br/>
              <br/>

              After that, we are accomplishing an excellent quality which is satisfied with customers and developing surface treat chemical-electroless, gold plating, electroless nickel plating, chromate products for corrosion resistant’s improvement for cars, and eco-surface treat chemical correspond with RoHs

              <br/>
              <br/>
              In addition, we are trying to research and develop so that the surface industry would contribute to competitiveness improved with better quality and cost reduction.
              <br/>
              <br/>

              Please keep eyes on Young-in Plachem’s greater jumping which is going to come up to your expectations with R&D and being a new leader of surface treatment market based on innovative technical skills and stable productive capacity.

              <br/>
              <br/>
              CEO Seung-ryong Beak
            </p>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}
