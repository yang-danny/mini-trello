// import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

// import type { RootState } from "../../redux/ReduxStore"

// import { Footer, Navbar } from "../../features/nav"


const Layout= () => {
    // const state = useSelector((state:RootState)=>state.modal)
  return (
    <div className="layout-page">
        {/* {state.displayLogin && <LoginRegisterModal />} */}
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default Layout