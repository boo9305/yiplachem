import React, {useState, useRef, useEffect} from 'react'
import SubLayout from '../../components/SubLayout' 

import sty from '../../styles/support.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="1" subNavIndex="3" lang="eng">
      <div className="sub-inner">
 
        <ul className={sty.contactList}>
          <li>
            <div>
              <img src="/svgs/phone-call.svg" alt=""></img>
              <div>
                <h1>담당자. 최원갑 이사</h1>
                <p>TEL. 02223. 952. 181</p>
                <p>Email. ryonginvina199@gmail.com</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src="/svgs/phone-call.svg" alt=""></img>
              <div>
                <h1>담당자 권순광 부장</h1>
                <p>TEL. 0222.3952.181</p>
                <p>Email. ryounginvina.kwon@gmail.com</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </SubLayout>
  )
}
