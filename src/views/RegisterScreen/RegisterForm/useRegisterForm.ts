import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

interface FormValues {
    email: string;
    password: string;
    passwordVerification: string;
}

interface FormErrors {
    email?: string;
    password?: string;
    passwordVerification?: string;
    usedEmail?: string;
}

interface FormHandlers {
    handleInputChange: (event: NativeSyntheticEvent<TextInputChangeEventData>, type: "email" | "password" | "passwordVerification") => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function useRegistrationForm(initialValues: FormValues): [FormValues, FormErrors, FormHandlers] {
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const validateForm = () => {
        let errors: FormErrors = {};

        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formValues.password) {
            errors.password = 'Password is required';
        }

        if (formValues.password !== formValues.passwordVerification) {
            errors.passwordVerification = 'Passwords do not match';
        }

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>, type: "email" | "password" | "passwordVerification") => {
        setFormValues({ ...formValues, [type]: event.nativeEvent.text });
    }

    const handleSubmit = () => {
        if (validateForm()) {
            auth()
                .createUserWithEmailAndPassword(formValues.email, formValues.password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        setFormErrors({ usedEmail: 'That email address is already in use!' });
                    }

                    console.error(error);
                });
        }
    }

    return [formValues, formErrors, { handleInputChange, handleSubmit }];
}

export default useRegistrationForm;