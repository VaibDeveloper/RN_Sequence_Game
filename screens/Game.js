//import liraries
import React, { Component, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import questions from "../components/Questions";
//import AsyncStorage from "@react-native-async-storage/async-storage";

// create a component
const Quiz = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestionIndex);

  const handleAnswerButtonClick = () => {
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    if (currentQuestionIndex == 4) {
      navigation.navigate("Result");
    }
  };

  const ip1 = useRef();
  const ip2 = useRef();
  const ip3 = useRef();
  const ip4 = useRef();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>REMEMBER THE SEQUENCE</Text>
      <View style={styles.row}>
        <Text style={styles.question}>{currentQuestion.Alphabets[0]}</Text>
        <Text style={styles.question}>{currentQuestion.Alphabets[1]}</Text>
        <Text style={styles.question}>{currentQuestion.Alphabets[2]}</Text>
        <Text style={styles.question}>{currentQuestion.Alphabets[3]}</Text>
      </View>
      <Text style={styles.heading2}>FILL THE BLOCKS</Text>
      <View ref={ip1} style={styles.answer_view}>
        <TextInput
          style={styles.answer_input}
          maxLength={1}
          inputMode="text"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              ip2.current.focus();
            }
          }}
        />
        <TextInput
          ref={ip2}
          style={styles.answer_input}
          maxLength={1}
          inputMode="text"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              ip3.current.focus();
            }
          }}
        />
        <TextInput
          ref={ip3}
          style={styles.answer_input}
          maxLength={1}
          inputMode="text"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              ip4.current.focus();
            }
          }}
        />
        <TextInput
          ref={ip4}
          style={styles.answer_input}
          maxLength={1}
          inputMode="text"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              ip4.current.focus();
            }
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.button_skip}
        onPress={handleAnswerButtonClick}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#24ded3",
    flexDirection: "column",
  },
  answer_view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 0,
  },
  answer_input: {
    width: 88,
    height: 70,
    borderWidth: 4,
    borderColor: "black",
    backgroundColor: "white",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  heading2: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  question: {
    color: "black",
    backgroundColor: "white",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 4,
    paddingHorizontal: 25,
  },
  button: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    width: 165,
    height: 70,
    paddingVertical: "3.5%",
    marginHorizontal: 15,
    marginBottom: 28,
    marginTop: 10,
  },
  button_skip: {
    backgroundColor: "white", //"rgba(52, 52, 52, 0.0)",
    alignSelf: "center",
    borderRadius: 20,
    width: 300,
    height: 70,
    paddingVertical: "3.5%",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default Quiz;
