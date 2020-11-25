import Link from 'next/link'

import {useRef} from  'react'

function  Header (props) {
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
          <li> <Link href="/" ><a>KOREAN</a></Link> </li>
          <li> <Link href="/eng" ><a>ENGLISH</a></Link> </li>
          {props.arrNav.map((item, index) => {
            let cls = "nav-right-menu-off"
            if (index == props.navIndex) cls = "nav-right-menu-on"
            return (
              <li key={index} className={cls}>
                <Link href={props.arrSubNavURL[index][0]} ><a>{item}</a></Link>
              </li>
            )
            }
          )}
        </ul>
      </div>
      <div className="lang">
        <div className="inner">
          <ul className="lang-list">
            <li><Link href="/"><a>KOR</a></Link></li>
            <li><Link href="/eng"><a>ENG</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="nav">
        <div className="inner">
          <div className="nav-right-btn" onClick={onRightBtnClick}>
            <img src="/svgs/menu.svg" alt=""></img>
          </div>

          <div className="nav-logo">
            {
              props.lang == "eng" ?
              <Link href="/eng"><a><img src="/imgs/logo.png" alt=""></img></a></Link>
              :
              <Link href="/"><a><img src="/imgs/logo.png" alt=""></img></a></Link>

            } 
          </div>
          <div className="nav-list"
            onMouseOver={onHandleMouseOver} onMouseOut={onHandleMouseOut}>
            <ul>
              {props.arrNav.map((item, index) => {
                let result = <li key={index}>{item}</li> 
                  if (index > 2) {
                    result = <li key={index}><a href={props.arrSubNavURL[index][0]}>{item}</a></li> 
                  }
                return result
              })}
            </ul>
            <div ref={(ref) => navDownWrapRef = ref} className="nav-down-wrap">
              <div className="inner nav-down-wrap-inner">
                <div>
                  <ul>
                    {props.arrSubNav[0].map((item, index) => {
                      if (item == "") return null
                      return (
                        <li key={index}>
                          <Link href={props.arrSubNavURL[0][index]} ><a>{item}</a></Link>
                        </li>) }
                    )}
                  </ul>
                </div>

                <div>
                  <ul>
                    {props.arrSubNav[1].map((item, index) => {
                      if (item == "") return null
                      return (
                        <li key={index}>
                          <Link href={props.arrSubNavURL[1][index]} ><a>{item}</a></Link>
                        </li>
                      ) }
                    )}
                  </ul>
                </div>
                <div>
                  <ul>
                    {props.arrSubNav[2].map((item, index) => {
                      if (item == "") return null
                      return (
                        <li key={index}>
                          <Link href={props.arrSubNavURL[2][index]} ><a>{item}</a></Link>
                        </li>
                      ) }
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
