import * as React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import Divider1 from "../assets/Divider.svg";
import Vector41 from "../assets/Vector4.svg";
import Vector51 from "../assets/Vector5.svg";
import Vector6 from "../assets/Vector6.svg";
import Vector7 from "../assets/Vector7.svg";
import Vector8 from "../assets/Vector8.svg";
import Vector9 from "../assets/Vector9.svg";
import HomeIndicator from "./HomeIndicator";
import {
  StyleVariable,
  Width,
  Color,
  FontFamily,
  LetterSpacing,
  Height,
  MinWidth,
  Padding,
} from "../GlobalStyles";

export type DividerType = {
  showCreationPrompt?: boolean;
  showBottomNavTabs?: boolean;
};

const Divider = ({
  showCreationPrompt = false,
  showBottomNavTabs = false,
}: DividerType) => {
  return (
    <View style={styles.bottomAppBar}>
      {!!showBottomNavTabs && (
        <Divider1
          style={styles.dividerIcon}
          width={Width.width_393}
          height={Height.height_1}
        />
      )}
      {!!showCreationPrompt && (
        <View style={[styles.creationPrompt, styles.bottomNavTabsSpaceBlock]}>
          <View style={[styles.bottomBarCreationUnit, styles.contentFlexBox]}>
            <View style={[styles.content, styles.contentFlexBox]}>
              <View style={styles.avatars}>
                <Image
                  style={[
                    styles.stanczykByJanMatejko1,
                    styles.vectorIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/Stan-czyk-by-Jan-Matejko-1.png")}
                />
              </View>
              <Text style={styles.prompt}>Add a comment</Text>
            </View>
            <View style={[styles.trailingIcon, styles.trailingIconFlexBox]}>
              <View style={styles.icon}>
                <Vector41
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                />
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={[styles.bottomNavTabs, styles.bottomNavTabsSpaceBlock]}>
        <View style={[styles.navTabmobile, styles.trailingIconFlexBox]}>
          <View style={[styles.navIcon, styles.navIconLayout]}>
            <Vector51 style={[styles.vectorIcon2, styles.vectorIconClr]} />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Home</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
        <View style={[styles.navTabmobile, styles.trailingIconFlexBox]}>
          <View style={[styles.navIcon, styles.navIconLayout]}>
            <Vector6 style={[styles.vectorIcon3, styles.label2Clr]} />
          </View>
          <Text style={[styles.label2, styles.label2Clr]}>Become</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
        <View style={[styles.navTabmobile, styles.trailingIconFlexBox]}>
          <View style={[styles.navIcon, styles.navIconLayout]}>
            <Vector7 style={[styles.vectorIcon4, styles.vectorIconClr]} />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Jobs</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
        <View style={[styles.navTabmobile, styles.trailingIconFlexBox]}>
          <View style={[styles.navIcon, styles.navIconLayout]}>
            <Vector8 style={[styles.vectorIcon4, styles.vectorIconClr]} />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Salaries</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
        <View style={[styles.navTabmobile, styles.trailingIconFlexBox]}>
          <View style={styles.navIconLayout}>
            <Vector9 style={[styles.vectorIcon6, styles.vectorIconClr]} />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Inbox</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
      </View>
      <HomeIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavTabsSpaceBlock: {
    paddingTop: StyleVariable.spacingM,
    justifyContent: "center",
    display: "none",
    width: Width.width_393,
  },
  contentFlexBox: {
    gap: StyleVariable.spacingS,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
  },
  trailingIconFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navIconLayout: {
    zIndex: 0,
    height: StyleVariable.iconSizeM,
    width: StyleVariable.iconSizeM,
  },
  vectorIconClr: {
    color: Color.colorGray100,
    overflow: "hidden",
  },
  labelTypo: {
    zIndex: 1,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: StyleVariable.lineHeightXS,
    fontSize: StyleVariable.textSizeXS,
    letterSpacing: LetterSpacing.ls__0_1,
    alignSelf: "stretch",
  },
  label2Clr: {
    color: Color.grey80,
    overflow: "hidden",
  },
  bottomAppBar: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  dividerIcon: {
    height: Height.height_1,
    display: "none",
    maxWidth: "100%",
    width: Width.width_393,
    overflow: "hidden",
  },
  creationPrompt: {
    paddingHorizontal: StyleVariable.spacingL,
  },
  bottomBarCreationUnit: {
    borderRadius: StyleVariable.roundingXXL,
    backgroundColor: Color.grey10,
    padding: StyleVariable.spacingXS,
  },
  content: {
    padding: StyleVariable.spacingXXXS,
    flex: 1,
  },
  avatars: {
    height: StyleVariable.iconSizeMPlus,
    width: StyleVariable.iconSizeMPlus,
    borderRadius: StyleVariable.roundingFull,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  stanczykByJanMatejko1: {
    height: "165.71%",
    width: "165.71%",
    top: "-5.71%",
    right: "-22.5%",
    bottom: "-60%",
    left: "-43.21%",
    overflow: "hidden",
  },
  prompt: {
    fontSize: StyleVariable.textSizeM,
    lineHeight: StyleVariable.lineHeightM,
    fontFamily: FontFamily.interRegular,
    color: Color.grey60,
    textAlign: "left",
    letterSpacing: LetterSpacing.ls__0_1,
    flex: 1,
  },
  trailingIcon: {
    height: StyleVariable.iconSizeL,
    padding: StyleVariable.spacingXS,
    flexDirection: "row",
  },
  icon: {
    height: StyleVariable.iconSizeMMinus,
    width: StyleVariable.iconSizeMMinus,
  },
  vectorIcon: {
    height: "83.5%",
    width: "83.5%",
    top: "8.5%",
    right: "8%",
    bottom: "8%",
    left: "8.5%",
    color: Color.grey70,
    overflow: "hidden",
  },
  bottomNavTabs: {
    paddingHorizontal: StyleVariable.spacingS,
    flexDirection: "row",
    alignItems: "center",
  },
  navTabmobile: {
    paddingTop: StyleVariable.spacingXXXS,
    minWidth: MinWidth.min_w_48,
    flex: 1,
  },
  navIcon: {
    overflow: "hidden",
  },
  vectorIcon2: {
    width: "77.92%",
    right: "10.83%",
    left: "11.25%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    color: Color.colorGray100,
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
  },
  label: {
    color: Color.colorGray100,
    overflow: "hidden",
  },
  badge: {
    marginLeft: 4,
    top: -5,
    left: "50%",
    borderRadius: StyleVariable.roundingM,
    backgroundColor: Color.red40,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: StyleVariable.strokeWidthXL,
    paddingHorizontal: StyleVariable.spacingXXS,
    paddingVertical: Padding.padding_0,
    zIndex: 2,
    position: "absolute",
    justifyContent: "center",
    display: "none",
    alignItems: "center",
  },
  badgeText: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: StyleVariable.lineHeightXS,
    fontSize: StyleVariable.textSizeXS,
    letterSpacing: LetterSpacing.ls__0_1,
    alignSelf: "stretch",
  },
  vectorIcon3: {
    height: "89.58%",
    width: "97.5%",
    top: "5.42%",
    right: "1.25%",
    bottom: "5%",
    left: "1.25%",
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
  },
  label2: {
    zIndex: 1,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: StyleVariable.lineHeightXS,
    fontSize: StyleVariable.textSizeXS,
    letterSpacing: LetterSpacing.ls__0_1,
    alignSelf: "stretch",
  },
  vectorIcon4: {
    width: "83.33%",
    right: "8.33%",
    left: "8.33%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    color: Color.colorGray100,
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
  },
  vectorIcon6: {
    width: "82.08%",
    right: "7.5%",
    left: "10.42%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    color: Color.colorGray100,
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
  },
});

export default Divider;
