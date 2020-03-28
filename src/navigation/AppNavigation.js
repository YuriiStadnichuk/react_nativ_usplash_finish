import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PhotoScreen } from "../screens/PhotoScreen";
import { THEME } from "../theme";

const PhotoNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Photo: PhotoScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

export const AppNavigation = createAppContainer(PhotoNavigator);
