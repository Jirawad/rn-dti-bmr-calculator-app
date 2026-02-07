import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const carlogo = require("../assets/images/Bmi2.jpg");

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/input");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <View style={styles.outerCircle}>
          <Image source={carlogo} style={styles.carlogo} resizeMode="cover" />
        </View>
      </View>

      <Text style={styles.appnameen}>BMR Calculatore</Text>

      <ActivityIndicator
        size="large"
        color="#fbcfe8"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffb6c1",
  },
  logoWrapper: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 150,
    marginBottom: 40,
  },
  outerCircle: {
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 130,
  },
  carlogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#ffffff",
  },
  appnameen: {
    fontFamily: "Kanit_700Bold",
    color: "#ff1493",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
});
