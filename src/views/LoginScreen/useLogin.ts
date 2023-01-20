import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

interface FormValues {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
    incorrectData?: string;
}

interface FormHandlers {
    handleInputChange: (event: NativeSyntheticEvent<TextInputChangeEventData>, type: "email" | "password") => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function useLoginForm(initialValues: FormValues): [FormValues, FormErrors, FormHandlers] {
    
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

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>, type: "email" | "password") => {
        setFormValues({ ...formValues, [type]: event.nativeEvent.text });
    }

    const handleSubmit = () => {
        if (validateForm()) {
            auth()
                .signInWithEmailAndPassword(formValues.email, formValues.password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        setFormErrors({ incorrectData: 'The email or password you entered are incorrect!' });
                    }
                });
        }
    }

    return [formValues, formErrors, { handleInputChange, handleSubmit }];
}

export default useLoginForm;
