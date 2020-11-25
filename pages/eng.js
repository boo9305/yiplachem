import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home = (props) => {

  useEffect(() => {
  }, []) 

  return (
    <Layout lang="eng">
      <div className="main">
        <div className="banner">
          <div className="inner">
            <div className="banner-txt">
              <h1>It is the best value of</h1>
              <h2>Youngin Plachem to do</h2>
              <h3>the best for the customer's success</h3>
            </div>
            
          </div>
        </div>

        <section className="section0">
          <div className="section-inner">
            <ul className="section0-list">
              <li>
                <div>
                  <h1>Products</h1>
                  <p>Youngin Plachem has products such as "Gold Plating", "Alloy Plating", "Electroless Nickel Plating" "Environment-Friendly Products", "Zn and Zn Alloy Plating"</p>
                  <img src="/imgs/section0-item1.png" alt=""></img>
                  <div>
                    <Link href="/product/productsEng"><a>More</a></Link>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <h1>R & D</h1>
                  <p>Youngin Plachem's Research Status, Equipment, Certificate</p>
                  <img src="/imgs/section0-item2.png" alt=""></img>
                  <div>
                    <Link href="/develop/statusEng"><a>More</a></Link>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <h1>Contact Us</h1>
                  <p>Youngin Plachem try every day for satisfaction of customer's more requirement with continuous R&D and innovation</p>
                  <img src="/imgs/section0-item3.png" alt=""></img>
                  <div>
                    <Link href="/supportEng"><a>More</a></Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default Home;

