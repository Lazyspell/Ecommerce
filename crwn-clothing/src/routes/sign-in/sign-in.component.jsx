import { Fragment } from "react";
import { useGoogleLogin } from "react-google-login";
import { loginGoogleUser } from "../../remote/google-users";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const clientId = process.env.GOOGLE_CLIENT;

function SignIn() {
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
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </Fragment>
    );
}

export default SignIn;
