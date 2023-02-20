import { Outlet } from "react-router-dom";
import NavBottom from "../../components/NavBottom/NavBottom";
import NavTop from "../../components/NavTop/NavTop";
import { LayoutStyled } from "./layout.style";


export default function Layout(){
    return (
        <LayoutStyled>
            <NavTop />
            <main>
                <Outlet />
            </main>
            <NavBottom />
        </LayoutStyled>
    )
}