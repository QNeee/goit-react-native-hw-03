import {
    StyleSheet, Text, ImageBackground,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView,
    Platform
} from "react-native";
import React, { useState } from "react";
interface Props {
    changeScrenn: (screen: number) => void;
}
const LoginScreen = ({ changeScrenn }: Props) => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [button, setButton] = useState(false);
    const [show, SetShow] = useState(false);
    const handleMail = (text: string) => setMail(text.toString());
    const handlePassword = (text: string) => setPassword(text.toString());

    const login = () => {
        if (!mail || !password) { alert("Enter all data pleace!!!"); return }
        console.log(`Email: ${mail}, Password: ${password}`)
    }
    const onFocusInput = () => {
        setButton(true)
    }
    const onBlurInput = () => {
        setButton(false);
    }
    const passwShow = () => SetShow(!show);

    return (

        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerKeyB} >
            <View style={styles.container}>

                <Text style={styles.title}>Войти</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputMailPassw} placeholder="Email address" inputMode="email" value={mail} onChangeText={handleMail} onFocus={onFocusInput} onBlur={onBlurInput} />
                    <TextInput style={styles.inputMailPassw} placeholder="Password" secureTextEntry={!show ? true : false} value={password} onChangeText={handlePassword} onFocus={onFocusInput} onBlur={onBlurInput} />
                </View>
                <TouchableOpacity style={styles.passwShow} activeOpacity={0.5} onPress={passwShow}>
                    <Text style={styles.passwShowText}>{!show ? 'Показать' : "Скрыть"}</Text>
                </TouchableOpacity>
                {!button && <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.registerButton} activeOpacity={0.5} onPress={login}>
                        <Text style={styles.registerButtonText}>Войти</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => changeScrenn(1)} >
                        <Text style={styles.loginLinkText}>Нет аккаунта? Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        maxHeight: 489
    },
    inputContainer: {
        marginTop: 33
    },
    containerKeyB: {
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    pfotoContainer: {
        marginTop: -60,
        height: 120,
        width: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },

    addbutton: {
        marginTop: '65%',
        left: '90%',
        height: 25,
        width: 25,
        pointerEvents: "auto",
    },
    title: {
        fontWeight: '500',
        fontSize: 30,
        marginTop: 32,
        lineHeight: 35,
    },
    inputLogin: {
        backgroundColor: '#F6F6F6',
        width: 343,
        height: 50,
        borderRadius: 8,
        marginTop: 33,
        padding: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },
    btnContainer: {
        marginBottom: 144
    },
    inputMailPassw: {
        backgroundColor: '#F6F6F6',
        width: 343,
        height: 50,
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        position: 'relative',
    },
    passwShowText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },
    passwShow: {
        top: -34,
        left: 130,
    },
    registerButton: {
        backgroundColor: '#FF6C00',
        height: 50,
        width: 343,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 44,
    },
    registerButtonText: {
        color: '#fff',
        fontWeight: '400',
    },
    loginLink: {
        marginTop: 16,
        marginBottom: 66
    },
    loginLinkText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
});

export default LoginScreen;