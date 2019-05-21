import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, ButtonContainer } from "../components/Button";
import TEMP_QUESTIONS from "../data/computers";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3681F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safeArea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Quiz extends Component {
  state = {
    correctCount: 0,
    totalCount: TEMP_QUESTIONS.length,
    activeQuestionIndex: 0
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = {};

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
        }

        return nextState;
      },
      () => {
        this.nextQuestion();
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      let nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        nextIndex = 0;
      }
      return {
        activeQuestionIndex: nextIndex
      };
    });
  };

  render() {
    const question = TEMP_QUESTIONS[this.state.activeQuestionIndex];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz;
