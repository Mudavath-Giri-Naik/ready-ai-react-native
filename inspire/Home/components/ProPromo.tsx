import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Flag from "./Flag";
import {
  Color,
  Height,
  Width,
  Padding,
  Gap,
  FontSize,
  LetterSpacing,
  FontFamily,
} from "../GlobalStyles";

export type ProPromoType = {
  flagStyle?: string;
  flagStyle1?: string;
};

const ProPromo = ({ flagStyle, flagStyle1 }: ProPromoType) => {
  return (
    <View style={styles.proPromo}>
      <View style={[styles.proPromoChild, styles.proBorder]} />
      <Flag style={flagStyle} />
      <Text
        style={styles.usersCompletedQuestion}
      >{` 2,312 users completed Question 3 today `}</Text>
      <Flag style={flagStyle1} />
      <View style={[styles.proPromoItem, styles.proBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  proBorder: {
    display: "none",
    borderTopWidth: 1,
    borderColor: Color.yellow40,
    borderStyle: "solid",
    height: Height.height_1,
  },
  proPromo: {
    width: Width.width_393,
    borderStyle: "dashed",
    borderColor: Color.yellow50,
    borderRadius: 0,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_6,
    gap: Gap.gap_12,
    zIndex: 3,
  },
  proPromoChild: {
    width: Width.width_20,
  },
  usersCompletedQuestion: {
    fontSize: FontSize.fs_14,
    letterSpacing: LetterSpacing.ls__0_1,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.yellow50,
    textAlign: "center",
  },
  proPromoItem: {
    width: 5,
  },
});

export default ProPromo;
