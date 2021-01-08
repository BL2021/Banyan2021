import React from "react"
import HeaderNav from "./HeaderNav";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <HeaderNav />
      {children}

    
    </div>
  )
}