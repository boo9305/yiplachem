import Link from 'next/link'

import {useRef} from  'react'

function  Header (props) {
  const arrNav = ["회사소개", "제품소개", "연구개발", "갤러리", "제품문의"]
  const arrSubNav = [
    ["CEO 인사말", "연혁", "비전", "복리후생", "조직도", "오시는길"],
    [ "Products", "금도금", "합금도금", "무전해니켈도금", "환경친화제품", "아연합금도금액" , "LDS PROCESS" ],
    [ "부설연구소", "연구현황", "보유기기", "인증서" ], 
    ["갤러리"],
    ["제품문의"],
  ]
  
  const arrSubNavURL = [
    ["/intro/ceogreeting", "/intro/history", "/intro/vision", "/intro/benefit", "/intro/organization" , "/intro/map"],
    ["/product/products", "/product/gold",  "/product/alloy", "/product/nickel", "/product/eco", "/product/znic", "/product/lds"],
    ["/develop/lab", "/develop/status", "/develop/device", "/develop/certification"],
    ["/gallery"],
    ["/support"]
  ]

  let navDownWrapRef = null
  let blindRef = null
  
  let navRightMenu = null

  const onHandleMouseOver = () => {
    navDownWrapRef.style.height = '400px' 
    navDownWrapRef.style.visibility = 'visible' 
    blindRef.style.backgroundColor = 'rgba(0,0,0,0.5)'
    blindRef.style.height = '100%'
  }

  const onHandleMouseOut= () => {
    navDownWrapRef.style.height = '0px' 
    navDownWrapRef.style.visibility = 'hidden' 
    blindRef.style.backgroundColor = 'rgba(0,0,0,0)'
    blindRef.style.height = '0'
  }

  const onRightBtnClick = () => {
    let right = navRightMenu.style.right;
    console.log(right)
    if (right == null || right == "0px") {
      navRightMenu.style.right = "-100%"  
    } else {
      navRightMenu.style.right = "0px"  
    }
  }
  return(
    <div className="header">
      <div ref={(ref) => blindRef = ref} className="blind"></div>
      <div ref={ref => navRightMenu = ref} className="nav-right-menu">
        <ul>
          {arrNav.map((item, index) => {
            let cls = "nav-right-menu-off"
            if (index == props.navIndex) cls = "nav-right-menu-on"
            return (
              <li key={index} className={cls}>
                <Link href={arrSubNavURL[index][0]} ><a>{item}</a></Link>
              </li>
            )
            }
          )}
        </ul>
      </div>
      <div className="lang">
        <div className="inner">
          <ul className="lang-list">
            <li><a>KOR</a></li>
            <li><a>ENG</a></li>
          </ul>
        </div>
      </div>
      <div className="nav">
        <div className="inner">
          <div className="nav-right-btn" onClick={onRightBtnClick}>
            <img src="/svgs/menu.svg" alt=""></img>
          </div>

          <div className="nav-logo">
            <Link href="/"><a><img src="/imgs/logo.png" alt=""></img></a></Link>
          </div>
          <div className="nav-list"
            onMouseOver={onHandleMouseOver} onMouseOut={onHandleMouseOut}>
            <ul>
              {arrNav.map((item, index) => {
                let result = <li key={index}>{item}</li> 
                  if (index > 2) {
                    result = <li key={index}><a href={arrSubNavURL[index][0]}>{item}</a></li> 
                  }
                return result
              })}
            </ul>
            <div ref={(ref) => navDownWrapRef = ref} className="nav-down-wrap">
              <div className="inner nav-down-wrap-inner">
                <div>
                  <ul>
                    {arrSubNav[0].map((item, index) => 
                      <li key={index}>
                        <Link href={arrSubNavURL[0][index]} ><a>{item}</a></Link>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <ul>
                    {arrSubNav[1].map((item, index) => 
                      <li key={index}>
                        <Link href={arrSubNavURL[1][index]} ><a>{item}</a></Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <ul>
                    {arrSubNav[2].map((item, index) => 
                      <li key={index}>
                        <Link href={arrSubNavURL[2][index]} ><a>{item}</a></Link>
                      </li>
                    )}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header;
