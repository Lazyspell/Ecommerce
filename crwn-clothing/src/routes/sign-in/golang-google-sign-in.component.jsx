import React, { Fragment } from "react";
import { GoogleLogin } from "react-google-login";
import { loginGoogleTest } from "../../remote/google-users";

const clientId = process.env.GOOGLE_CLIENT;

function GLogin() {
    const onSuccess = async (res) => {
        const googleTest = await loginGoogleTest();
        console(googleTest);
    };
    const onFailure = (res) => {
        console.log("test");
    };

    return (
        <Fragment>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
            />
        </Fragment>
    );
}

export default GLogin;
