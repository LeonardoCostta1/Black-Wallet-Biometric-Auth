import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import master from "../assets/img/master.png";

import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.userContainer}>
          <View style={styles.userphoto}>
            <AntDesign name="adduser" size={24} color="black" />
          </View>
          <View>
            <Text style={styles.username}>Leonardo</Text>
            <Text style={styles.updated}>updated now</Text>
          </View>
        </View>

        <View style={{ height: 200 }}>
          <ScrollView horizontal style={styles.cardContainer}>
            <LinearGradient colors={["#F4AE64", "#0D0D0D",{ x: 0.1, y: 0.2 }]}  style={styles.card}>
              <View style={styles.topCard}>
                <View style={styles.balanceContainer}>
                  <Text style={styles.infoText}>balance</Text>
                  <Text style={styles.balance}>30.000.00</Text>
                </View>
                <Image source={master} />
              </View>

              <View style={styles.bottomCard}>
                <View style={styles.balanceContainer}>
                  <Text style={styles.nameCard}>Leonardo c santos</Text>
                  <Text style={styles.infoText}>0000 0000 0000 0000</Text>
                </View>
                <Text style={styles.date}>05/28</Text>
              </View>
            </LinearGradient>
            <View
              style={[
                styles.card,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <MaterialCommunityIcons
                name="card-plus-outline"
                size={24}
                color="white"
              />
              <Text
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  marginTop: 10,
                  fontSize: 10,
                }}
              >
                Add Card
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={{ height: 75, marginTop: 20 }}>
          <View style={styles.contactContainer}>
            <View style={styles.contacts}></View>
            <View style={styles.contacts}></View>
            <View style={styles.contacts}></View>
            <View style={styles.contacts}></View>
            <View style={styles.contacts}></View>
            <View
              style={[
                styles.contacts,
                {
                  backgroundColor: "#222",
                },
              ]}
            >
              <Entypo name="plus" size={18} color="white" />
            </View>
          </View>
        </View>

        <ScrollView style={styles.lastTransitionsContainer}>
          <Text style={styles.titleCategory}>ULTIMAS TRANSAÇÕES</Text>

          <View style={styles.containerProdcuct}>
            <View style={styles.leftAreaProduct}>
              <View style={styles.productIcon}>
                <FontAwesome5 name="spotify" size={18} color="white" />
              </View>
              <View>
                <Text style={styles.updated}>payment</Text>
                <Text style={styles.product}>spotify</Text>
              </View>
            </View>
            <Text style={styles.price}>R$ 16.90</Text>
          </View>

          <View style={styles.containerProdcuct}>
            <View style={styles.leftAreaProduct}>
              <View style={styles.productIcon}>
                <FontAwesome5 name="google-drive" size={18} color="white" />
              </View>
              <View>
                <Text style={styles.updated}>payment</Text>
                <Text style={styles.product}>Google Drive</Text>
              </View>
            </View>
            <Text style={styles.price}>R$ 16.90</Text>
          </View>

          <View style={styles.containerProdcuct}>
            <View style={styles.leftAreaProduct}>
              <View style={styles.productIcon}>
                <Fontisto name="netflix" size={18} color="white" />
              </View>
              <View>
                <Text style={styles.updated}>payment</Text>
                <Text style={styles.product}>Netflix</Text>
              </View>
            </View>
            <Text style={styles.price}>R$ 16.90</Text>
          </View>
        </ScrollView>

        <View
          style={{ paddingHorizontal: 30, marginBottom: 10, marginTop: 10 }}
        >
          <View style={styles.promoContainer}>
            <Text style={styles.titleCategoryPromo}>especial delivery</Text>
            <Text style={styles.promoTitle}>promoção</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.menu}>
        <View style={styles.iconMenuContainer}>
          <Ionicons name="wallet-outline" size={24} color="#fff" />
          <Text style={styles.textMenu}>Wallet</Text>
        </View>

        <View style={styles.iconMenuContainer}>
          <Ionicons name="analytics" size={24} color="#555" />
          <Text style={styles.textMenu}>Wallet</Text>
        </View>

        <View style={styles.iconMenuContainer}>
          <Foundation name="dollar" size={24} color="#555" />
          <Text style={styles.textMenu}>Wallet</Text>
        </View>

        <View style={styles.iconMenuContainer}>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="#555"
          />
          <Text style={styles.textMenu}>Wallet</Text>
        </View>

        <View style={styles.iconMenuContainer}>
          <SimpleLineIcons name="grid" size={24} color="#555" />
          <Text style={styles.textMenu}>Wallet</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  userContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  userphoto: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#F4AE64",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  updated: {
    fontSize: 8,
    color: "#fff",
    textTransform: "uppercase",
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 30,
    height: 200,
  },
  card: {
    height: 200,
    width: 280,
    backgroundColor: "#333",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: "space-between",
  },
  topCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoText: {
    fontSize: 10,
    textTransform: "uppercase",
    color: "#fff",
  },
  balance: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  bottomCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameCard: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  date: {
    color: "#fff",
    fontWeight: "bold",
  },
  contactContainer: {
    borderWidth: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contacts: {
    height: 50,
    width: 50,
    backgroundColor: "#F4AE64",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  lastTransitionsContainer: {
    paddingHorizontal: 30,
  },
  containerProdcuct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titleCategory: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 10,
  },
  descriptionProductContainer: {
    flexDirection: "row",
  },
  leftAreaProduct: {
    alignItems: "center",
    flexDirection: "row",
  },
  productIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#333",
    borderRadius: 60,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  product: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },

  price: {
    color: "#fff",
    fontWeight: "bold",
  },

  promoContainer: {
    height: 55,
    width: "100%",
    backgroundColor: "#292929",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#555",
  },
  titleCategoryPromo: {
    color: "#fff",
    fontSize: 10,
    textTransform: "uppercase",
  },
  promoTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
  },
  menu: {
    height: 60,
    width: "90%",
    backgroundColor: "#292929",
    position: "absolute",
    bottom: 2,
    left: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconMenuContainer: {
    width: "20%",
    height: 50,
    // borderWidth:1,
    // borderColor:'#ff0029',
    alignItems: "center",
    justifyContent: "center",
  },
  textMenu: {
    color: "#fff",
    fontSize: 8,
    textTransform: "uppercase",
  },
});
