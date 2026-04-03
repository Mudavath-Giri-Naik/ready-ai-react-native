import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector1 from "../assets/Vector1.svg";
import { Height, Width, Color } from "../GlobalStyles";

export type ChevronDownType = {
  /** Variant props */
  style?: string;
};

const ChevronDown = ({ style = "Line" }: ChevronDownType) => {
  return (
    <View style={styles.chevronDown}>
      <Vector1 style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  chevronDown: {
    height: Height.height_24,
    width: Width.width_24,
  },
  vectorIcon: {
    position: "absolute",
    height: "29.17%",
    width: "58.33%",
    top: "37.5%",
    right: "20.83%",
    bottom: "33.33%",
    left: "20.83%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.grey70,
  },
});

export default ChevronDown;
