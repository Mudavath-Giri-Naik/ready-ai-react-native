import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Color, Height, Width, Border } from "../GlobalStyles";

export type CompanyLogoType = {
  image270?: ImageSourcePropType;
  showLogo4?: boolean;

  /** Variant props */
  companyName?:
    | "Google"
    | "Microsoft"
    | "Apple"
    | "Amazon"
    | "Meta"
    | "PhonePe";

  /** Style props */
  logo4Height?: number | string;
  logo4Width?: number | string;
};

const getLogo4Container1Style = (styleKey: string) => {
  switch (styleKey) {
    case "Microsoft":
    case "Apple":
    case "Amazon":
    case "Meta":
      return {
        marginLeft: -3,
      };
    case "PhonePe":
      return {
        borderRadius: 687,
        borderColor: Color.colorLightgoldenrodyellow,
        borderWidth: 1,
      };
  }
};
const getImage270IconStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Microsoft":
      return {
        height: "62.98%",
        width: "62.5%",
        top: "16.35%",
        right: "20.19%",
        bottom: "20.67%",
        left: "17.31%",
      };
    case "Apple":
      return {
        height: "60.1%",
        width: "49.04%",
        top: "17.79%",
        right: "26.92%",
        bottom: "22.12%",
        left: "24.04%",
      };
    case "Amazon":
      return {
        height: "58.65%",
        width: "64.9%",
        top: "18.75%",
        right: "19.23%",
        bottom: "22.6%",
        left: "15.87%",
      };
    case "Meta":
      return {
        height: "45.67%",
        width: "68.27%",
        top: "24.04%",
        right: "19.71%",
        bottom: "30.29%",
        left: "12.02%",
        color: Color.colorDodgerblue,
      };
    case "PhonePe":
      return {
        height: "80.45%",
        width: "50.45%",
        top: "10%",
        right: "24.55%",
        bottom: "9.55%",
        left: "25%",
      };
  }
};
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CompanyLogo = ({
  companyName = "Accenture",
  image270,
  showLogo4,
  logo4Height,
  logo4Width,
}: CompanyLogoType) => {
  const variantKey = `${companyName}`;

  const logo4Style = useMemo(() => {
    return {
      ...getStyleValue("height", logo4Height),
      ...getStyleValue("width", logo4Width),
    };
  }, [logo4Height, logo4Width]);

  return (
    !!showLogo4 && (
      <View
        style={[styles.root, getLogo4Container1Style(variantKey), logo4Style]}
      >
        <Image
          style={[styles.image270Icon, getImage270IconStyle(variantKey)]}
          resizeMode="cover"
          source={image270}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_20_83,
    width: Width.width_20_83,
    borderRadius: Border.br_555,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.grey10,
    borderWidth: 1,
    overflow: "hidden",
  },
  image270Icon: {
    position: "absolute",
    height: "69.23%",
    width: "67.79%",
    top: "13.46%",
    right: "18.27%",
    bottom: "17.31%",
    left: "13.94%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default CompanyLogo;
