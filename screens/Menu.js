import React, { Component, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Menu = ({ navigation }) => {
  var level = 0;
  var mode = "";
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/images/Seq_Game.png")}
          resizeMode="contain"
        ></Image>
      </SafeAreaView>
      <SafeAreaView style={styles.column}>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 0),
              (mode = "easy"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 1),
              (mode = "hard"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 2),
              (mode = "easy"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 3),
              (mode = "hard"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 4),
              (mode = "easy"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 5),
              (mode = "hard"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => {
            (level = 6),
              (mode = "easy"),
              navigation.navigate("Game", { Level: level, Mode: mode });
          }}
        >
          <Text style={styles.buttonText}>Level 7</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#24ded3",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#24ded3",
    marginBottom: 30,
  },
  logo: {
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "stretch",
    width: 300,
    height: 300,
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 4,
    width: 200,
    height: 70,
    paddingVertical: "2.5%",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Menu;
