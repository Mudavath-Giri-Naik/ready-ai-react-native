import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavButton from "./BottomNavButton";
import PresentationChart from "./PresentationChart";
import Vector31 from "../assets/Vector3.svg";
import Button1 from "./Button1";
import {
  Padding,
  FontFamily,
  LineHeight,
  LetterSpacing,
  FontSize,
  Color,
  Gap,
  Width,
  BoxShadow,
  Border,
  Height,
} from "../GlobalStyles";

export type BottomNavType = {
  style?: string;
  selected?: boolean;
  state?: string;
};

const BottomNav = ({ style, selected, state }: BottomNavType) => {
  return (
    <View style={[styles.bottomNav, styles.barFlexBox]}>
      <View style={[styles.bar, styles.barFlexBox]}>
        <BottomNavButton selected={selected} style="Filled" />
        <View style={styles.bottomSpaceBlock}>
          <PresentationChart style={style} />
          <Text style={[styles.home, styles.homeTypo]}>Settings</Text>
        </View>
        <View style={[styles.bottomNavButton2, styles.bottomSpaceBlock]}>
          <View style={styles.user}>
            <Vector31 style={styles.vectorIcon} />
          </View>
          <Text style={styles.homeTypo}>You</Text>
        </View>
      </View>
      <Button1 state={state} style="Filled" />
    </View>
  );
};

const styles = StyleSheet.create({
  barFlexBox: {
    paddingHorizontal: Padding.padding_16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: LineHeight.lh_14,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: FontSize.fs_11,
    color: Color.grey60,
  },
  bottomSpaceBlock: {
    gap: Gap.gap_4,
    paddingVertical: Padding.padding_8,
    paddingHorizontal: Padding.padding_13,
    width: Width.width_58,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNav: {
    width: Width.width_393,
    paddingVertical: Padding.padding_0,
    gap: Gap.gap_8,
    zIndex: 2,
    marginTop: -102,
  },
  bar: {
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 0,
    borderRadius: Border.br_99999,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.grey15,
    borderWidth: 1,
    paddingVertical: Padding.padding_5,
    gap: Gap.gap_24,
  },
  home: {
    width: 46,
    height: Height.height_14,
  },
  bottomNavButton2: {
    display: "none",
  },
  user: {
    width: Width.width_24,
    height: Height.height_24,
  },
  vectorIcon: {
    position: "absolute",
    height: "83.33%",
    width: "66.67%",
    top: "8.33%",
    right: "16.67%",
    bottom: "8.33%",
    left: "16.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.grey60,
  },
});

export default BottomNav;
