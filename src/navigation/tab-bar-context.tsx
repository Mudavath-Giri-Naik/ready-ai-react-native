import React, { createContext, useContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

interface TabBarContextType {
  tabBarTranslateY: SharedValue<number>;
}

const TabBarContext = createContext<TabBarContextType | null>(null);

export const TabBarProvider = ({ children }: { children: React.ReactNode }) => {
  const tabBarTranslateY = useSharedValue(0);

  return (
    <TabBarContext.Provider value={{ tabBarTranslateY }}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBarContext = () => {
  const context = useContext(TabBarContext);
  if (!context) {
    throw new Error("useTabBarContext must be used within a TabBarProvider");
  }
  return context;
};
