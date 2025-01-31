import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constant/Colors";
const index = () => {
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
          height: "100%",
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

        <View style={{ marginTop: 100,width:'auto' }}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
              Get started
            </Text>
          </View>

          <View
            style={[
              styles.button,
              {
                backgroundColor: Colors.PRIMARY,
                borderWidth: 1,
                borderColor: Colors.WHITE,
              },
            ]}
          >
            <Text style={styles.buttonText}>Already have an account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

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
