import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector2 from "../assets/Vector2.svg";
import { Height, Width } from "../GlobalStyles";

export type FlagType = {
  /** Variant props */
  style?: string;
};

const Flag = ({ style = "Line" }: FlagType) => {
  return (
    <View style={styles.flag}>
      <Vector2 style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {
    height: Height.height_20,
    width: Width.width_20,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "89.5%",
    width: "68.5%",
    top: "5%",
    right: "14%",
    bottom: "5.5%",
    left: "17.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default Flag;
