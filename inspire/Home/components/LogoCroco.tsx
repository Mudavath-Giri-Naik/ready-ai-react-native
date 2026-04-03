import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Height, FontSize, FontFamily } from "../GlobalStyles";

export type LogoCrocoType = {
  /** Variant props */
  theme?: string;
};

const LogoCroco = ({ theme = "Green Croco" }: LogoCrocoType) => {
  return (
    <View style={styles.logoCroco}>
      <Text style={styles.ready}>Ready!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoCroco: {
    flex: 1,
    flexDirection: "row",
    paddingTop: Padding.padding_2,
    paddingBottom: Padding.padding_0,
    height: Height.height_31,
  },
  ready: {
    width: 97,
    fontSize: FontSize.fs_24,
    letterSpacing: -0.5,
    fontWeight: "800",
    fontFamily: FontFamily.onest,
    textAlign: "left",
    height: Height.height_31,
  },
});

export default LogoCroco;
