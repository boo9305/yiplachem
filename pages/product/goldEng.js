import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function gold (props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="1" lang="eng">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Electric Gold Plating</h4>
            <h5 className="h5_tit mt30">Gold Strike Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration <br />(g/L)</th>
                  <th scope="col">Precipitation Speed<br />(㎛)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GC-ST</th>
                  <td>99.7</td>
                  <td>2</td>
                  <td>flash</td>
                  <td>below 1</td>
                  <td>25~35</td>
                  <td>2<br />(1~5)</td>
                  <td>100~120</td>
                  <td className="last al">It makes adhesion be good in plating on stainless steel directly and endows high corrosion resistance</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">Hard Gold Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Alloy</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation Speed <br />(㎛/min)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GC-700</th>
                  <td>Co</td>
                  <td>99.7</td>
                  <td>4<br />(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8<br />(3.5~4.2)</td>
                  <td>45</td>
                  <td>0.2~1.5</td>
                  <td>160</td>
                  <td rowSpan="4" className="last al">It has excellent Color and hardness which is appropriate in contactor, electric contact, terminal plating and Rack plating or Barrel plating</td>
                </tr>
                <tr>
                  <th>GCI-700</th>
                  <td>Co,In</td>
                  <td>92.0</td>
                  <td>4<br />(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8<br />(3.5~4.0)</td>
                  <td>30</td>
                  <td>0.2~1.5</td>
                  <td>180</td>
                </tr>
                <tr>
                  <th>GN-700</th>
                  <td>Ni</td>
                  <td>99.7</td>
                  <td>4<br />(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8<br />(3.5~4.2)</td>
                  <td>45</td>
                  <td>0.2~1.5</td>
                  <td>160</td>
                </tr>
                <tr>
                  <th>GNI-700</th>
                  <td>Ni,In</td>
                  <td>92.0</td>
                  <td>4<br />(1~8)</td>
                  <td>0.2~1.5</td>
                  <td>3.8<br />(3.5~4.0)</td>
                  <td>30</td>
                  <td>0.2~1.5</td>
                  <td>180</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">High Speed Gold Plating Bath - Reel To Reel</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Alloy</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation Speed <br />(㎛/min)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>HGP-C</th>
                  <td>Co</td>
                  <td>99.7</td>
                  <td>10</td>
                  <td>1~8</td>
                  <td>4.0<br />(3.5~4.5)</td>
                  <td>55</td>
                  <td>1~30</td>
                  <td>140</td>
                  <td rowSpan="2" className="last al">It has excellent Color and hardness which is appropriate in contactor and terminal plating, PCB plating and it is the appropriate product in high speed plating generally</td>
                </tr>
                <tr>
                  <th>HGP-N</th>
                  <td>Ni</td>
                  <td>99.8</td>
                  <td>10</td>
                  <td>1~8</td>
                  <td>4.0<br />(3.5~4.5)</td>
                  <td>55</td>
                  <td>1~30</td>
                  <td>140</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">Gold-Tin Alloy Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Alloy</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation Speed <br />(㎛/min)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GTP-750</th>
                  <td>Sn</td>
                  <td>Au:70~80<br /> Sn:20~30</td>
                  <td>6<br />(5~8)</td>
                  <td>0.3</td>
                  <td>4.7<br />(4.5~5.0)</td>
                  <td>65</td>
                  <td>0.5</td>
                  <td>300</td>
                  <td className="last al">It is Semi-Bright Plating Bath of Tin Alloy(20~30%) and appropriate product for use of connection in 280&plusmn;10℃</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">Pure Gold Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation Speed <br />(㎛/min)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Current density<br />(A/d㎡)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>SOFA-100</th>
                  <td>99.9</td>
                  <td>8</td>
                  <td>0.15</td>
                  <td>6.0<br />(5.8~6.2)</td>
                  <td>65<br />(60~70)</td>
                  <td>0.5<br />(0.1~1.0)</td>
                  <td>80</td>
                  <td className="last al">As subacidity plating solution, we can get smooth and matt plating matter and it is the appropriate product in wire bonding as semiconductor, lead frame</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Electroless Gold Plating</h4>
            <h5 className="h5_tit mt30">Immersion Electroless Gold Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation velocity</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KNE-GOLD<br />9000A</th>
                  <td>99.9</td>
                  <td>2<br />(0.5~5.0)</td>
                  <td>0.08~0.1㎛<br />/ 10min</td>
                  <td>4.5~5.3</td>
                  <td>85~90</td>
                  <td>85~90</td>
                  <td className="last al">As using a principle of electrochemical ionized tendency, we can get extracted gold simply and adhesion is excellent and it is the appropriate product in electronic component, PCB, the fixed parts plating</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">Immersion Electroless Thicker Gold Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation velocity <br />(㎛/min)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KNE-GOLD<br />9002A</th>
                  <td>99.9</td>
                  <td>4</td>
                  <td>0.5~0.7㎛<br /> /20min</td>
                  <td>4.6</td>
                  <td>85~88</td>
                  <td>60~80</td>
                  <td className="last al">It is the available for making plating thickness maximum 0.8㎛ and product in electronic component, PCB, the fixed parts plating</td>
                </tr>
              </tbody>
            </table>
            <h5 className="h5_tit mt30">Electroless Gold Plating Bath</h5>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Crystal purity<br />(%)</th>
                  <th scope="col">Concentration<br /> (g/L)</th>
                  <th scope="col">Precipitation velocity</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Hardness<br />(Hv0.025)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KNE-GOLD<br />9001A</th>
                  <td>99.9</td>
                  <td>3</td>
                  <td>4~6 ㎛/hr</td>
                  <td>13.7</td>
                  <td>70&plusmn;5</td>
                  <td>60~80</td>
                  <td className="last al">It is the appropriate product for bonding of electronic component and soldering as electroless gold plating by returning as autocatalytic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}

export default gold
