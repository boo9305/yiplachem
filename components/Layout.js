
import Header from "./Header"
import Footer from "./Footer"

import Head from 'next/head'

import { _arrNav, _arrSubNav, _arrSubNavURL } from './Nav'
import { _arrNavEng, _arrSubNavEng, _arrSubNavURLEng } from './Nav'

const Layout = (props) => {
  const arrNav = props.lang == "eng" ? _arrNavEng : _arrNav
  const arrSubNav = props.lang == "eng" ? _arrSubNavEng : _arrSubNav
  const arrSubNavURL = props.lang == "eng" ? _arrSubNavURLEng : _arrSubNavURL;

  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d981319aab651ca712d07652f155f1d2"></script>
      </Head>
      <Header navIndex={props.navIndex} arrNav={arrNav} arrSubNav={arrSubNav} arrSubNavURL={arrSubNavURL} lang={props.lang}/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout;
