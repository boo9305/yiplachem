import React , { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const About = (props) => {
  useEffect(() => {
  })

  return (
    <Layout>
      <p>This is the about page</p>
      <Link href="/"><a>home</a></Link>

    </Layout>
  )
}

export default About;
