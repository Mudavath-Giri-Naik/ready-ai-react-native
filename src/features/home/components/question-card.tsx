import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Question } from "@/features/home/types";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";

const DONE = {
  cardBg: "#D0F8BC",
  shadow: "#00AD00",
  badgeBg: "#51D900",
} as const;

const START_COLORS = {
  cardBg: "#FFE99C",
  shadow: "#BF9C26",
  badgeBg: "#FFCE00",
} as const;

const UPCOMING = {
  cardBg: "#EFEFF4",
  shadow: "#8E8E93",
  badgeBg: "#D1D1D6",
} as const;

type CardVariant = "done" | "start" | "upcoming";

interface QuestionCardProps {
  question: Question;
  variant: CardVariant;
  onPress: () => void;
  paddingLeft?: number;
}

const getColors = (variant: CardVariant) => {
  if (variant === "done") return DONE;
  if (variant === "start") return START_COLORS;
  return UPCOMING;
};

const DiagonalStripes = () => (
  <>
    <View style={stripeStyles.stripe1} />
    <View style={stripeStyles.stripe2} />
  </>
);

const BadgeStripes = () => (
  <>
    <View style={stripeStyles.badgeStripe1} />
    <View style={stripeStyles.badgeStripe2} />
  </>
);

const stripeStyles = StyleSheet.create({
  stripe1: {
    position: "absolute",
    width: 28,
    height: 120,
    left: -10,
    top: -30,
    backgroundColor: "rgba(255,255,255,0.35)",
    transform: [{ rotate: "45deg" }],
  },
  stripe2: {
    position: "absolute",
    width: 20,
    height: 180,
    left: 30,
    top: -50,
    backgroundColor: "rgba(255,255,255,0.35)",
    transform: [{ rotate: "45deg" }],
  },
  badgeStripe1: {
    position: "absolute",
    width: 25,
    height: 70,
    left: -8,
    top: -10,
    backgroundColor: "rgba(255,255,255,0.35)",
    transform: [{ rotate: "30deg" }],
  },
  badgeStripe2: {
    position: "absolute",
    width: 20,
    height: 95,
    left: 24,
    top: -10,
    backgroundColor: "rgba(255,255,255,0.35)",
    transform: [{ rotate: "30deg" }],
  },
});

const QuestionCardComponent = ({
  question,
  variant,
  onPress,
  paddingLeft = 48,
}: QuestionCardProps) => {
  const c = getColors(variant);
  const showStripes = variant === "done" || variant === "start";

  return (
    <Pressable
      style={[
        styles.questionRow,
        {
          paddingLeft,
          zIndex: variant === "start" ? 10 : 1,
          elevation: variant === "start" ? 10 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.buttonWCompany}>
        <View style={styles.outerContainer}>
          <View
            style={[styles.cardShadow, { backgroundColor: c.shadow }]}
          >
            <View
              style={[
                styles.company,
                { backgroundColor: c.cardBg, borderColor: c.cardBg },
              ]}
            >
              {showStripes && <DiagonalStripes />}
              <View style={styles.cardContent}>
                <Text style={styles.companyName} numberOfLines={1}>
                  {question.companyName}
                </Text>
                <Image
                  source={{ uri: question.companyLogoUrl }}
                  style={styles.companyLogo}
                  cachePolicy="memory-disk"
                />
              </View>
            </View>
          </View>

          <View style={styles.badgePosition}>
            <View
              style={[styles.badgeShadow, { backgroundColor: c.shadow }]}
            >
              <View
                style={[styles.badge, { backgroundColor: c.badgeBg, borderColor: c.badgeBg }]}
              >
                {showStripes && <BadgeStripes />}
                <Text style={styles.badgeNumber}>
                  {question.questionNumber}
                </Text>
              </View>
            </View>
            {variant === "start" && (
              <View style={styles.startBubbleContainer}>
                <View style={styles.startBubble}>
                  <Text style={styles.startText}>START</Text>
                </View>
                <View style={styles.startBubbleTailOuter} />
                <View style={styles.startBubbleTailInner} />
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export const QuestionCard = React.memo(QuestionCardComponent);

const styles = StyleSheet.create({
  questionRow: {
    alignSelf: "stretch",
    height: 97,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    marginBottom: 16,
    gap: 8,
  },
  buttonWCompany: {
    height: 81,
    width: 212,
  },
  outerContainer: {
    position: "absolute",
    width: 212,
    height: 81,
    left: 0,
    top: 0,
  },
  cardShadow: {
    position: "absolute",
    width: 212,
    left: 0,
    top: 0,
    borderRadius: 30,
    paddingBottom: 8,
  },
  company: {
    width: 212,
    height: 73,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 5,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 90,
    gap: 6,
  },
  companyName: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontWeight: "600",
    fontFamily: typography.fonts.inter.semiBold,
    color: "#0B0B0D",
    textAlign: "left",
  },
  companyLogo: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  badgePosition: {
    position: "absolute",
    left: 138,
    top: -4,
    alignItems: "center",
  },
  startBubbleContainer: {
    position: "absolute",
    top: -42,
    alignSelf: "center",
    alignItems: "center",
    zIndex: 3,
  },
  startBubble: {
    minWidth: 72,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E5E5EA",
    borderStyle: "solid",
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  startBubbleTailOuter: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#E5E5EA",
    marginTop: -2,
  },
  startBubbleTailInner: {
    position: "absolute",
    bottom: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: colors.background,
  },
  startText: {
    fontSize: 15,
    letterSpacing: 0.51,
    lineHeight: 17,
    textTransform: "uppercase",
    fontWeight: "900",
    fontFamily: typography.fonts.inter.bold,
    color: "#13BF69",
    textAlign: "center",
  },
  badgeShadow: {
    borderRadius: 30,
    paddingBottom: 6,
  },
  badge: {
    width: 74,
    height: 74,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 5,
  },
  badgeNumber: {
    fontSize: 36,
    lineHeight: 49,
    fontWeight: "800",
    fontFamily: typography.fonts.inter.bold,
    color: colors.textInverse,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 0,
  },
});
