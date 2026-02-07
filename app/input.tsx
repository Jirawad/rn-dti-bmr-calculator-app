import React, { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const headerImg = require("../assets/images/Bmi2.jpg");
const manImg = require("../assets/images/man.png");
const womanImg = require("../assets/images/woman.png");

export default function BMRCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  const calculateBMR = () => {
    if (weight === "" || height === "" || age === "") {
      Alert.alert("คำเตือน", "กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);
    let bmr = 0;

    if (gender === "male") {
      bmr = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      bmr = 665 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    setResult(Math.round(bmr));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f8fafc" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View>
          <Image source={headerImg} style={styles.headerImage} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>BMR Calculator</Text>
            <Text style={styles.headerSubtitle}>
              อัตราการเผาผลาญพลังงานพื้นฐานของร่างกาย
            </Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          {/* เลือกเพศ */}
          <Text style={styles.inputTitle}>เพศ (Gender)</Text>
          <View style={styles.genderRow}>
            <TouchableOpacity
              style={[
                styles.genderCard,
                gender === "male" && styles.genderCardActive,
              ]}
              onPress={() => setGender("male")}
            >
              <Image source={manImg} style={styles.genderIcon} />
              <Text
                style={[
                  styles.genderLabel,
                  gender === "male" && styles.genderLabelActive,
                ]}
              >
                ชาย
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderCard,
                gender === "female" && styles.genderCardActive,
              ]}
              onPress={() => setGender("female")}
            >
              <Image source={womanImg} style={styles.genderIcon} />
              <Text
                style={[
                  styles.genderLabel,
                  gender === "female" && styles.genderLabelActive,
                ]}
              >
                หญิง
              </Text>
            </TouchableOpacity>
          </View>

          {/* กรอกข้อมูล */}
          <View style={styles.rowInputs}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.inputTitle}>น้ำหนัก (kg)</Text>
              <TextInput
                placeholder="เช่น 60"
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
                style={styles.inputValue}
                value={weight}
                onChangeText={setWeight}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputTitle}>ส่วนสูง (cm)</Text>
              <TextInput
                placeholder="เช่น 170"
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
                style={styles.inputValue}
                value={height}
                onChangeText={setHeight}
              />
            </View>
          </View>

          <Text style={styles.inputTitle}>อายุ (ปี)</Text>
          <TextInput
            placeholder="เช่น 25"
            placeholderTextColor="#94a3b8"
            keyboardType="numeric"
            style={styles.inputValue}
            value={age}
            onChangeText={setAge}
          />

          {/* ปุ่มคำนวณ */}
          <TouchableOpacity onPress={calculateBMR} style={styles.btnCal}>
            <Text style={styles.labelCal}>คำนวณหาค่า BMR</Text>
          </TouchableOpacity>

          {/* แสดงผลลัพธ์ */}
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>BMR ของคุณคือ</Text>
            <Text style={styles.resultValue}>{result}</Text>
            <Text style={styles.resultUnit}>แคลอรี่ / วัน</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 220,
    opacity: 0.8,
  },
  headerTextContainer: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  headerTitle: {
    fontFamily: "Kanit_700Bold",
    fontSize: 32,
    color: "#2b2323",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  headerSubtitle: {
    fontFamily: "Kanit_400Regular",
    fontSize: 14,
    color: "#000000",
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    flex: 1,
  },
  inputTitle: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#334155",
    marginTop: 15,
    marginBottom: 8,
  },
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderCard: {
    flex: 0.48,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  genderCardActive: {
    borderColor: "#ff69b4",
    borderWidth: 2,
    backgroundColor: "#fff5f7",
  },
  genderIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  genderLabel: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#64748b",
  },
  genderLabelActive: {
    color: "#ff69b4",
  },
  rowInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputValue: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    padding: 15,
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    color: "#1e293b",
  },
  btnCal: {
    backgroundColor: "#ff69b4",
    padding: 18,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 15,
  },
  labelCal: {
    fontFamily: "Kanit_700Bold",
    fontSize: 18,
    color: "#ffffff",
  },
  resultCard: {
    marginTop: 25,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f1f5f9",
    elevation: 3,
    marginBottom: 30,
  },
  resultTitle: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 18,
    color: "#1e293b",
  },
  resultValue: {
    fontFamily: "Kanit_700Bold",
    fontSize: 48,
    color: "#ff69b4",
    marginVertical: 5,
  },
  resultUnit: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#94a3b8",
  },
});
