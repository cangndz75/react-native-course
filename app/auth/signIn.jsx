import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { Link, useRouter } from "expo-router";
export default function signIn() {
  const router = useRouter();
  return (
    <View style={{ display: "flex", justifyContent: "center" }}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: "100%", height: 300, marginTop: 50 }}
      />

      <View>
        <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
          Welcome back!
        </Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 20,
            padding: 10,
            backgroundColor: Colors.WHITE,
            width: "80%",
            alignSelf: "center",
            height: 50,
          }}
        >
          <Text>Email</Text>
        </TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 20,
            padding: 10,
            backgroundColor: Colors.WHITE,
            width: "80%",
            alignSelf: "center",
            height: 50,
          }}
        >
          <Text>Password</Text>
        </TextInput>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "80%", alignSelf: "center", backgroundColor: Colors.GRAY },
          ]}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Link
          style={[
            styles.buttonText,
            { width: "80%", alignSelf: "center", marginTop: 50, fontSize: 24 },
          ]}
          href={"/auth/signUp"}
        >
          <Text style={styles.buttonText}>Create a new account!</Text>
        </Link>
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
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
