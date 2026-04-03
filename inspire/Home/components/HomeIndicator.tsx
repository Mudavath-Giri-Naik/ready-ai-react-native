import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Padding, Height, Border, Color } from "../GlobalStyles";

const HomeIndicator = () => {
  return (
    <View style={styles.homeIndicator}>
      <View style={styles.homeIndicator2} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 129,
    paddingTop: Padding.padding_21,
    paddingBottom: Padding.padding_8,
  },
  homeIndicator2: {
    width: 144,
    height: Height.height_5,
    borderRadius: Border.br_100,
    backgroundColor: Color.colorGray200,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default HomeIndicator;
