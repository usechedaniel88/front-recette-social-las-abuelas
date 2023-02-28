import { Outlet } from "react-router-dom";
import NavBottom from "../../components/NavBottom/NavBottom";
import NavTop from "../../components/NavTop/NavTop";
import { LayoutStyled } from "./layout.style";

type Props = {loggedInUser: string}

export default function Layout(props: Props){
    const {loggedInUser} = props;
    return (
        <LayoutStyled>
            <NavTop loggedInUser={loggedInUser}/>
            <main>
                <Outlet />
            </main>
            <NavBottom />
        </LayoutStyled>
    )
}