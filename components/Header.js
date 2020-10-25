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
              <li>
                <a>회사소개</a>
              </li>
              <li>
                <a>제품소개</a>
              </li>
              <li>
                <a>연구개발</a>
              </li>
              <li>
                <a>갤러리</a>
              </li>
              <li>
                <a>제품문의</a>
              </li>
            </ul>
            <div ref={navDownWrapRef} className="nav-down-wrap">
              <div className="inner nav-down-wrap-inner">
                <div>
                  <ul>
                    <li>
                      <Link href="/ceogreeting"><a>CEO 인사말</a></Link>
                    </li>
                    <li>연혁</li>
                    <li>비전</li>
                    <li>복리후생</li>
                    <li>조직도</li>
                    <li>오시는길</li>
                  </ul>
                </div>

                <div>
                  <ul>
                    <li>Products</li>
                    <li>금도금</li>
                    <li>합금도금</li>
                    <li>무전해니켈도금</li>
                    <li>환경친화제품</li>
                    <li>아연 및 아연합금도금액 / 3가 크로메이트 LDS PROCESS</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>부설연구소</li>
                    <li>연구현황</li>
                    <li>보유기기</li>
                    <li>인증서</li>
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
