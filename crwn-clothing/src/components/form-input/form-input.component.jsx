import "./form-input.styles.jsx";
import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel
                    className={`${
                        otherProps.value.length ? "shrink" : null
                    } form-input-label`}
                >
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
