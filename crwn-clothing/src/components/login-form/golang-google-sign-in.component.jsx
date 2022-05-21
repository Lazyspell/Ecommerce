import React, { Fragment } from "react";
import { loginGoogleUser } from "../../remote/google-users";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

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
            <h2>Sign In with Google</h2>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </Fragment>
    );
}

export default GLogin;
