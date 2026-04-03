import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Frame from "../assets/Frame.svg";
import Frame1 from "../assets/Frame1.svg";
import CompanyLogo from "./CompanyLogo";
import ChevronDown from "./ChevronDown";
import {
  Width,
  Height,
  Padding,
  BoxShadow,
  Border,
  Color,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const CourseSwitcher = () => {
  const [companyLogoItems] = useState([
    {
      companyName: "Google" as const,
      image270: require("../assets/image-270.png"),
      showLogo4: true,
      logo4Height: 21,
      logo4Width: 21,
    },
    {
      companyName: "Microsoft" as const,
      image270: require("../assets/image-269.png"),
      showLogo4: true,
      logo4Height: "",
      logo4Width: "",
    },
    {
      companyName: "Apple" as const,
      image270: require("../assets/Apple-Logo-Black-1.svg"),
      showLogo4: true,
      logo4Height: "",
      logo4Width: "",
    },
    {
      companyName: "Amazon" as const,
      image270: require("../assets/image-265.png"),
      showLogo4: true,
      logo4Height: "",
      logo4Width: "",
    },
    {
      companyName: "Meta" as const,
      image270: require("../assets/Group-1.svg"),
      showLogo4: true,
      logo4Height: "",
      logo4Width: "",
    },
    {
      companyName: "Google" as const,
      image270: require("../assets/image-2701.png"),
      showLogo4: false,
      logo4Height: "",
      logo4Width: "",
    },
  ]);

  return (
    <View style={styles.courseSwitcher}>
      <View style={styles.container}>
        <View style={[styles.main, styles.mainFlexBox1]}>
          <Frame
            style={styles.frameIconLayout}
            width={Width.width_32}
            height={Height.height_32}
          />
          <Frame1
            style={[styles.frameIcon2, styles.frameIconLayout]}
            width={Width.width_32}
            height={Height.height_32}
          />
          <View style={[styles.container2, styles.mainFlexBox1]}>
            <View style={styles.logos}>
              {companyLogoItems.map((item, index) => (
                <CompanyLogo
                  key={index}
                  companyName={item.companyName}
                  image270={item.image270}
                  showLogo4={item.showLogo4}
                  logo4Height={item.logo4Height}
                  logo4Width={item.logo4Width}
                />
              ))}
            </View>
            <Text style={[styles.main2, styles.mainFlexBox]}>
              Practicing Top 50 Questions for
            </Text>
            <Text style={[styles.main3, styles.mainFlexBox]}>
              Big Tech Companies
            </Text>
          </View>
        </View>
        <ChevronDown style="Line" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainFlexBox1: {
    flex: 1,
    alignItems: "center",
  },
  frameIconLayout: {
    width: Width.width_32,
    height: Height.height_32,
  },
  mainFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  courseSwitcher: {
    width: Width.width_393,
    paddingHorizontal: Padding.padding_16,
    paddingBottom: Padding.padding_16,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 361,
    boxShadow: BoxShadow.shadow_drop2,
    elevation: 0,
    borderRadius: Border.br_24,
    backgroundColor: Color.yellow10,
    padding: Padding.padding_16,
    gap: Gap.gap_8,
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    gap: Gap.gap_12,
    flexDirection: "row",
  },
  frameIcon2: {
    display: "none",
  },
  container2: {
    gap: Gap.gap_2,
    justifyContent: "center",
  },
  logos: {
    display: "none",
    flexDirection: "row",
    alignItems: "center",
  },
  main2: {
    fontSize: FontSize.fs_14,
    lineHeight: LineHeight.lh_20,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.grey60,
  },
  main3: {
    height: Height.height_22,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_24,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.grey801,
  },
});

export default CourseSwitcher;
