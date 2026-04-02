import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Store: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  SessionResult: { questionId: string };
};
