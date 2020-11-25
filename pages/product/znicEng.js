import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function znic(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="5" lang="eng">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Zn-Ni Alloy Plating Bath</h4>
            <table className={sty.table} > 
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Ni<br /> (%)</th>
                  <th scope="col">Concentration<br /> (g/ℓ)</th>
                  <th scope="col">Precipitation Speed<br /> (㎛/min)</th>
                  <th scope="col">Temperature<br /> (℃)</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Zinkel</th>
                  <td>12~18</td>
                  <td>Zn:8.0 <br />Nikel:1.5</td>
                  <td>0.2~0.3</td>
                  <td>23~28</td>
                  <td className={sty.lastTd}>* Zn-Ni Alloy plating solution of Non Cyanide * Excellent adhesion(Quadruple ~ quintuple of Zn plating) * High corrosion resistance and adhesion on high temperature * High film hardness Hv350&plusmn;50.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Trivalent Chromate for Zinc Plating</h4>
            <table className={sty.table} > 
              <thead>
                <tr>
                  <th scope="col" colSpan="2">Product</th>
                  <th scope="col">Concentration<br /> (㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br /> (℃)</th>
                  <th scope="col">Time<br /> (SEC)</th>
                  <th scope="col">Stirring</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2">Zentra-Z100<br />(Colored)</th>
                  <td>100<br />(80~140)</td>
                  <td>2<br />(1.8~2.5)</td>
                  <td>25<br />(22~30)</td>
                  <td>30~60</td>
                  <td rowSpan="4">Air blower</td>
                  <td className={sty.lastTd}>Non fluorine, color is light rainbow and green color.</td>
                </tr>
                <tr>
                  <th colSpan="2">Zentra-Z200<br />(Blue and white color)</th>
                  <td>100<br />(80~140)</td>
                  <td>1.8<br />(1.6~2.0)</td>
                  <td>25<br />(20~40)</td>
                  <td>10~30</td>
                  <td className={sty.lastTd}>Available to work at room temperature It has light blue color and excellent corrosion resistance</td>
                </tr>
                <tr>
                  <th rowSpan="2">CT-BLACK<br /> (Black color)</th>
                  <th className={sty.znicA}>A</th>
                  <td>50<br />(40~60)</td>
                  <td rowSpan="2">1.7<br />(1.5~2.0)</td>
                  <td rowSpan="2">25<br />(20~30)</td>
                  <td rowSpan="2">20<br />(10~30)</td>
                  <td rowSpan="2" className={sty.lastTd}>Surface is equal black colored and available to work at room temperature. We can reduce consumption, it is possible to use economically</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>50<br />(40~60)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Trivalent Chromate for Zinc Nickel Alloy Plating</h4>
            <table className={sty.table} > 
              <thead>
                <tr>
                  <th scope="col" colSpan="2">Product</th>
                  <th scope="col">Concentration<br />(㎖/ℓ)</th>
                  <th scope="col">pH</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Time<br />(SEC)</th>
                  <th scope="col">Stirring</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2">Zentra-N100<br />(Colored)</th>
                  <td>100<br />(80~140)</td>
                  <td>1.8<br />(1.6~2.3)</td>
                  <td>60<br />(50~70)</td>
                  <td>30~60</td>
                  <td rowSpan="8">Air blower</td>
                  <td rowSpan="2" className={sty.lastTd}>It has light rainbow color and excellent corrosion resistance</td>
                </tr>
                <tr>
                  <th colSpan="2">Zentra-N100(S)<br />(Colored)</th>
                  <td>100<br />(80~140)</td>
                  <td>2.0<br />(1.8~2.2)</td>
                  <td>50<br />(45~55)</td>
                  <td>40~60</td>
                </tr>
                <tr>
                  <th rowSpan="2">Zentra-N200<br />(Blue and white color)</th>
                  <th className={sty.znicA}>A</th>
                  <td>60<br />(50~70)</td>
                  <td rowSpan="2">3.7<br />(3.5~4.0)</td>
                  <td rowSpan="2">25<br />(20~30)</td>
                  <td rowSpan="2">30~60</td>
                  <td rowSpan="2" className={sty.lastTd}>It has light blue color and available to work at the room temperature</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>40<br />(30~50)</td>
                </tr>
                <tr>
                  <th rowSpan="2">Zentra-N350<br />(Black color)</th>
                  <th>A</th>
                  <td>150<br />(130~170)</td>
                  <td rowSpan="2">2<br />(1.8~2.3)</td>
                  <td rowSpan="2">25<br />(20~30)</td>
                  <td rowSpan="2">40~60</td>
                  <td rowSpan="2" className={sty.lastTd}>This chromate has high corrosion resistance and uniform film</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>50<br />(30~70)</td>
                </tr>
                <tr>
                  <th colSpan="2">TOP-COAT</th>
                  <td>Use Undiluted solution</td>
                  <td>8~9</td>
                  <td>20~40</td>
                  <td>5~10</td>
                  <td className={sty.lastTd}>Water soluble coatings of organic type</td>
                </tr>
                <tr>
                  <th colSpan="2">UVI-COAT</th>
                  <td>Use Undiluted solution</td>
                  <td>7~8</td>
                  <td>20~40</td>
                  <td>5~10</td>
                  <td className={sty.lastTd}>Water soluble coatings of organic type</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}
export default znic
