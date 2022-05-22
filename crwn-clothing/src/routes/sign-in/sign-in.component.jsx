import { Fragment } from "react";
import SignInForm from "../../components/login-form/login-form.component";
import GLogin from "../../components/login-form/golang-google-sign-in.component";

function SignIn() {
    return (
        <Fragment>
            <h1>Sign In Page</h1>
            <h2>Google Sign In</h2>
            <GLogin />
            <SignInForm />
        </Fragment>
    );
}

export default SignIn;
