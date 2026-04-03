import * as React from "react";
import { StyleSheet, View } from "react-native";
import FadeBg from "./FadeBg";
import BottomNav from "./BottomNav";
import Divider from "./Divider";
import { Height, Width } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.frameParent, styles.parentLayout]}>
      <View style={styles.parentLayout}>
        <FadeBg />
        <BottomNav style="Line" selected state="Default" />
      </View>
      <View style={styles.bottomAppBar}>
        <Divider showCreationPrompt={false} showBottomNavTabs={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: Height.height_205,
    width: Width.width_393,
  },
  frameParent: {
    alignItems: "flex-end",
    marginTop: -189,
  },
  bottomAppBar: {
    zIndex: 2,
    marginTop: -34,
    width: Width.width_393,
  },
});

export default FrameComponent;
