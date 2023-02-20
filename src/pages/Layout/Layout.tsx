import { Outlet } from "react-router-dom";
import NavBottom from "../../components/NavBottom/NavBottom";
import NavTop from "../../components/NavTop/NavTop";


export default function Layout(){
    return (
        <>
            <NavTop />
            <main>
                <Outlet />
            </main>
            <NavBottom />
        </>
    )
}