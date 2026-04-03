import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import ShoppingBag from "./ShoppingBag";
import {
  BoxShadow,
  Border,
  Padding,
  Width,
  Gap,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
  Color,
} from "../GlobalStyles";

export type Button1Type = {
  style?: string;

  /** Variant props */
  state?: string;
};

const Button1 = ({ state = "Default", style }: Button1Type) => {
  return (
    <View style={styles.button}>
      <ImageBackground
        style={[styles.upNextIcon, styles.containerFlexBox]}
        resizeMode="cover"
        source={require("../assets/Up-Next.png")}
      >
        <View style={[styles.container, styles.containerFlexBox]}>
          <ShoppingBag style={style} />
          <Text style={styles.store}>Store</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 68,
    width: 68,
  },
  upNextIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop4,
    borderRadius: Border.br_99999,
    flexDirection: "row",
    paddingHorizontal: Padding.padding_5,
    paddingVertical: Padding.padding_6,
  },
  container: {
    width: Width.width_58,
    paddingHorizontal: Padding.padding_13,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_4,
  },
  store: {
    width: 31,
    height: Height.height_14,
    fontSize: FontSize.fs_11,
    letterSpacing: LetterSpacing.ls__0_1,
    lineHeight: LineHeight.lh_14,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.grey60,
    textAlign: "center",
  },
});

export default Button1;
