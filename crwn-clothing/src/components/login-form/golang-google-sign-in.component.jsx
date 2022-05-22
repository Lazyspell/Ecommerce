import React, { Fragment } from "react";
import { loginGoogleUser } from "../../remote/google-users";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

function GLogin() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const jsonEmail = JSON.stringify({
            email: response.user.email,
            name: response.user.displayName,
        });
        console.log(jsonEmail);
        await loginGoogleUser(jsonEmail);
        // response.addCookie(response.user.accessToken)
    };

    return (
        <Fragment>
            <Button buttonType="google" onClick={logGoogleUser}>
                Google
            </Button>
        </Fragment>
    );
}

export default GLogin;
