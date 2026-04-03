import { View, Text, Pressable, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
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
import { TabBarProvider, useTabBarContext } from "./tab-bar-context";

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
  const { tabBarTranslateY } = useTabBarContext();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: tabBarTranslateY.value }],
    };
  });

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
    <>
      <Animated.View style={[tabStyles.gradientWrapper, animatedStyle]} pointerEvents="none">
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.85)', '#FFFFFF', '#FFFFFF']}
          locations={[0, 0.4, 0.8, 1]}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      <Animated.View style={[tabStyles.wrapper, animatedStyle]} pointerEvents="box-none">
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
              numberOfLines={1}
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
    </Animated.View>
    </>
  );
};

const tabStyles = StyleSheet.create({
  gradientWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
    pointerEvents: "none",
  },
  wrapper: {
    position: "absolute",
    bottom: 24,
    alignSelf: "center",
    left: 0,
    right: 0,
    height: 72,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    paddingLeft: 16,
    paddingRight: 16,
    gap: 8,
  },
  leftShadow: {
    height: 72,
    borderRadius: 99999,
    backgroundColor: TAB.barBorder,
    paddingBottom: 4,
  },
  leftInner: {
    height: 68,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: TAB.barBorder,
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 8,
  },
  storeShadow: {
    height: 72,
    backgroundColor: "#B2D9FF",
    borderRadius: 99999,
    paddingBottom: 4,
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
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingRight: 13,
    paddingBottom: 8,
    paddingLeft: 13,
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
    <TabBarProvider>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: '#FFFFFF' } }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
      </Tab.Navigator>
    </TabBarProvider>
  );
};
