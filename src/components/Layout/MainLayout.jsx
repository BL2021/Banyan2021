import React from "react"
import HeaderNav from "../HeaderNav"
import SEO from "../SEO"

const pageContainer = {
  marginTop: "70px",
}

export default function MainLayout(props) {
  return (
    <>
      <HeaderNav />
      {/* todo pass in a title like /About */}
      <SEO title="" />
      <div style={pageContainer}>{props.children}</div>
    </>
  )
}
