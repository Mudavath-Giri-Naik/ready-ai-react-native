import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector61 from "../assets/Vector6.svg";
import { Width, Height } from "../GlobalStyles";

export type ShoppingBagType = {
  /** Variant props */
  style?: string;
};

const ShoppingBag = ({ style = "Line" }: ShoppingBagType) => {
  return (
    <View style={styles.shoppingBag2}>
      <Vector61 style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingBag2: {
    width: Width.width_22,
    height: Height.height_22,
  },
  vectorIcon: {
    position: "absolute",
    height: "89.55%",
    width: "85.91%",
    top: "5%",
    right: "7.27%",
    bottom: "5.45%",
    left: "6.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default ShoppingBag;
