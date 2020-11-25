import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function alloy(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="2" lang="eng">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 className="h4_tit">삼원합금도금</h4>
            <h5 className="h5_tit mt30">삼원합금도금<span>(Tri-Alloy Plating Bath)</span></h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col" rowSpan="2">Product</th>
                  <th scope="col" rowSpan="2">Concentration<br />(g/ℓ)</th>
                  <th scope="colgroup" colSpan="2">Consumption of solution</th>
                  <th scope="col" rowSpan="2">Temperature<br />(℃)</th>
                  <th scope="col" rowSpan="2">Precipitation Speed<br />(㎛/min)</th>
                  <th scope="col" rowSpan="2">Current density<br />(A/d㎡)</th>
                  <th scope="col" rowSpan="2">Hardness<br />(Hv0.025)</th>
                  <th scope="col" rowSpan="2" className={sty.lastTh}>Characteristics of product and Applying Fiend</th>
                </tr>
                <tr>
                  <th scope="col">Solution name</th>
                  <th scope="col">Consumption<br />(100A-Hr)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="5">Tri-Alloy(F)<br />Tri-Alloy(S)</th>
                  <td>Cu:12</td>
                  <td>CuCN</td>
                  <td>80g</td>
                  <td rowSpan="5">55<br />(50~60)</td>
                  <td rowSpan="5">0.3</td>
                  <td rowSpan="5">2<br />(0.5~5)</td>
                  <td rowSpan="5">400&plusmn;50</td>
                  <td rowSpan="5" className={sty.lastTd}>It is light white color tri-alloy plating. It has excellent corrosion, Electrical properties of silver, and high hardness of Ni It can use for cell phone, Ni-free products, parts of communication equipment.</td>
                </tr>
                <tr>
                  <td>Sn:32</td>
                  <td>Na<sub>2</sub>SnO<sub>3</sub></td>
                  <td>75g</td>
                </tr>
                <tr>
                  <td>Zn:1</td>
                  <td>Zn(CN)2</td>
                  <td>18g</td>
                </tr>
                <tr>
                  <td>NaCN:35</td>
                  <td rowSpan="2">Polish</td>
                  <td rowSpan="2">50㎖</td>
                </tr>
                <tr>
                  <td>NaOH:25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Binary Alloy</h4>
            <h5 className="h5_tit mt30">Tin-Nickel Alloy Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Concentration<br />(㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Stirring</th>
                  <th scope="col" className={sty.lastTh}>Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="2">SN-BL</th>
                  <td>Sn:100</td>
                  <td rowSpan="2">9<br />(9.0~10.0)</td>
                  <td rowSpan="2">25<br />(20~35)</td>
                  <td rowSpan="2">1<br />(0.5~2)</td>
                  <td rowSpan="2">Cathode stirring (Do not use compressed air agitation )</td>
                  <td rowSpan="2" className={sty.lastTd}>It is black color plating solution. It has excellent stability, we can easy to maintain solution. <br />-RoHS can be attached.</td>
                </tr>
                <tr>
                  <td>Ni:200</td>
                </tr>
                <tr>
                  <th rowSpan="2">TNP</th>
                  <td>Sn:320</td>
                  <td rowSpan="2">4.8<br />(4.0~5.8)</td>
                  <td rowSpan="2">65<br />(60~70)</td>
                  <td rowSpan="2">1<br />(0.3~3)</td>
                  <td rowSpan="2">Cathode stirring (Do not use compressed air agitation )</td>
                  <td rowSpan="2" className={sty.lastTd}>It is plating soultion of equl white tint. It has excellent stability and titanaloy, we can easy to maintain solution. <br />-RoHS can be attached.</td>
                </tr>
                <tr>
                  <td>Ni:200</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">Tin-Cobalt Alloy Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Concentration<br />(㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Stirring</th>
                  <th scope="col" className={sty.lastTh}>Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="2">BTC</th>
                  <td>Sn:50</td>
                  <td rowSpan="2">9.5<br />(9.0~10.0)</td>
                  <td rowSpan="2">40<br />(35~45)</td>
                  <td rowSpan="2">1<br />(0.5~1.5)</td>
                  <td rowSpan="2">Cathode stirring (Unavailable compressed air agitation)</td>
                  <td rowSpan="2" className={sty.lastTd}>We can get equal black color from Sn-Co of alkalescence <br />- RoHS can be attached.</td>
                </tr>
                <tr>
                  <td>Co:100</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </SubLayout>
  )
}

export default alloy
