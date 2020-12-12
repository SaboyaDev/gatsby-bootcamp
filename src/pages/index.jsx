import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Jose Saboya, a Full-Stack developer living in beautiful New Jersey.</h2>
      <p>Need a developer? <Link to='/contact'>Contact me</Link></p>
    </div>
  )
}

export default IndexPage;