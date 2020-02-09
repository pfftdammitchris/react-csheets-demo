import React from 'react'
import './layout.css'

function Layout({ children }) {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>© react-csheets</footer>
      </div>
    </>
  )
}

export default Layout
