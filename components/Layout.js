import Header from "./Header"
import Footer from "./Footer"

import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5cc042af4f09efa6615f95459ec74df5"></script>
      </Head>
      <Header navIndex={props.navIndex}/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout;
