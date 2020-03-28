import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  ImageBackground
} from "react-native";
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";
import { THEME } from "../theme";

const { width } = Dimensions.get("screen");
export const Photo = ({ photo, onOpen }) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper
      style={styles.list}
      activeOpacity={0.7}
      onPress={() => onOpen(photo)}
    >
      <View style={styles.wrap}>
        <ImageBackground
          style={styles.image}
          source={{ uri: photo.urls.regular }}
        >
          <View style={styles.list}>
            <AppTextBold style={styles.boldText}>
              {photo.alt_description}
            </AppTextBold>
            <AppText style={styles.lightText}>{photo.user.name}</AppText>
          </View>
        </ImageBackground>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: "space-around",
    alignItems: "center"
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    color: THEME.MAIN_COLOR
  },

  image: {
    width: "100%",
    height: 300
  },

  boldText: {
    width: width / 2,
    paddingLeft: 15,
    fontSize: 14
  },
  lightText: {
    width: width / 3,
    fontSize: 12,
    textDecorationLine: "underline"
  }
});
