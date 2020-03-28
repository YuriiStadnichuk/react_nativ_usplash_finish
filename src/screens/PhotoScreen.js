import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { THEME } from "../theme";

export const PhotoScreen = ({ navigation }) => {
  const photoImg = navigation.getParam("photoImg");
  return (
    <View style={styles.center}>
      <Image style={styles.image} source={{ uri: photoImg }} />
    </View>
  );
};

PhotoScreen.navigationOptions = ({ navigation }) => {
  const photoAuthor = navigation.getParam("photoAuthor");
  return {
    headerTitle: "Фотография от " + photoAuthor,
    headerStyle: {
      backgroundColor: Platform.OS === "ios" ? "#fff" : THEME.SECOND_COLOR
    },
    headerTintColor: Platform.OS === "ios" ? THEME.SECOND_COLOR : "#fff"
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.SECOND_COLOR
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    flex: 1,
    alignItems: "baseline"
  }
});
