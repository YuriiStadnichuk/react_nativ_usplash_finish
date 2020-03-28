import React, { useState, useEffect } from "react";
import { FlatList, Dimensions, StyleSheet, View, Text } from "react-native";

import { AppView } from "../components/ui/AppView";
import { Photo } from "../components/Photo";

export const PhotoList = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>Фотографий пока нет</Text>
      </View>
    );
  }

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  useEffect(() => {
    const update = () => {
      const width = Dimensions.get("window").width;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener("change", update);
    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  return (
    <AppView style={{ width: deviceWidth }}>
      <FlatList
        data={data}
        keyExtractor={photo => photo.id.toString()}
        renderItem={({ item }) => <Photo photo={item} onOpen={onOpen} />}
      />
    </AppView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  noItems: {
    fontFamily: "open-regular",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18
  }
});
