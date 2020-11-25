import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/benefit.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="0" subNavIndex="3" lang="eng">
      <div className="sub-inner">
        <ul className={sty.benefitList}>
          <li>
            <div>
              <em/>
              <h1>Ceremonial support</h1>
              <p>Giving expenditure for every congratulations and condolences</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Educational expenses</h1>
              <p>Supporting high school and university expenses</p>
              <p>(for 10yrs more long-serving employees)</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Mutual aid society</h1>
              <p>Managing mutual aid society (giving expenditures for congratulations and condolences)</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Cafeteria</h1>
              <p>Managing cafeteria and supporting lunch</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Car / Mobile</h1>
              <p>Supporting sales rep’s transportation and communication expenses</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Long-serving</h1>
              <p>Giving rewards and leaves</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Holiday gift</h1>
              <p>Giving New Year's Day, Chu-Seok, and the foundation date of the company gift</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Working Clothes</h1>
              <p>Giving summer, spring and fall, and winter clothes</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Other gifts</h1>
              <p>	Birthday gift</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Health checkup</h1>
              <p>Once a year (R&D and manufacturing dept.)</p>
              <p>every other year(office worker)</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Group insurance</h1>
              <p>Insurance payment for accidents and hospitalization</p>
            </div>
          </li>
          <li>
            <div>
              <h1>Holiday policy</h1>
              <p>Holiday policy	Holidays and Summer Vacation</p>
            </div>
          </li>
        </ul>
      </div>
    </SubLayout>
  )
}

