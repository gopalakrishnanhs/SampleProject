import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Util} from '../common/utils';
import styles from '../common/styles';

const emailError='Enter Valid Email';

const Login = ({onSignup}) => {

    const [localState, setState] = useState({
        email: '',
        password: '',
    });

    const renderErrorText = (errMsg) => {
        return (
            <Text style={styles.errMsg}>{errMsg}</Text>
        )
    }

    const onTextChange = (val, name) => {
        setState((prevState) => ({...prevState, [name]: val}));
    };

    const renderInput = (title, placeholder, keyboardType, textValue) => {
        let valueKey = title.toLowerCase();
        return (
            <>
                <Text style={styles.textStyle}>{title}</Text>
                <TextInput
                    style={styles.input}
                    value={textValue}
                    placeholder={placeholder}
                    placeholderTextColor='grey'
                    keyboardType={keyboardType || 'default'}
                    maxLength={50}
                    secureTextEntry={title === 'Password'}
                    onChangeText={(val) => onTextChange(val, valueKey)}
                />
                {(valueKey === 'email' && !Util.isEmailValid(localState[valueKey])) && renderErrorText(emailError)}
            </>
        )
    }

    const renderButton = (buttonName) => {
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={styles.btnTxt}>{buttonName}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.bgView}>
        <View style={styles.header}>
            <Text style={styles.headerText}>WELCOME !!</Text>
        </View>
        <View style={styles.inputContainer}> 
            {renderInput('Email', 'Please enter email' , 'email-address', localState.email)}
            {renderInput('Password', 'Please enter password', 'default', localState.password)}
            {renderButton('LOGIN')}
            <TouchableOpacity onPress={() => onSignup()} >
                <Text style={[styles.headerText, {marginTop: 20}]}>
                    Don't have an account yet ? SignUp Now!!
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Login;
