import * as React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Vector10 from "../assets/Vector.svg";
import { Width, Height, Color } from "../GlobalStyles";

export type Home1Type = {
  /** Variant props */
  style?: string;
};

const Home1 = ({ style = "Line" }: Home1Type) => {
  return (
    <View style={styles.home4}>
      <LinearGradient
        style={[styles.vector, styles.iconLayout]}
        locations={[0, 1]}
        colors={[Color.orange40, "#ff5000"]}
        useAngle={true}
        angle={180}
      >
        <Vector10 style={styles.iconLayout} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    backgroundColor: "transparent",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  home4: {
    width: Width.width_24,
    height: Height.height_24,
    overflow: "hidden",
  },
  vector: {
    position: "absolute",
    left: "1.25%",
    top: "3.75%",
    right: "0.83%",
    bottom: "5.42%",
  },
});

export default Home1;
