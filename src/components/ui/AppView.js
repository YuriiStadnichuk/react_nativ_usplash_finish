import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const AppView = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192338",
    paddingVertical: THEME.PADDING_VERTICAL
  }
});
