import React from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/img/logo.png";
import card from "../assets/img/cardimg.png";
import { useNavigation} from "@react-navigation/native";
export default function Home() {

  const navigation = useNavigation()
  const handleSkip = () =>{
  
    navigation.navigate('wallet')
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Image source={card} style={styles.card} resizeMode="contain" />
      <View style={styles.textDefaulContainer}>
        <View style={styles.detail}/>
        <Text style={styles.text}>
          make payment much easier by using all your cards in one place
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonDefault}>
          <Text style={styles.textButton}>+ Add card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecundary} onPress={handleSkip}>
          <Text style={styles.textButton}>skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: 150,
  },
  textDefaulContainer: {
    flexDirection: "column",
    marginBottom:50
  },
  detail: {
    height: 5,
    width: 50,
    backgroundColor: "#fff",
    marginBottom:20
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  card: {
    height: Dimensions.get("window").width * 0.7,
    marginBottom:30
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonDefault: {
    backgroundColor: "#F4AE64",
    height: 60,
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonSecundary: {
    height: 60,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#999",
    borderWidth: 1,
  },
  textButton: {
    color: "#fff",
  },
});
