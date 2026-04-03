import * as React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Height, Width, Color } from "../GlobalStyles";

const FadeBg = () => {
  return (
    <View style={styles.fadeBg}>
      <LinearGradient
        style={styles.fadePosition}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", Color.colorWhite]}
        useAngle={true}
        angle={180}
      />
      <LinearGradient
        style={[styles.fade2, styles.fadePosition]}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", Color.colorWhite]}
        useAngle={true}
        angle={180}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fadePosition: {
    backgroundColor: "transparent",
    height: Height.height_155,
    left: 0,
    bottom: 0,
    position: "absolute",
    width: Width.width_393,
  },
  fadeBg: {
    height: Height.height_205,
    zIndex: 1,
    width: Width.width_393,
  },
  fade2: {
    zIndex: 1,
  },
});

export default FadeBg;
