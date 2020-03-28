import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../theme";
import { loadPhotos } from "../store/actions/photoActions";
import { PhotoList } from "../components/PhotoList";

export const MainScreen = ({ navigation }) => {
  const openPhotoHandler = photo => {
    navigation.navigate("Photo", {
      photoImg: photo.urls.regular,
      photoAuthor: photo.user.name
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  const allPhotos = useSelector(state => state.photo.allPhotos);
  const loading = useSelector(state => state.photo.loading);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }
  return <PhotoList data={allPhotos} onOpen={openPhotoHandler} />;
};

MainScreen.navigationOptions = {
  headerTitle: "Cписок фотографий"
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
