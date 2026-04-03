import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector from "../assets/Vector.svg";
import { Height, Width, Color } from "../GlobalStyles";

export type MenuType = {
  /** Variant props */
  style?: string;
};

const Menu = ({ style = "Line" }: MenuType) => {
  return (
    <View style={styles.menu}>
      <Vector style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    height: Height.height_24,
    width: Width.width_24,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "50%",
    width: "75%",
    top: "25%",
    right: "12.5%",
    bottom: "25%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    color: Color.grey80,
    overflow: "hidden",
  },
});

export default Menu;
