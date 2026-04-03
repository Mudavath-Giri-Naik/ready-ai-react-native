import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoCroco from "./LogoCroco";
import Lightning from "../assets/lightning.svg";
import Menu from "./Menu";
import {
  StyleVariable,
  Width,
  Color,
  Padding,
  BoxShadow,
  Height,
  FontFamily,
} from "../GlobalStyles";

const TopNav = () => {
  return (
    <View style={[styles.topNav, styles.rhsFlexBox]}>
      <LogoCroco theme="Theme8" />
      <View style={[styles.rhs, styles.rhsFlexBox]}>
        <View style={[styles.streakCounter, styles.streakFlexBox]}>
          <Lightning
            style={styles.lightningIcon}
            width={StyleVariable.iconSizeSPlus}
            height={StyleVariable.iconSizeSPlus}
          />
          <View style={[styles.text, styles.rhsFlexBox]}>
            <Text style={styles.number}>8</Text>
          </View>
        </View>
        <View style={[styles.streakCounter2, styles.streakFlexBox]}>
          <Menu style="Line" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rhsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  streakFlexBox: {
    paddingVertical: StyleVariable.spacingXS,
    paddingHorizontal: StyleVariable.spacingS,
    justifyContent: "flex-end",
    borderRadius: StyleVariable.roundingXXXL,
    elevation: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  topNav: {
    width: Width.width_393,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: StyleVariable.spacingL,
    paddingVertical: Padding.padding_10,
    gap: StyleVariable.spacingM,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  rhs: {
    gap: StyleVariable.spacingL,
    flexDirection: "row",
    alignItems: "center",
  },
  streakCounter: {
    boxShadow: BoxShadow.shadow_drop,
    backgroundColor: Color.green30,
  },
  lightningIcon: {
    height: StyleVariable.iconSizeSPlus,
    width: StyleVariable.iconSizeSPlus,
    color: Color.colorWhite,
  },
  text: {
    paddingHorizontal: StyleVariable.spacingXXXS,
    paddingVertical: Padding.padding_0,
  },
  number: {
    width: Width.width_14,
    height: Height.height_24,
    fontSize: StyleVariable.textSizeL,
    letterSpacing: -0.2,
    lineHeight: StyleVariable.lineHeightL,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
  },
  streakCounter2: {
    boxShadow: BoxShadow.shadow_drop1,
    backgroundColor: Color.grey10,
  },
});

export default TopNav;
