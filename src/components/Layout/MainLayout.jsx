import React from "react"
import HeaderNav from "../HeaderNav"
import SEO from '../seo'

const pageContainer = {
  "marginTop": "70px",
}

export default function MainLayout(props) {
  console.log(window.location.pathname)
  return (
    <>
      <HeaderNav />
      <SEO title={window.location.pathname}/>
      <div style={pageContainer}>{props.children}</div>
    </>
  )
}
