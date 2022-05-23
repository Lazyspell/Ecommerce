import { Fragment } from "react";
import SignInForm from "../../components/login-form/login-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-forum.component";
import "./authentication.styles.scss";

function Authentication() {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;
