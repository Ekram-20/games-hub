import Nav from "@/components/Nav"
import { Outlet } from "react-router-dom"

/*
 * Layout component

 * This component is used to wrap the entire application and provide a consistent nav bar.
**/
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Layout