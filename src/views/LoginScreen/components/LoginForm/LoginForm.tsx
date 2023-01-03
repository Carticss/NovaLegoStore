import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext';
import useLoginForm from '../../useLogin';

export default function LoginForm() {

    const initialValues = { email: '', password: '' };
    const [formValues, formErrors, { handleInputChange, handleSubmit }] = useLoginForm(initialValues);
    const { dispatch, state } = useContext(ThemeContext)!;

    return (
        <View style={state.formContainer}>
            <View style={{ width: "100%", alignItems: "center", marginTop: "10%" }}>
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

                    <TouchableOpacity 
                        style={state.loginButton}
                        onPress={handleSubmit}
                        >
                        <Text style={state.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    {formErrors.incorrectData && <Text style={state.errorMessage}>{formErrors.incorrectData}</Text>}
                </View>
            </View>
        </View>
    );
}

