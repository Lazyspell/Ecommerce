import { Fragment } from "react";
import SignInForm from "../../components/login-form/login-form.component";
import GLogin from "../../components/login-form/golang-google-sign-in.component";

function SignIn() {
    return (
        <Fragment>
            <h1>Sign In Page</h1>
            <SignInForm />
        </Fragment>
    );
}

export default SignIn;
