import React, {useState, useRef, useEffect} from 'react'
import SubLayout from '../components/SubLayout' 

import sty from '../styles/support.module.css'

export default (props) => {
  return (
    <SubLayout location="Intro > CEO" navIndex="4" subNavIndex="0" lang="eng">
      <div className="sub-inner">
        <ul className={sty.supportList}>
          <li>
            <div>
              <h1><span>01</span> Requesting Products</h1>
              <p>Product</p>
            </div>
          </li>
          <li>
            <div>
              <h1><span>02</span> Requesting Technology</h1>
              <p>Technology</p>
            </div>
          </li>
          <li>
            <div>
              <h1><span>03</span> Requesting Puchase</h1>
              <p>Purchase</p>
            </div>
          </li>
        </ul>
        <ul className={sty.contactList}>
          <li>
            <div>
              <img src="/svgs/phone-call.svg" alt=""></img>
              <div>
                <h1>Sales Dept . Soonkwang Kwon</h1>
                <p>TEL. 031-491-9406</p>
                <p>Email. sunright99@hanmail.net</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img src="/svgs/phone-call.svg" alt=""></img>
              <div>
                <h1>Development Dept . Jaeyoung Yang </h1>
                <p>TEL. 031-491-9406</p>
                <p>Email. yangyang1004@hanmail.net</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </SubLayout>
  )
}
