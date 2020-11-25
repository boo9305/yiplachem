import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function nickel(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="3" lang="eng">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Electroless Ni-B Plating Bath</h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">boron(B)<br /> (%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation Speed<br /> (㎛/hr)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Hardness<br /> (Hv0.1)</th>
                  <th scope="col" className="last">Characteristics of Product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>EN8000NB</th>
                  <td>Below 2.0</td>
                  <td>5</td>
                  <td>8~10</td>
                  <td>6.5~7.0</td>
                  <td>65&plusmn;3</td>
                  <td>700&plusmn;50</td>
                  <td className="last al">As nickel boron alloy plating (below 2%), stability and levelling are good a deposited film is excellent in durability of abrasion and solderability.<br /> And even though it does not heat treatment, it has equal hardness with hard chromium and is the best product in reinforcing surface of produce which can not do heat treatment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Electroless Ni-P Plating Bath</h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col" rowSpan="2">Product</th>
                  <th scope="col" rowSpan="2">phosphorus(P)<br /> (%)</th>
                  <th scope="col" rowSpan="2">Concentration<br /> (g/L)</th>
                  <th scope="col" rowSpan="2">Precipitation Speed<br /> (㎛/hr)</th>
                  <th scope="col" rowSpan="2">pH</th>
                  <th scope="col" rowSpan="2">Temperature<br />(℃)</th>
                  <th scope="col" colSpan="2">Hardness (Hv0.1)</th>
                  <th scope="col" rowSpan="2" className="last">Characteristics of Product and Applying Fiend</th>
                </tr>
                <tr>
                  <th scope="col">After plating</th>
                  <th scope="col">After heat treatment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>ENF</th>
                  <td>7~9</td>
                  <td>6</td>
                  <td>15~20</td>
                  <td>4.6</td>
                  <td>90</td>
                  <td>500&plusmn;50</td>
                  <td>900&plusmn;50</td>
                  <td className="last al">It is Electroless Ni Plating Bath of Middle Phosphorus Type<br /> that can not be contained in harmful pollutants so that it can react to RoHS .</td>
                </tr>
                <tr>
                  <th>HIPHOS</th>
                  <td>10~12</td>
                  <td>6</td>
                  <td>10~12</td>
                  <td>5.0</td>
                  <td>90</td>
                  <td>450&plusmn;50</td>
                  <td>900&plusmn;50</td>
                  <td className="last al">It maintains amorphous plating layer as Electroless Ni-P Plating Bath of High Phosphorus Type<br /> which contains phosphorus(P) content(10~12%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}
export default nickel
