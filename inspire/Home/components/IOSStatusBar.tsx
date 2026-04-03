import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "@react-native-community/blur";
import CellularConnection from "../assets/Cellular-Connection.svg";
import Wifi from "../assets/Wifi.svg";
import Cap from "../assets/Cap.svg";
import {
  Width,
  Color,
  Padding,
  Height,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type IOSStatusBarType = {
  showBackground?: boolean;
};

const IOSStatusBar = ({ showBackground = false }: IOSStatusBarType) => {
  return (
    <LinearGradient
      style={[styles.iosStatusBar, styles.bgGradientLayout]}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.01)", "rgba(255, 255, 255, 0.01)"]}
      useAngle={true}
      angle={180}
    >
      <BlurView style={styles.blurview} />
      {!!showBackground && (
        <View style={[styles.bgGradient, styles.fillPosition]}>
          <View style={[styles.fill, styles.fillPosition]} />
        </View>
      )}
      <View style={styles.frame}>
        <View style={[styles.time, styles.timeFlexBox]}>
          <Text style={styles.time2}>9:41</Text>
        </View>
        <View style={styles.dynamicIslandSpacer} />
        <View style={[styles.levels, styles.timeFlexBox]}>
          <CellularConnection
            style={[styles.cellularConnectionIcon, styles.iconLayout]}
            width={19}
            height={12}
          />
          <Wifi
            style={[styles.wifiIcon, styles.iconLayout]}
            width={17}
            height={12}
          />
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderPosition]} />
            <Cap style={[styles.capIcon, styles.borderPosition]} />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradientLayout: {
    overflow: "hidden",
    width: Width.width_393,
  },
  fillPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  timeFlexBox: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 12,
    color: Color.colorGray200,
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iosStatusBar: {
    paddingTop: Padding.padding_21,
    backgroundColor: "transparent",
    zIndex: 3,
    alignItems: "center",
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    position: "absolute",
    width: Width.width_393,
  },
  blurview: {
    opacity: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    position: "absolute",
  },
  bgGradient: {
    height: 43,
    display: "none",
    zIndex: 0,
    overflow: "hidden",
    width: Width.width_393,
    bottom: 0,
  },
  fill: {
    backgroundColor: Color.orange40,
  },
  frame: {
    width: "100%",
    justifyContent: "space-between",
    gap: 0,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    paddingLeft: Padding.padding_16,
    paddingRight: Padding.padding_6,
  },
  time2: {
    height: Height.height_22,
    width: Width.width_40,
    fontSize: 17,
    lineHeight: LineHeight.lh_22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    textAlign: "center",
    color: Color.colorGray200,
  },
  dynamicIslandSpacer: {
    height: Height.height_10,
    width: 124,
  },
  levels: {
    paddingLeft: Padding.padding_6,
    paddingRight: Padding.padding_16,
    gap: 7,
  },
  cellularConnectionIcon: {
    width: 19,
  },
  wifiIcon: {
    width: 17,
  },
  battery: {
    height: 13,
    width: 27,
  },
  border: {
    height: "100%",
    marginLeft: -14,
    top: "0%",
    bottom: "0%",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: Color.colorGray200,
    borderWidth: 1,
    width: 25,
    opacity: 0,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12,
    top: "36.92%",
    bottom: "31.54%",
    maxHeight: "100%",
    width: 1,
    color: Color.colorGray200,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -12,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: 3,
    backgroundColor: Color.colorGray200,
    width: 21,
  },
});

export default IOSStatusBar;
