import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

import Header from "./Header"
import Footer from "./Footer"

const SubLayout =  (props) => {
  const arrNav = ["회사소개", "제품소개", "연구개발", "갤러리", "제품문의"]
  const arrSubNav = [
    ["CEO 인사말", "연혁", "비전", "복리후생", "조직도", "오시는길"],
    [ "Products", "금도금", "합금도금", "무전해니켈도금", "환경친화제품", "아연 및 아연합금도금액 / 3가 크로메이트 LDS PROCESS" ],
    [ "부설연구소", "연구현황", "보유기기", "인증서" ], 
  ]
  
  const arrSubNavURL = [
    ["/ceogreeting", "/history", "/vision", "/", "/" , "/"],
    [""],
    [""],
    [""],
    [""]
  ]

  return (
    <Layout>
      <div className="sub-banner">
        <div className="inner">
          <div className="sub-banner-txt"></div>
        </div>
      </div>

      <div className="sub-location">
        <div className="inner">
          <div className="sub-location-txt">
            <p>Home > {props.location}</p> 
          </div>
        </div>
      </div>
      
      <div className="sub-nav-list">
        <div className="inner">
          <ul>
            {arrSubNav[props.navIndex].map((item, index) =>
              {
                let cls = "sub-nav-list-off"
                if (index == props.subNavIndex) { cls = "sub-nav-list-on" } 
                return (
                  <li className={cls}>
                    <Link href={arrSubNavURL[0][index]}><a>{item}</a></Link>
                  </li>
                ) 
              }
            )}
          </ul>
        </div>
      </div>

      <div>
        {props.children}
      </div>
    </Layout>
  )
}

export default SubLayout;
