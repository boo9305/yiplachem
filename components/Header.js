import Link from 'next/link'

import {useRef} from  'react'

const Header = () => {
  const navDownWrapRef = useRef(null);
  const blindRef = useRef(null);
  const onHandleMouseOver = () => {
    navDownWrapRef.current.style.height = '400px' 
    navDownWrapRef.current.style.visibility = 'visible' 
    blindRef.current.style.backgroundColor = 'rgba(0,0,0,0.5)'
  }

  const onHandleMouseOut= () => {
    navDownWrapRef.current.style.height = '0px' 
    navDownWrapRef.current.style.visibility = 'hidden' 
    blindRef.current.style.backgroundColor = 'rgba(0,0,0,0)'
  }

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

  return(
    <div className="header">
      <div ref={blindRef}  className="blind"></div>
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
          <div className="nav-logo">
            <Link href="/"><a><img src="/imgs/logo.png" alt=""></img></a></Link>
          </div>
          <div className="nav-list"
            onMouseOver={onHandleMouseOver} onMouseOut={onHandleMouseOut}>
            <ul>
              {arrNav.map((item, index) => 
                <li><Link href={arrSubNavURL[index][0]} ><a>{item}</a></Link></li> 
              )}
            </ul>
            <div ref={navDownWrapRef} className="nav-down-wrap">
              <div className="inner nav-down-wrap-inner">
                <div>
                  <ul>
                    {arrSubNav[0].map((item, index) => 
                      <li>
                        <Link href={arrSubNavURL[0][index]} ><a>{item}</a></Link>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <ul>
                    {arrSubNav[1].map((item) => 
                      <li>{item}</li>
                    )}
                  </ul>
                </div>
                <div>
                  <ul>
                    {arrSubNav[2].map((item) => 
                      <li>{item}</li>
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
