import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constant/Colors";
import { useRouter } from "expo-router";
export default function index() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <Image
        source={require("../assets/images/landing.png")}
        style={{ width: "100%", height: 300 }}
      />
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          flex: 1,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.WHITE,
          }}
        >
          Welcome the Coaching Guru
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: Colors.WHITE,
            marginTop: 50,
          }}
        >
          Discover a variety of courses to enhance your skills and knowledge.
        </Text>

        <View style={{ marginTop: 100, width: "auto" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/auth/signIn")}
          >
            <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
              Get started
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: Colors.PRIMARY,
                borderWidth: 1,
                borderColor: Colors.WHITE,
              },
            ]}
            onPress={() => router.push("/auth/signUp")}
          >
            <Text style={styles.buttonText}>Already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
