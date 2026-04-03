import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import { MainTabParamList } from "./types";
import { HomeScreen } from "@/features/home/screens/home-screen";
import { StoreScreen } from "@/features/store/screens/store-screen";
import { SettingsScreen } from "@/features/settings/screens/settings-screen";
import { typography } from "@/theme/typography";

const TAB = {
  activeColor: "#FF7800",
  inactiveColor: "#48484A",
  barBg: "#FFFFFF",
  barBorder: "#EFEFF4",
  barShadow: "#EFEFF4",
  storeBg: "#E5F2FF",
  storeIcon: "#0081FB",
} as const;

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface TabConfig {
  icon: FeatherIconName;
  label: string;
}

const TAB_CONFIG: Record<string, TabConfig> = {
  Home: { icon: "home", label: "Home" },
  Settings: { icon: "bar-chart-2", label: "Settings" },
  Store: { icon: "shopping-bag", label: "Store" },
};

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const currentRouteName = state.routes[state.index].name;
  if (currentRouteName === "Settings") {
    return null;
  }

  const isFocused = (name: string) => {
    const idx = state.routes.findIndex((r) => r.name === name);
    return state.index === idx;
  };

  const onPress = (name: string, key: string) => {
    const isFocusedNow = isFocused(name);
    const event = navigation.emit({
      type: "tabPress",
      target: key,
      canPreventDefault: true,
    });
    if (!isFocusedNow && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  const homeRoute = state.routes.find((r) => r.name === "Home");
  const settingsRoute = state.routes.find((r) => r.name === "Settings");
  const storeRoute = state.routes.find((r) => r.name === "Store");

  return (
    <View style={tabStyles.wrapper}>
      {/* Left Box (Home & Settings) */}
      <View style={tabStyles.leftShadow}>
        <View style={tabStyles.leftInner}>
          <Pressable
            style={tabStyles.tab}
            onPress={() => onPress("Home", homeRoute!.key)}
          >
            <View style={tabStyles.iconWrap}>
              <Feather
                name="home"
                size={24}
                color={isFocused("Home") ? TAB.activeColor : TAB.inactiveColor}
              />
            </View>
            <Text
              style={[
                tabStyles.label,
                isFocused("Home") && tabStyles.labelActive,
              ]}
            >
              Home
            </Text>
          </Pressable>

          <Pressable
            style={tabStyles.tab}
            onPress={() => onPress("Settings", settingsRoute!.key)}
          >
            <View style={tabStyles.iconWrap}>
              <Feather
                name="bar-chart-2"
                size={24}
                color={
                  isFocused("Settings") ? TAB.activeColor : TAB.inactiveColor
                }
              />
            </View>
            <Text
              style={[
                tabStyles.label,
                isFocused("Settings") && tabStyles.labelActive,
              ]}
            >
              Settings
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Right Box (Store alone) */}
      <View style={tabStyles.storeShadow}>
        <View style={tabStyles.storeInner}>
          <Pressable
            style={tabStyles.storeTab}
            onPress={() => onPress("Store", storeRoute!.key)}
          >
            <View style={tabStyles.storeCircle}>
              <Feather name="shopping-bag" size={24} color={TAB.storeIcon} />
            </View>
            <Text style={tabStyles.labelStore}>Store</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const tabStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  leftShadow: {
    width: 172,
    height: 68,
    borderRadius: 99999,
    backgroundColor: TAB.barBorder,
    paddingBottom: 4,
  },
  leftInner: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: TAB.barBorder,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  storeShadow: {
    backgroundColor: "#B2D9FF",
    borderRadius: 99999,
    paddingBottom: 4, // X=0, Y=4 solid shadow equivalent
  },
  storeInner: {
    width: 68,
    height: 68,
    backgroundColor: "#E5F2FF",
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: "#B2D9FF",
    paddingTop: 6,
    paddingRight: 5,
    paddingBottom: 6,
    paddingLeft: 5,
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    gap: 4,
  },
  storeTab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  iconWrap: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  storeCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 11,
    letterSpacing: -0.1,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: typography.fonts.inter.medium,
    color: TAB.inactiveColor,
    textAlign: "center",
  },
  labelActive: {
    color: TAB.activeColor,
  },
  labelStore: {
    fontSize: 11,
    letterSpacing: -0.1,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: typography.fonts.inter.medium,
    color: TAB.inactiveColor,
    textAlign: "center",
  },
});

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: '#FFFFFF' } }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  );
};
