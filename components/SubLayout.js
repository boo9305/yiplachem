import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

import Header from "./Header"
import Footer from "./Footer"

import { _arrNav, _arrSubNav, _arrSubNavURL } from './Nav'
import { _arrNavEng, _arrSubNavEng, _arrSubNavURLEng } from './Nav'

const SubLayout =  (props) => {
  const arrNav = props.lang == "eng" ? _arrNavEng : _arrNav
  const arrSubNav = props.lang == "eng" ? _arrSubNavEng : _arrSubNav
  const arrSubNavURL = props.lang == "eng" ? _arrSubNavURLEng : _arrSubNavURL;

  return (
    <Layout navIndex={props.navIndex} lang={props.lang}>
      <div className="sub-banner">
        <div className="inner">
          {
            props.lang == "eng" ?
              <div className="sub-banner-txt-eng"></div>
              :
              <div className="sub-banner-txt"></div>
          }
        </div>
      </div>

      <div className="sub-location">
        <div className="inner">
          <div className="sub-location-txt">
            <p>Home > {arrNav[props.navIndex]} > {arrSubNav[props.navIndex][props.subNavIndex]} </p> 
          </div>
        </div>
      </div>

      <div className="sub-nav-list">
        <div className="sub_inner">
          <ul>
            {arrSubNav[props.navIndex].map((item, index) =>
              {
                let cls = "sub-nav-list-off"
                if (index == props.subNavIndex) { cls = "sub-nav-list-on" } 
                if (item == "") return null;
                return (
                  <li key={index} className={cls}>
                    <Link href={arrSubNavURL[props.navIndex][index]}><a>{item}</a></Link>
                  </li>
                ) 
              }
            )}
          </ul>
        </div>
      </div>

      <div className="sub-nav-title-txt">
        <div className="inner">
          <h2>{arrSubNav[props.navIndex][props.subNavIndex]}</h2>
          {
            props.lang == "eng" ?
              <h3>Youngin Plachem, Inc. makes customers' happiness together.</h3>
              :
              <h3>고객의 행복을 함께 만들어가는 (주)영인플라켐입니다.</h3>
          }
        </div>
      </div>

      <div>
        {props.children}
      </div>
    </Layout>
  )
}

export default SubLayout;
