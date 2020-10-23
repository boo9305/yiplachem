import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap" rel="stylesheet"/>  
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;
