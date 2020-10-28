import Link from 'next/link'

import {useRef} from  'react'

function  Header () {
  const arrNav = ["회사소개", "제품소개", "연구개발", "갤러리", "제품문의"]
  const arrSubNav = [
    ["CEO 인사말", "연혁", "비전", "복리후생", "조직도", "오시는길"],
    [ "Products", "금도금", "합금도금", "무전해니켈도금", "환경친화제품", "아연 및 아연합금도금액 / 3가 크로메이트 LDS PROCESS" ],
    [ "부설연구소", "연구현황", "보유기기", "인증서" ], 
  ]
  
  const arrSubNavURL = [
    ["/ceogreeting", "/history", "/vision", "/benefit", "/organization" , "/map"],
    ["/products"],
    [""],
    [""],
    [""]
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
    let width = navRightMenu.style.width;
    if (width == "" || width == "0%") {
      navRightMenu.style.width = "100%"  
    } else {
      navRightMenu.style.width = "0%"  
    }
  }
  return(
    <div className="header">
      <div ref={(ref) => blindRef = ref}  className="blind"></div>
      <div ref={ref => navRightMenu = ref} className="nav-right-menu">
        <ul>
          {arrNav.map((item, index) => 
            <li>
              <Link href={arrSubNavURL[index][0]} ><a>{item}</a></Link>
            </li>
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
            Menu            
          </div>

          <div className="nav-logo">
            <Link href="/"><a><img src="/imgs/logo.png" alt=""></img></a></Link>
          </div>
          <div className="nav-list"
            onMouseOver={onHandleMouseOver} onMouseOut={onHandleMouseOut}>
            <ul>
              {arrNav.map((item, index) => 
                <li key={index}>{item}</li> 
              )}
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
                      <li key={index}>{item}</li>
                    )}
                  </ul>
                </div>
                <div>
                  <ul>
                    {arrSubNav[2].map((item, index) => 
                      <li key={index}>{item}</li>
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
