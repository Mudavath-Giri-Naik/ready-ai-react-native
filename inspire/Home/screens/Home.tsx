import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import TopNav from "../components/TopNav";
import CourseSwitcher from "../components/CourseSwitcher";
import Question from "../components/Question";
import CompanyLogo from "../components/CompanyLogo";
import Button11 from "../assets/Button1.svg";
import Trophy1 from "../assets/Trophy1.svg";
import MaskGroup from "../assets/Mask-Group.svg";
import Trophy2 from "../assets/Trophy2.svg";
import ProPromo from "../components/ProPromo";
import FrameComponent from "../components/FrameComponent";
import IOSStatusBar from "../components/IOSStatusBar";
import {
  Gap,
  Padding,
  Height,
  Width,
  Color,
  Border,
  StyleVariable,
  LetterSpacing,
  FontFamily,
} from "../GlobalStyles";

const Home = () => {
  return (
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <TopNav />
      <CourseSwitcher />
      <View style={styles.contentsParent}>
        <ScrollView
          style={styles.contents}
          contentContainerStyle={styles.contentsContainerContent}
        >
          <Question onTap={false} state="Done" showTrophy={false} />
          <View style={[styles.question, styles.questionSpaceBlock2]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <Image
                    style={styles.recIcon}
                    resizeMode="cover"
                    source={require("../assets/Rec1.png")}
                  />
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe, styles.phonepeFlexBox]}>
                        Amazon
                      </Text>
                      <CompanyLogo
                        companyName="Amazon"
                        image270={require("../assets/image-2651.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.button, styles.buttonLayout]}>
                  <Button11 style={styles.buttonIcon} width={74} height={74} />
                  <View
                    style={[styles.autoLayoutHorizontal, styles.autoLayout]}
                  >
                    <Pressable
                      style={[styles.autoLayoutHorizontal2, styles.autoLayout]}
                    >
                      <Text style={[styles.start, styles.phonepeFlexBox]}>
                        START
                      </Text>
                    </Pressable>
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/Frame2.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Trophy1
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question2, styles.questionSpaceBlock1]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe2, styles.phonepeFlexBox]}>
                        PhonePe
                      </Text>
                      <CompanyLogo
                        companyName="PhonePe"
                        image270={require("../assets/image-268.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <ProPromo flagStyle="Filled" flagStyle1="Filled" />
          <View style={[styles.question3, styles.questionSpaceBlock]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe3, styles.phonepeFlexBox]}>
                        Google
                      </Text>
                      <CompanyLogo
                        companyName="Google"
                        image270={require("../assets/image-2702.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button3.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question4, styles.questionSpaceBlock1]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe4, styles.phonepeFlexBox]}>
                        Microsoft
                      </Text>
                      <CompanyLogo
                        companyName="Microsoft"
                        image270={require("../assets/image-2691.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question5, styles.questionSpaceBlock2]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe4, styles.phonepeFlexBox]}>
                        Facebook
                      </Text>
                      <CompanyLogo
                        companyName="Meta"
                        image270={require("../assets/Group-11.svg")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question6, styles.questionSpaceBlock2]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe6, styles.phonepeFlexBox]}>
                        Amazon
                      </Text>
                      <CompanyLogo
                        companyName="Amazon"
                        image270={require("../assets/image-2651.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question7, styles.questionSpaceBlock2]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe4, styles.phonepeFlexBox]}>
                        Facebook
                      </Text>
                      <CompanyLogo
                        companyName="Meta"
                        image270={require("../assets/Group-11.svg")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question8, styles.questionSpaceBlock1]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe4, styles.phonepeFlexBox]}>
                        Microsoft
                      </Text>
                      <CompanyLogo
                        companyName="Microsoft"
                        image270={require("../assets/image-2691.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={[styles.question9, styles.questionSpaceBlock]}>
            <View style={styles.buttonWCompany}>
              <View style={[styles.container, styles.buttonLayout]}>
                <View style={[styles.company, styles.companyLayout]}>
                  <View style={[styles.rec, styles.recLayout]}>
                    <View style={[styles.base, styles.recLayout]} />
                    <MaskGroup
                      style={[styles.maskGroupIcon, styles.container2Position]}
                      width={Width.width_196}
                      height={Height.height_63}
                    />
                  </View>
                  <View style={[styles.container2, styles.container2Position]}>
                    <Text style={styles.topQuestion}>Top question @</Text>
                    <View style={styles.container3}>
                      <Text style={[styles.phonepe3, styles.phonepeFlexBox]}>
                        Google
                      </Text>
                      <CompanyLogo
                        companyName="Google"
                        image270={require("../assets/image-2702.png")}
                        showLogo4
                        logo4Height={22}
                        logo4Width={22}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.button, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/Button2.png")}
                />
              </View>
            </View>
            <Trophy2
              style={styles.trophyIcon}
              width={Width.width_70}
              height={Height.height_70}
            />
          </View>
          <View style={styles.bg}>
            <View style={[styles.topGradient, styles.gradientLayout]}>
              <View style={[styles.fill, styles.fillPosition]} />
            </View>
            <View style={[styles.bottomGradient, styles.gradientLayout]}>
              <View style={[styles.fill2, styles.fillPosition]} />
            </View>
          </View>
        </ScrollView>
        <FrameComponent />
      </View>
      <IOSStatusBar showBackground={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentsContainerContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 8,
    height: 639,
  },
  homeScrollViewContent: {
    flexDirection: "column",
    paddingTop: 49,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 852,
    flex: 1,
  },
  questionSpaceBlock2: {
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    height: Height.height_97,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonLayout: {
    height: Height.height_90_63,
    position: "absolute",
  },
  companyLayout: {
    height: Height.height_73,
    width: Width.width_206,
    left: 0,
  },
  container2Position: {
    top: "50%",
    position: "absolute",
  },
  phonepeFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  autoLayout: {
    width: 81,
    flexDirection: "row",
  },
  questionSpaceBlock1: {
    paddingLeft: 120,
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    alignItems: "center",
    flexDirection: "row",
    height: Height.height_97,
    alignSelf: "stretch",
  },
  recLayout: {
    backgroundColor: Color.grey15,
    borderRadius: Border.br_30,
    height: Height.height_73,
    width: Width.width_206,
    left: 0,
    top: 0,
    position: "absolute",
  },
  questionSpaceBlock: {
    paddingLeft: 160,
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    alignItems: "center",
    flexDirection: "row",
    height: Height.height_97,
    alignSelf: "stretch",
  },
  gradientLayout: {
    height: 426,
    overflow: "hidden",
    width: Width.width_393,
  },
  fillPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  home: {
    width: "100%",
    maxWidth: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  contentsParent: {
    height: 655,
    width: Width.width_393,
  },
  contents: {
    maxWidth: 393,
    zIndex: 1,
    width: Width.width_393,
    flex: 1,
  },
  question: {
    paddingLeft: Padding.padding_80,
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    height: Height.height_97,
    alignSelf: "stretch",
    zIndex: 1,
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
  },
  company: {
    top: 0,
    height: Height.height_73,
    position: "absolute",
  },
  recIcon: {
    borderRadius: Border.br_30,
    height: Height.height_73,
    width: Width.width_206,
    left: 0,
    top: 0,
    position: "absolute",
  },
  container2: {
    marginTop: -36,
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_0,
    gap: Gap.gap_2,
    justifyContent: "center",
    height: Height.height_73,
    width: Width.width_206,
    left: 0,
  },
  topQuestion: {
    width: Width.width_166,
    color: Color.grey70,
    display: "none",
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  container3: {
    gap: Gap.gap_4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  phonepe: {
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorGray200,
    height: Height.height_16,
    display: "flex",
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
    width: 56,
  },
  button: {
    top: -9,
    left: 124,
    width: Width.width_90_63,
  },
  buttonIcon: {
    top: 8,
    left: 8,
    width: 74,
    height: 74,
    position: "absolute",
  },
  autoLayoutHorizontal: {
    marginLeft: -41,
    top: -36,
    bottom: 80,
    left: "50%",
    paddingTop: 1,
    minWidth: 80,
    position: "absolute",
  },
  autoLayoutHorizontal2: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: Color.grey20,
    borderWidth: 2,
    paddingLeft: 14,
    paddingTop: 14,
    paddingRight: 15,
    paddingBottom: 13,
    zIndex: 0,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  start: {
    height: 17,
    width: 55,
    fontSize: 15,
    letterSpacing: 0.51,
    lineHeight: 17,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.green40,
    textAlign: "center",
    justifyContent: "center",
  },
  frameIcon: {
    height: Height.height_10,
    width: Width.width_20,
    top: 45,
    left: 31,
    position: "absolute",
    zIndex: 1,
  },
  trophyIcon: {
    height: Height.height_70,
    width: Width.width_70,
    display: "none",
  },
  question2: {
    zIndex: 2,
  },
  rec: {
    overflow: "hidden",
  },
  base: {
    display: "none",
  },
  maskGroupIcon: {
    marginTop: -31,
    left: 4,
    width: Width.width_196,
    height: Height.height_63,
    display: "none",
  },
  phonepe2: {
    width: 62,
    color: Color.colorGray200,
    height: Height.height_16,
    display: "flex",
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  question3: {
    zIndex: 4,
  },
  phonepe3: {
    width: 50,
    color: Color.colorGray200,
    height: Height.height_16,
    display: "flex",
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  question4: {
    zIndex: 5,
  },
  phonepe4: {
    width: 66,
    color: Color.colorGray200,
    height: Height.height_16,
    display: "flex",
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  question5: {
    zIndex: 6,
    paddingLeft: Padding.padding_80,
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    height: Height.height_97,
    alignSelf: "stretch",
  },
  question6: {
    paddingLeft: 40,
    zIndex: 7,
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    height: Height.height_97,
    alignSelf: "stretch",
  },
  phonepe6: {
    color: Color.colorGray200,
    height: Height.height_16,
    display: "flex",
    textAlign: "left",
    lineHeight: StyleVariable.lineHeightS,
    letterSpacing: LetterSpacing.ls__0_1,
    fontSize: StyleVariable.textSizeM,
    width: 56,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  question7: {
    zIndex: 8,
    paddingLeft: Padding.padding_80,
    gap: Gap.gap_8,
    paddingBottom: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingTop: Padding.padding_8,
    height: Height.height_97,
    alignSelf: "stretch",
  },
  question8: {
    zIndex: 9,
  },
  question9: {
    zIndex: 10,
  },
  bg: {
    height: 852,
    top: -213,
    zIndex: 11,
    right: 0,
    display: "none",
    left: 0,
    position: "absolute",
    width: Width.width_393,
  },
  topGradient: {
    zIndex: 2,
  },
  fill: {
    backgroundColor: Color.primary20,
  },
  bottomGradient: {
    zIndex: 1,
  },
  fill2: {
    backgroundColor: Color.primary10,
  },
});

export default Home;
