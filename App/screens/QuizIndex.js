import React from "react";
import { ScrollView, StatusBar } from "react-native";
import RowItem from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f6"
      onPress={() => navigation.navigate("Quiz")}
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() => navigation.navigate("Quiz")}
    />
    <RowItem
      name="Computers"
      color="#49479b"
      onPress={() => navigation.navigate("Quiz")}
    />
  </ScrollView>
);
