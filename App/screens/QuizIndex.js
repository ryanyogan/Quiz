import React from "react";
import { ScrollView, StatusBar } from "react-native";
import RowItem from "../components/RowItem";
import computerQuestions from "../data/computers";
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f6"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49479b"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions
        })
      }
    />
  </ScrollView>
);
