import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import useRegistrationForm from './useRegisterForm';

function RegisterForm() {

    const { dispatch, state } = useContext(ThemeContext)!;
    const initialValues = { email: '', password: '', passwordVerification: '' };
    const [formValues, formErrors, { handleInputChange, handleSubmit }] = useRegistrationForm(initialValues);

    return (
        <View style={state.formContainer}>
            <Text style={state.label}>Email</Text>
            <TextInput
                value={formValues.email}
                onChange={(e) => handleInputChange(e, 'email')}
                placeholder="Email"
                style={state.input}
            />
            {formErrors.email && <Text style={state.errorMessage}>{formErrors.email}</Text>}

            <View style={{ width: "100%", alignItems: "center", marginTop: "10%" }}>
                <Text style={state.label}>Password</Text>
                <TextInput
                    value={formValues.password}
                    onChange={(e) => handleInputChange(e, 'password')}
                    placeholder="Password"
                    secureTextEntry
                    style={state.input}
                />
                {formErrors.password && <Text style={state.errorMessage}>{formErrors.password}</Text>}
            </View>

            <View style={{ width: "100%", alignItems: "center", marginTop: "10%" }}>
                <Text style={state.label}>Repeat Password</Text>
                <TextInput
                    value={formValues.passwordVerification}
                    onChange={(e) => handleInputChange(e, 'passwordVerification')}
                    placeholder="Repeat Password"
                    secureTextEntry
                    style={state.input}
                />
                {formErrors.passwordVerification && <Text style={state.errorMessage}>{formErrors.passwordVerification}</Text>}

                <TouchableOpacity
                    style={state.loginButton}
                    onPress={handleSubmit}
                >
                    <Text style={state.loginButtonText}>Register</Text>
                </TouchableOpacity>
                {formErrors.usedEmail && <Text style={state.errorMessage}>{formErrors.usedEmail}</Text>}
            </View>

        </View>
    );
}

export default RegisterForm;