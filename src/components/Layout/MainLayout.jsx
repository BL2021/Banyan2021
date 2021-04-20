import React from "react"
import HeaderNav from "../HeaderNav"
import SEO from "../SEO"

const pageContainer = {
  marginTop: "70px",
}

export default function MainLayout(props) {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <>
      <HeaderNav />
      <SEO title={url} />
      <div style={pageContainer}>{props.children}</div>
    </>
  )
}
