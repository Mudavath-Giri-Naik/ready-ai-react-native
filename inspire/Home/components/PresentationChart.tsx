import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector21 from "../assets/Vector2.svg";
import { Width, Height, Color } from "../GlobalStyles";

export type PresentationChartType = {
  /** Variant props */
  style?: string;
};

const PresentationChart = ({ style = "Line" }: PresentationChartType) => {
  return (
    <View style={styles.presentationChart}>
      <Vector21 style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  presentationChart: {
    width: Width.width_24,
    height: Height.height_24,
  },
  vectorIcon: {
    position: "absolute",
    height: "83.33%",
    width: "87.5%",
    top: "8.33%",
    right: "6.25%",
    bottom: "8.33%",
    left: "6.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.grey60,
  },
});

export default PresentationChart;
