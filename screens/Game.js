//import liraries
import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import questions from "../components/Questions";

const AnswersInput = ({
  navigation,
  visible,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  Question,
  score,
  setScore,
  Level,
}) => {
  const ip1 = useRef();
  const ip2 = useRef();
  const ip3 = useRef();
  const ip4 = useRef();
  const ip5 = useRef();

  const [buttonclicked, setButtonclicked] = useState(false);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [isCorrectAns, setIsCorrectAns] = useState();

  let answer;
  const ques = Question.Alphabets.join("");

  useEffect(() => {
    if (val1.length >= 1) {
      ip2.current?.focus();
    }
  }, [val1]);

  useEffect(() => {
    if (val2.length >= 1 && (Level !== 0 || Level !== 1)) {
      ip3.current.focus();
    } else if (val2.length === 0) {
      ip1.current?.focus();
    } else {
      Keyboard.dismiss();
    }
  }, [val2]);

  useEffect(() => {
    if (val3.length >= 1 && (Level === 4 || Level === 5 ||Level === 6 )) {
      ip4.current.focus();
    } else if (val3.length === 0) {
      ip2.current?.focus();
    } else {
      Keyboard.dismiss();
    }
  }, [val3]);

  useEffect(() => {
    if (val4.length >= 1 && Level === 6) {
      ip5.current?.focus();
    } else if (val4.length === 0) {
      ip3.current?.focus();
    } else {
      Keyboard.dismiss();
    }
  }, [val4]);

  useEffect(() => {
    if (val5.length >= 1) {
      Keyboard.dismiss();
    } else if (val5.length === 0) {
      ip4.current?.focus();
    }
  }, [val5]);

  const handleAnswerButtonClick = () => {
    let newScore = score;
    setButtonclicked(true);
    if (Level === 6) {
      answer = [val1, val2, val3, val4, val5].join("");
    } else if (Level === 5 || Level === 4) {
      answer = [val1, val2, val3, val4].join("");
    } else if (Level === 3 || Level === 2) {
      answer = [val1, val2, val3].join("");
    } else if (Level === 1 || Level === 0) {
      answer = [val1, val2].join("");
    } else if (Level === 0) {
      answer = [val1, val2].join("");
    }

    if (answer === ques) {
      newScore += 1;
      setIsCorrectAns(true);
      setScore(newScore);
      console.log("Score :", newScore);
    } else {
      setIsCorrectAns(false);
      console.log("Incorrect");
      console.log("Score :", newScore);
    }

    setTimeout(() => {
      if (currentQuestionIndex < 4) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    setTimeout(() => {
      if (currentQuestionIndex == 4) {
        navigation.navigate("Result", { Score: newScore, Level_No: Level });
      }
    }, 1000);
  };

  return !visible ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading2}>FILL THE BLOCKS</Text>
      <View style={styles.answer_view}>
        <TextInput
          ref={ip1}
          style={[
            styles.answer_input,
            buttonclicked === true &&
              isCorrectAns && {
                backgroundColor: "#70e000",
              },
            buttonclicked === true &&
              isCorrectAns === false && {
                backgroundColor: "#f21b3f",
              },
          ]}
          value={val1}
          maxLength={1}
          onChangeText={(text) => {
            setVal1(text);
          }}
          autoCapitalize="characters"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Space") {
              ip2.current?.focus();
            }
          }}
        />
        <TextInput
          ref={ip2}
          style={[
            styles.answer_input,
            buttonclicked === true &&
              isCorrectAns && {
                backgroundColor: "#70e000",
              },
            buttonclicked === true &&
              isCorrectAns === false && {
                backgroundColor: "#f21b3f",
              },
          ]}
          maxLength={1}
          value={val2}
          onChangeText={(text) => {
            setVal2(text);
          }}
          autoCapitalize="characters"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              ip1.current?.focus();
            } else if (nativeEvent.key === "Space") {
              ip2.current?.focus();
            }
          }}
        />
        <TextInput
          ref={ip3}
          style={[
            styles.answer_input,
            Level === 2 ||
            Level === 3 ||
            Level === 4 ||
            Level === 5 ||
            Level === 6
              ? styles.answer_input
              : styles.hidden_answer_input,
            buttonclicked === true &&
              isCorrectAns && {
                backgroundColor: "#70e000",
              },
            buttonclicked === true &&
              isCorrectAns === false && {
                backgroundColor: "#f21b3f",
              },
          ]}
          maxLength={1}
          value={val3}
          onChangeText={(text) => {
            setVal3(text);
          }}
          autoCapitalize="characters"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              ip2.current?.focus();
            } else if (nativeEvent.key === "Space") {
              ip3.current?.focus();
            }
          }}
        />
        <TextInput
          ref={ip4}
          style={[
            styles.answer_input,
            Level === 4 || Level === 5 || Level === 6
              ? styles.answer_input
              : styles.hidden_answer_input,
            buttonclicked === true &&
              isCorrectAns && {
                backgroundColor: "#70e000",
              },
            buttonclicked === true &&
              isCorrectAns === false && {
                backgroundColor: "#f21b3f",
              },
          ]}
          maxLength={1}
          value={val4}
          onChangeText={(text) => {
            setVal4(text);
          }}
          autoCapitalize="characters"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              ip3.current?.focus();
            } else if (nativeEvent.key === "Space") {
              ip4.current?.focus();
            }
          }}
        />
        <TextInput
          ref={ip5}
          style={[
            styles.answer_input,
            Level === 6 ? styles.answer_input : styles.hidden_answer_input,
            buttonclicked === true &&
              isCorrectAns && {
                backgroundColor: "#70e000",
              },
            buttonclicked === true &&
              isCorrectAns === false && {
                backgroundColor: "#f21b3f",
              },
          ]}
          maxLength={1}
          value={val5}
          onChangeText={(text) => {
            setVal5(text);
          }}
          autoCapitalize="characters"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              ip4.current?.focus();
            } else if (nativeEvent.key === "Space") {
              Keyboard.dismiss();
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
    </SafeAreaView>
  ) : null;
};

const QuestionsInput = ({ visible, setVisible, Question, Mode, Level }) => {
  if (Mode === "easy") {
    useEffect(() => {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1800);

      return () => clearTimeout(timeout);
    });
  } else if (Mode === "hard") {
    useEffect(() => {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    });
  }

  return visible ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>REMEMBER THE SEQUENCE</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.question}
          value={Question.Alphabets[0]}
          editable={false}
        />
        <TextInput
          style={styles.question}
          value={Question.Alphabets[1]}
          editable={false}
        />
        <TextInput
          style={[
            styles.question,
            Level === 2 ||
            Level === 3 ||
            Level === 4 ||
            Level === 5 ||
            Level === 6
              ? styles.question
              : styles.hidden_answer_input,
          ]}
          value={Question.Alphabets[2]}
          editable={false}
        />
        <TextInput
          style={[
            styles.question,
            Level === 4 || Level === 5 || Level === 6
              ? styles.question
              : styles.hidden_answer_input,
          ]}
          value={Question.Alphabets[3]}
          editable={false}
        />
        <TextInput
          style={[
            styles.question,
            Level === 6 ? styles.question : styles.hidden_answer_input,
          ]}
          value={Question.Alphabets[4]}
          editable={false}
        />
      </View>
    </SafeAreaView>
  ) : null;
};

const ParentComp = ({
  item,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  score,
  setScore,
  navigation,
  Level,
  Mode,
}) => {
  const [visible, setVisible] = useState(true);
  return (
    <View>
      <QuestionsInput
        visible={visible}
        setVisible={setVisible}
        Question={item}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        Mode={Mode}
        Level={Level}
      />

      <AnswersInput
        navigation={navigation}
        score={score}
        setScore={setScore}
        Question={item}
        visible={visible}
        setVisible={setVisible}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        Level={Level}
      />
    </View>
  );
};
// create a component
const Game = ({ navigation, route }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  let { Level, Mode } = route.params;
  let level_ques = questions[Level];
  console.log(Level);

  return (
    <SafeAreaView style={styles.container}>
      {level_ques.map((item, index) =>
        currentQuestionIndex === index ? (
          <ParentComp
            navigation={navigation}
            item={item}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            score={score}
            setScore={setScore}
            Level={Level}
            Mode={Mode}
          />
        ) : null
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#24ded3",
    flexDirection: "column",
  },
  answer_view: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
  },
  answer_input: {
    width: 75,
    height: 75,
    borderWidth: 4,
    borderColor: "black",
    backgroundColor: "white",
    fontSize: 48,
    fontWeight: "900",
    textAlign: "center",
  },
  hidden_answer_input: {
    position: "absolute",
    left: -1000,
    backgroundColor: "red",
  },
  heading: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 110,
  },
  heading2: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 90,
  },
  question: {
    width: 75,
    height: 75,
    borderWidth: 4,
    borderColor: "black",
    backgroundColor: "white",
    fontSize: 48,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 400,
    color: "black",
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
    marginBottom: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default Game;
