import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Home1 from "./Home1";
import {
  Width,
  Padding,
  Gap,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
  Color,
} from "../GlobalStyles";

export type BottomNavButtonType = {
  style?: string;

  /** Variant props */
  selected?: boolean;
};

const BottomNavButton = ({ selected = false, style }: BottomNavButtonType) => {
  return (
    <View style={styles.bottomNavButton}>
      <Home1 style={style} />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavButton: {
    width: Width.width_58,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_13,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_4,
  },
  home: {
    width: 34,
    height: Height.height_14,
    fontSize: FontSize.fs_11,
    letterSpacing: LetterSpacing.ls__0_1,
    lineHeight: LineHeight.lh_14,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.orange40,
    textAlign: "center",
  },
});

export default BottomNavButton;
