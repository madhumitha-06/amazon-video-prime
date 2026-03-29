import { Outlet } from "react-router-dom"
import Sidemenu from "./Sidemenu"

function Layout(){
    return(
        <>
        <Sidemenu></Sidemenu>
         <Outlet></Outlet>
        </>
        
    )
}
export default Layout