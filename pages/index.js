import Layout from '../components/Layout'

const Home = (props) => {
  return (
    <Layout>
      <div className="main">
        <div className="banner">
          <inner>
            <div className="banner-text"> </div>
          </inner>
        </div>

        <section className="section1">
          <div className="inner">
            <div className="section1-title">
              <h2>제품소개</h2>
            </div>
            <div className="section1-main">
              <div>
                <div>
                  <h2>금도금</h2>
                  <p>Gold Plating</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>합금도금</h2>
                  <p>Alloy Platin</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>무전해니켈도금</h2>
                  <p>Electroless Nickel Plating</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>환경친화제품</h2>
                  <p>Environment-Friendly Products</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>아연합금도금액</h2>
                  <p>Zn and Zn Alloy Plating</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>3가 크로메이트</h2>
                  <p>Trivalent Chromate</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>후처리제</h2>
                  <p>After treatment</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>기타</h2>
                  <p>The Others</p>
                </div>
              </div>
            </div>

            <div className="section1-btn">
              <a>More</a>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="inner">
            <div className="section1-title">
              <h2>Research-develop</h2>
            </div>
            <div className="section2-main">
              <div className="con1">
              </div>
              <div className="con2">
              </div>


            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home;

