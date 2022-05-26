import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { loginUser, newUser } from "../../remote/user";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import GLogin from "../login-form/golang-google-sign-in.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { first_name, last_name, email, password, confirm_password } =
        formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleCHange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleNewUser = async (event) => {
        event.preventDefault();
        if (password !== confirm_password) {
            alert("passwords do not match");
            return;
        }
        try {
            let response = await newUser(
                first_name,
                last_name,
                email,
                password
            );
            if (response.status === 201) {
                console.log("new user created");
                const response = await loginUser(email, password);
                setCurrentUser(response.data.email);
                resetFormFields();
                return;
            }
        } catch (e) {
            return e;
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleNewUser}>
                <FormInput
                    label="First Name"
                    type="text"
                    required
                    onChange={handleCHange}
                    name="first_name"
                    value={first_name}
                />
                <FormInput
                    label="Last Name"
                    type="text"
                    required
                    onChange={handleCHange}
                    name="last_name"
                    value={last_name}
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleCHange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleCHange}
                    name="password"
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleCHange}
                    name="confirm_password"
                    value={confirm_password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign Up</Button>
                    <GLogin />
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
