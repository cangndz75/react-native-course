import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";
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
          Create a new account!
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
          <Text>Full Name</Text>
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
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15 }}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/auth/signIn")}>
            <Text style={{ color: Colors.PRIMARY }}>Sign In</Text>
          </Pressable>
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
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
