import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { logOutUser } from "../../remote/user";
import {
    LogoContainer,
    NavigationContainer,
    NavLink,
    NavLinkContainer,
} from "./navigation.styles";

function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    const signOutHandler = async () => {
        await logOutUser();
        setCurrentUser(null);
    };
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>
                            Sign Out
                        </span>
                    ) : (
                        <NavLink to="/sign-in">Sign In</NavLink>
                    )}
                    <CartIcon />
                </NavLinkContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
