import Layout from './Layout'

export default (props) => {
  return (
    <Layout>
      <div className="sub-banner">
        <div className="inner">
          <div className="sub-banner-txt"></div>
        </div>
      </div>
      <div className="sub-location">
        <div className="inner">
          <div className="sub-location-txt">
            <p>Home > {props.location}</p> 
          </div>
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </Layout>
  )


}
