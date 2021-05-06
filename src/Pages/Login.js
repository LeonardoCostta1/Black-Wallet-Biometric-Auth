import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from "react-native";
import logo from "../assets/img/logo.png";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'


import * as LocalAuthentication from "expo-local-authentication";


export default function Login() {
const navigation = useNavigation()

  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  // Verifique se o hardware suporta biometria
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log("fall back to password authentication");
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    // Verifique se o hardware suporta biometria
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback para o método de autenticação padrão (senha) se a impressão digital não estiver disponível
    if (!isBiometricAvailable)
      return alertComponent(
        "Please enter your password",
        "Biometric Authentication not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );
    // Verifique os tipos de biometria disponíveis (impressão digital, reconhecimento facial, reconhecimento de íris)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    // Verifique se os dados biométricos são salvos localmente no dispositivo do usuário
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Biometric record not found",
        "Please login with your password",
        "OK",
        () => fallBackToDefaultAuth()
      );
    // Autentica o uso com biometria (impressão digital, reconhecimento facial, reconhecimento de íris)
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });
    // Faça o login do usuário em caso de sucesso
    if (biometricAuth){
      navigation.navigate('home')
      console.log("success")
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={logo} resizeMode="contain" />

      <View style={styles.textContainer}>
        <Text style={styles.welcome}>GOOD AFTERNOON,</Text>
        <Text style={styles.text}>LEONARDO</Text>
      </View>
      {isBiometricSupported ? (
        <TouchableOpacity style={styles.finger} onPress={handleBiometricAuth}>
          <Ionicons name="finger-print" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <Text>Face or Fingerprint scanner is available on this device</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 150,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 40,
  },
  welcome: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 40,
  },
  finger: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "#F4AE64",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
