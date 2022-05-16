import { Fragment } from "react";
import { loginGoogleUser } from "../../remote/google-users";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        let jsonEmail = JSON.stringify({ email: response.user.email });
        console.log(jsonEmail);
        const golangResponse = await loginGoogleUser(jsonEmail);
        // response.addCookie(response.user.accessToken)
    };
    return (
        <Fragment>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </Fragment>
    );
}

export default SignIn;
