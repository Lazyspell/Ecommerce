import React, { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { loginGoogleUser } from "../../remote/google-users";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const GLogin = () => {
    const { setCurrentUser } = useContext(UserContext);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();

        const jsonEmail = JSON.stringify({
            email: response.user.email,
            name: response.user.displayName,
        });

        const googleUser = await loginGoogleUser(jsonEmail);
        console.log(googleUser.data.email);
        setCurrentUser(googleUser.data.email);

        // response.addCookie(response.user.accessToken)
    };

    return (
        <Fragment>
            <Button type="button" buttonType="google" onClick={logGoogleUser}>
                Google
            </Button>
        </Fragment>
    );
};

export default GLogin;
