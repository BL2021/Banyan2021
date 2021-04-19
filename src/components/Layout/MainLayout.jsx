import React from "react"
import HeaderNav from "../HeaderNav"
import SEO from '../SEO'

const pageContainer = {
  "marginTop": "70px",
}

export default function MainLayout(props) {
  return (
    <>
      <HeaderNav />
      <SEO title={props.location.pathname}/>
      <div style={pageContainer}>{props.children}</div>
    </>
  )
}
