import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CompanyLogo from "./CompanyLogo";
import {
  Height,
  Width,
  StyleVariable,
  LetterSpacing,
  Border,
  Padding,
  Gap,
  FontFamily,
  Color,
} from "../GlobalStyles";

export type ButtonWCompanyType = {
  company?: string;
  questionDescription?: boolean;
  companyName?:
    | "Google"
    | "Microsoft"
    | "Apple"
    | "Amazon"
    | "Meta"
    | "PhonePe";
  showLogo4?: boolean;
  logo4Height?: string;
  logo4Width?: string;

  /** Variant props */
  direction?: string;
  state?: string;
};

const ButtonWCompany = ({
  direction = "Left",
  state = "Default",
  company = "PhonePe",
  questionDescription = false,
  companyName = "Google",
  showLogo4,
  logo4Height,
  logo4Width,
}: ButtonWCompanyType) => {
  return (
    <View style={styles.buttonWCompany}>
      <View style={[styles.container, styles.containerLayout]}>
        <View style={[styles.company, styles.companyLayout]}>
          <Image
            style={[styles.recIcon, styles.companyLayout]}
            resizeMode="cover"
            source={require("../assets/Rec.png")}
          />
          <View style={[styles.container2, styles.companyLayout]}>
            {!!questionDescription && (
              <Text style={[styles.topQuestion, styles.phonepeTypo]}>
                Top question @
              </Text>
            )}
            <View style={styles.container3}>
              <Text style={[styles.phonepe, styles.phonepeTypo]}>
                {company}
              </Text>
              <CompanyLogo
                companyName={companyName}
                image270={require("../assets/image-268.png")}
                showLogo4={showLogo4}
                logo4Height={logo4Height}
                logo4Width={logo4Width}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.buttonIcon, styles.containerLayout]}
          resizeMode="cover"
          source={require("../assets/Button.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    height: Height.height_90_63,
    position: "absolute",
  },
  companyLayout: {
    height: Height.height_73,
    width: Width.width_206,
    left: 0,
    position: "absolute",
  },
  phonepeTypo: {
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
  },
  buttonWCompany: {
    height: Height.height_81,
    width: Width.width_212,
  },
  container: {
    width: Width.width_206,
    left: 0,
    height: Height.height_90_63,
    top: 0,
    position: "absolute",
  },
  company: {
    top: 0,
    height: Height.height_73,
  },
  recIcon: {
    borderRadius: Border.br_30,
    top: 0,
    height: Height.height_73,
  },
  container2: {
    marginTop: -36,
    top: "50%",
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_0,
    gap: Gap.gap_2,
    justifyContent: "center",
  },
  topQuestion: {
    width: Width.width_166,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.grey70,
    display: "none",
  },
  container3: {
    flexDirection: "row",
    gap: Gap.gap_4,
    alignItems: "center",
    justifyContent: "center",
  },
  phonepe: {
    height: Height.height_16,
    width: 62,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorGray200,
    display: "flex",
    alignItems: "center",
  },
  buttonIcon: {
    top: -9,
    left: 124,
    width: Width.width_90_63,
    height: Height.height_90_63,
    position: "absolute",
  },
});

export default ButtonWCompany;
