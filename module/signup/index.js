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
const passwordError = 'Password must have at least 12 characters, one uppercase letter and one special character';

const Signup = ({onLogin}) => {

    const [localState, setState] = useState({
        email: '',
        password: '',
        name: '',
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
                    maxLength={50}
                    keyboardType={keyboardType || 'default'}
                    secureTextEntry={title === 'Password'}
                    onChangeText={(val) => onTextChange(val, valueKey)}
                />
                {(valueKey === 'email' && !Util.isEmailValid(localState[valueKey])) && renderErrorText(emailError)} 
                {(valueKey === 'password' &&  !Util.isPasswordValid(localState[valueKey])) && renderErrorText(passwordError)} 
            </>
        )
    }

    const renderButton = (buttonName) => {
        return (
            <TouchableOpacity onPress={() => console.log('NAME', localState.name)} activeOpacity={0.8} style={styles.button}>
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
            {renderInput('Name', 'Please enter name' , 'default', localState.name)}
            {renderInput('Email', 'Please enter email' , 'email-address', localState.email)}
            {renderInput('Password', 'Please enter password', 'default', localState.password)}
            {renderButton('LOGIN')}
            <TouchableOpacity onPress={() => onLogin()} >
                <Text style={[styles.headerText, {marginTop: 20}]}>
                    Already have an account ? Login!!
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Signup;
