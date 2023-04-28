import { Outlet } from "react-router-dom"
import "../assets/Layout.css"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <div className="layout-page">
      <Header />
      <Outlet />
      <div className="footer-layout">
        <Footer />
      </div>
    </div>
  )
}

export default Layout