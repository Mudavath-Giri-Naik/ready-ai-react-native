import * as React from "react";
import { StyleSheet, View } from "react-native";
import ButtonWCompany from "./ButtonWCompany";
import Trophy from "../assets/Trophy.svg";
import { Height, Padding, Gap, Width } from "../GlobalStyles";

export type QuestionType = {
  showTrophy?: boolean;

  /** Variant props */
  onTap?: boolean;
  state?: string;
};

const Question = ({
  onTap = false,
  state = "Upnext",
  showTrophy = false,
}: QuestionType) => {
  return (
    <View style={styles.question}>
      <ButtonWCompany
        direction="Left"
        state="Default"
        company="PhonePe"
        questionDescription={false}
        companyName="PhonePe"
        showLogo4
        logo4Height={22}
        logo4Width={22}
      />
      {!!showTrophy && (
        <Trophy
          style={styles.trophyIcon}
          width={Width.width_70}
          height={Height.height_70}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    alignSelf: "stretch",
    height: Height.height_97,
    flexDirection: "row",
    paddingLeft: Padding.padding_48,
    paddingTop: Padding.padding_8,
    paddingRight: Padding.padding_8,
    paddingBottom: Padding.padding_8,
    gap: Gap.gap_8,
    zIndex: 0,
  },
  trophyIcon: {
    height: Height.height_70,
    width: Width.width_70,
    display: "none",
  },
});

export default Question;
