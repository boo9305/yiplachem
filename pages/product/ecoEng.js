import SubLayout from '../../components/SubLayout' 
import sty from '../../styles/products.module.css'

function eco (props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="4" lang="eng">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Trivalent Chromium Plating Bath</h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col" rowSpan="2">Product</th>
                  <th scope="col" rowSpan="2">Concentration<br />(Cr<sup>3+</sup>g/ℓ)</th>
                  <th scope="colgroup" colSpan="2">Consumption of solution</th>
                  <th scope="col" rowSpan="2">Temperature<br />(℃)</th>
                  <th scope="col" rowSpan="2">Plating speed<br />(㎛/min)</th>
                  <th scope="col" rowSpan="2">Current density<br />(A/d㎡)</th>
                  <th scope="col" rowSpan="2">pH</th>
                  <th scope="col" rowSpan="2" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
                <tr>
                  <th scope="col">Solution name</th>
                  <th scope="col">Consumption<br />(100A-Hr)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>TCP<br />(Chloridation)</th>
                  <td>22<br />(20~24)</td>
                  <td>TCP-M<br /> TCP-R<br /> TCP-S<br /> TCP-W<br /> TCP-F</td>
                  <td>250g<br /> 1Lt<br /> 45~50㎖</td>
                  <td>32<br />(27~43)</td>
                  <td>0.16~0.25</td>
                  <td>8<br />(7~12)</td>
                  <td>2.7<br />(2.3~2.9)</td>
                  <td className="last al">Solution which does environment-friendly surface treatment by the type of Chloride, not containing the 6th chrome.<br /> It has excellent current efficiency and we can get equal thickness. Because of the low working temperature, easy to work.</td>
                </tr>
                <tr>
                  <th>TCS<br />(Sulfuric Acid)</th>
                  <td>10<br />(8~12)</td>
                  <td>TCS-M<br /> TCS-R<br /> TCS-CR<br /> TCS-Salt</td>
                  <td>4~6Lt<br />8~10Lt</td>
                  <td>52<br />(48~58)</td>
                  <td>0.1</td>
                  <td>8<br />(5~10)</td>
                  <td>3.5<br />(3.2~3.8)</td>
                  <td className="last al">Solution which does environment-friend surface treatment by the type of sulfuric acid, not containing the 6th chrome.<br />Because it has excellent current efficiency and high speed of eduction, possible to increase productivity.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={sty.productInner}>
            <h4 className="h4_tit">Aluminium Desmut &amp; Zincate</h4>
            <table className={sty.table} >
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">pH</th>
                  <th scope="col">Time <br />(sec)</th>
                  <th scope="col">Temperature<br />(℃)</th>
                  <th scope="col">Method</th>
                  <th scope="col" className="last">Characteristics of product and Applying Fiend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>AL-103</th>
                  <td>Acid</td>
                  <td>10~60</td>
                  <td>23~28</td>
                  <td rowSpan="5">Precipitation</td>
                  <td className="last al">Desmut of Aluminum and Aluminum alloy. (Replacement of nitric Acid)</td>
                </tr>
                <tr>
                  <th>AL-104</th>
                  <td>Acid</td>
                  <td>10~60</td>
                  <td>23~28</td>
                  <td className="last al">Desmut of Aluminum and Aluminum alloy. (Replacement of nitric acid and etching agent)</td>
                </tr>
                <tr>
                  <th>AL-DST(W)</th>
                  <td>Acid</td>
                  <td>10~60</td>
                  <td>10~60</td>
                  <td className="last al">Desmut of Aluminum and die-casting material. (Replacement of nitric acid)</td>
                </tr>
                <tr>
                  <th>Tra coat-Zn<br />(Zincate)</th>
                  <td>Alkali</td>
                  <td>10~30</td>
                  <td>15~30</td>
                  <td className="last al">Treatment of an undiluted type Zinc immersion coating which plating is possible in aluminum and aluminum alloy.</td>
                </tr>
                <tr>
                  <th>AZP-1000<br />(Supplement type Zincate)</th>
                  <td>Alkali</td>
                  <td>10~30</td>
                  <td>15~30</td>
                  <td className="last al">As supplement type zinc immersion coating, which plating is possible in aluminum and aluminum alloy. <br />It has excellent adhesion and possible to work continuously.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}

export default eco
