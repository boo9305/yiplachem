import SubLayout from '../../components/SubLayout' 

import sty from '../../styles/products.module.css'

function products(props) {
  return (
    <SubLayout location="Intro > CEO" navIndex="2" subNavIndex="0" lang="eng">
      <div className="sub-inner">
        <div className={sty.productMain}>
          <div className={sty.productInner}>
            <table className={sty.table}>
              <thead>
                <tr>
                  <th className={sty.th1} scope="col">Process</th>
                  <th className={sty.th2} scope="col" colSpan="2">Name of Product</th>
                  <th className={sty.th3} scope="col" className="last">Characteristics of Product and Applying Fiend</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th rowSpan="5">Electroless Nickel Plating</th>
                  <td colSpan="2">E N F</td>
                  <td className= {sty.lastTd}>Middle Phosphorus Electroless Nickel</td>
                </tr>
                <tr>
                  <td colSpan="2">HIPHOS</td>
                  <td className={sty.lastTd}>High Phosphorus(P 10~12%) Electroless Nickel</td>
                </tr>
                <tr>
                  <td colSpan="2">LOPHOS</td>
                  <td className={sty.lastTd}>Low phosphorus(P 3~4%) Electroless Nickel(Hv700)</td>
                </tr>
                <tr>
                  <td colSpan="2">ENF-100</td>
                  <td className={sty.lastTd}>Low Temperature Type(65~70℃) Electroless Nickel, Resins and Electroless plating solution optimized for the LCD process</td>
                </tr>
                <tr>
                  <td colSpan="2">EN8000NB (Ni-B)</td>
                  <td className={sty.lastTd}>As nickel boron alloy plating (below 2%), stability and levelling are good a deposited film is excellent in durability of abrasion and solderability. And even though it does not heat treatment, it has equal hardness with hard chromium and is the best product in reinforcing surface of produce which can not do heat treatment</td>
                </tr>
                <tr>
                  <th>Aluminum Desmut</th>
                  <td colSpan="2">AL-103 / AL-104 / AL-DST</td>
                  <td className={sty.lastTd}>Desmut remover of aluminum and aluminum alloy(Replacement of Nitric Acid)</td>
                </tr>
                <tr>
                  <th rowSpan="2">Aluminum Zincate></th>
                  <td colSpan="2">Tra coat-Zn</td>
                  <td rowSpan="2" className={sty.lastTd}>Treatment of ZN substitution which plating is possible in aluminum and aluminum alloy</td>
                </tr>
                <tr>
                  <td colSpan="2">AZP-1000</td>
                </tr>
                <tr>
                  <th rowSpan="3">Electroless Copper Plating</th>
                  <td>LDS</td>
                  <td>ELC MPS STEP-1</td>
                  <td className={sty.lastTd}>Electroless copper plating is equal and stable within 30 minute and fitted for LCD material of Strike type solution</td>
                </tr>
                <tr>
                  <td>PROCESS</td>
                  <td>ELC MPS STEP-2</td>
                  <td className={sty.lastTd}>Stable and high speed electroless copper plating in working for a long time as a buid type (thickness 2.5~3㎛/hr)</td>
                </tr>
                <tr>
                  <td colSpan="2">ELC-250</td>
                  <td className={sty.lastTd}>Electoless copper plating which is appropriate in ABS resins and engineering plastic resinsu</td>
                </tr>
                <tr>
                  <th rowSpan="2">General Alloy Plating</th>
                  <td colSpan="2">Tri Alloy(F), (S)</td>
                  <td className={sty.lastTd}>Cu-Sn-Zn(Nikel free) –White color. Preventing Nickel allergy and RoHS can be attached</td>
                </tr>
                <tr>
                  <td colSpan="2">SN-BL / BTC</td>
                  <td className={sty.lastTd}>	Sn-Ni / Sn-Co (Black color Alloy plating solution)</td>
                </tr>
                <tr>
                  <th rowSpan="3">Zn and Zn Alloy Plating</th>
                  <td colSpan="2">ZINKEL(Zinc Nickel Alloy)</td>
                  <td className={sty.lastTd}>	Solution of Zn-Nickel for Alkalinity of cyanide free</td>
                </tr>
                <tr>
                  <td colSpan="2">ZENTRA-N series</td>
                  <td className={sty.lastTd}>Chromate treatment for Zn-Nickel Trivalent (Black, Colored, Blue)</td>
                </tr>
                <tr>
                  <td colSpan="2">ZENTRA-Z series</td>
                  <td className={sty.lastTd}>Chromate treatment for Trivalent Chromate (Black, Colored, Blue)</td>
                </tr>
                <tr>
                  <th rowSpan="3">Electric Gold Plating</th>
                  <td colSpan="2">GC-ST(Acidity Gold Strike Plating Solution)</td>
                  <td className={sty.lastTd}>It makes adhesion be good in plating on stainless steel directly and endows high corrosion resistance</td>
                </tr>
                <tr>
                  <td colSpan="2">HGP-C / HGP-N (Hard gold)</td>
                  <td className={sty.lastTd}>It has excellent Color and hardness. which is appropriate in contactor and terminal plating, PCB plating and it is the appropriate product in high speed plating generally</td>
                </tr>
                <tr>
                  <td colSpan="2">SOFA-100 ( Pure gold)</td>
                  <td className={sty.lastTd}>As subacidity plating solution, we can get smooth and matt plating matter and it is the appropriate product in wire bonding as semiconductor, lead frame</td>
                </tr>
                <tr>
                  <th rowSpan="2">Electroless Gold Plating</th>
                  <td colSpan="2">KNE-GOLD 9000A / 9002A</td>
                  <td className={sty.lastTd}>As using a principle of electrochemical ionized tendency, we can get extracted gold simply and adhesion is excellent and it is the appropriate product in electronic component, PCB, the fixed parts plating (Possible to plating 0.05~0.5㎛)</td>
                </tr>
                <tr>
                  <td colSpan="2">KNE-GOLD 9001A</td>
                  <td className={sty.lastTd}>It is the appropriate product for bonding of electronic component and soldering as electroless gold plating by returning as autocatalytic</td>
                </tr>
                <tr>
                  <th>Trivalent Chromate</th>
                  <td colSpan="2">TCP</td>
                  <td className={sty.lastTd}>Solution which does Trivalent Chromate Environment-friendly Surface Treatment by the type of chloride, not containing the 6th chrome</td>
                </tr>
                <tr>
                  <th rowSpan="2">After treatment</th>
                  <td colSpan="2">FC-400EP</td>
                  <td className={sty.lastTd}>As electrolytic after treatment, it is excellent in corrosion resistance and anti-tarnishing method and does not affect on changing exterior of plating by forming passive state film. It is possible to apply in several kinds of plating. (Cr3+,Ni,Au,Ag) Cheap price and improved quality comparing to the foreign product</td>
                </tr>
                <tr>
                  <td colSpan="2">Anta-100</td>
                  <td className={sty.lastTd}>As after treatment which endows excellent electric characteristics to the contact resistance of electronic component such as connector, it is possible to use economically and stably</td>
                </tr>
                <tr>
                  <th rowSpan="4">The others</th>
                  <td colSpan="2">GPS-100 (Gold Stripper)</td>
                  <td className={sty.lastTd}>Product which does not corrode undercoat and can exfoliate gold plating simply by deposition</td>
                </tr>
                <tr>
                  <td colSpan="2">NPS-100 (Electroless Nickel Stripper)</td>
                  <td className={sty.lastTd}>Product which can exfoliate electroless nickel plating layer on copper or copper alloy without corrosion</td>
                </tr>
                <tr>
                  <td colSpan="2">PT-Activator</td>
                  <td className={sty.lastTd}>Catalyst treatment type which applies to ABS and engineering plastic</td>
                </tr>
                <tr>
                  <td colSpan="2">Palla-Activator</td>
                  <td className={sty.lastTd}>Catalyst of ion type which applies to Copper, Ceramic(Sulfate/Chloride)</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </SubLayout>
  )
}

export default products
