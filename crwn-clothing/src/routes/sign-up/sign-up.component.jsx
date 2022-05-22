import { Fragment } from "react";
import GLogin from "../../components/login-form/golang-google-sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up-forum.component";

function SignUp() {
    return (
        <Fragment>
            <h1>Sign Up Page</h1>
            <GLogin />
            <h2>Google Sign Up</h2>
            <SignUpForm />
        </Fragment>
    );
}

export default SignUp;
