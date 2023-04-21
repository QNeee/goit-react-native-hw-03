import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from "react";
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
export default function App() {

  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreenFunc = (value: number) => { setActiveScreen(value) }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.maincontainer}>
        <ImageBackground source={require('./images/bebr.jpg')} style={styles.backImg} >
          {activeScreen === 0 ? <LoginScreen changeScrenn={changeScreenFunc} /> :
            <RegistrationScreen changeScrenn={changeScreenFunc} />}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>);
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
  },
  backImg: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%'
  },
});