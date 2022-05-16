import React, { Fragment } from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";

const clientId = process.env.GOOGLE_CLIENT;

function GLogin() {
    const onSuccess = (res) => {
        console.log("[Login Success] currentUser: ", res.profileObj);
    };

    const onFailure = (res) => {
        console.log("[Login Failed] res: ", res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: "offline",
    });
    return (
        <Fragment>
            <button onClick={signIn} className="button">
                <img src="icons/google.svg"></img>
                <span className="buttonText">Sign in with Google</span>
            </button>
        </Fragment>
    );
}

export default GLogin;
