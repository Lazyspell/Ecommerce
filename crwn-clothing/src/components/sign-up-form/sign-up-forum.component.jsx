import { useState } from "react";
import { loginUser, newUser } from "../../remote/user";
import FormInput from "../form-input/form-input.component";

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
                await loginUser(email, password);
                resetFormFields();
                return;
            }
        } catch (e) {
            return e;
        }
    };
    return (
        <div>
            <h2>Sign Up</h2>
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
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
