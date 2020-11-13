import React, {useState, useRef, useEffect} from 'react'
import Layout from '../components/Layout'

const Home = (props) => {
  const arrSubNavURL = [
    ["/intro/ceogreeting", "/intro/history", "/intro/vision", "/intro/benefit", "/intro/organization" , "/intro/map"],
    ["/product/products", "/product/gold",  "/product/alloy", "/product/nickel", "/product/eco", "/product/znic", "/product/lds"],
    ["/develop/lab", "/develop/status", "develop/device", "/develop/certification"],
    [""],
    [""]
  ]
  

  useEffect(() => {
  }, []) 

  return (
    <Layout>
      <div className="main">
        <div className="banner">
          <div className="inner">
            <div className="banner-txt">
              <h1>고객의 성공을 위해 최선을 다하는것이</h1>
              <h2>(주)영인플라켐의</h2>
              <h2> 최고의 가치입니다.</h2>
            </div>
            
          </div>
        </div>

        <section className="section0">
          <div className="section-inner">
            <ul className="section0-list">
              <li>
                <div>
                  <h1>제품 소개</h1>
                  <p>영인플라켐은 "금도금", "합금도금", "무전해니켈도금", "환경친화제품", "아연합금도금액", "3가크로메이트", "후처리제" 제품을 보유하고 있습니다.</p>
                  <img src="/imgs/section0-item1.png" alt=""></img>
                  <div>
                    <a href="/product/products">더보기</a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <h1>연구 개발</h1>
                  <p>영인플라켐의 부설 연구소, 연구현황,<br/>보유기기, 인증서를 소개합니다</p>
                  <img src="/imgs/section0-item2.png" alt=""></img>
                  <div>
                    <a href="/develop/lab">더보기</a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <h1>제품 문의</h1>
                  <p>영인플라켐은 고객 이익증진 뿐만아니라<br/>고객제품 품질 향상을 위해 최선을 다합니다.</p>
                  <img src="/imgs/section0-item3.png" alt=""></img>
                  <div>
                    <a href="/support">더보기</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default Home;

