import Header from "./Header"
import Footer from "./Footer"

import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d981319aab651ca712d07652f155f1d2"></script>
      </Head>
      <Header navIndex={props.navIndex}/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout;
