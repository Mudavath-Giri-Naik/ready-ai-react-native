import React, { useRef, useCallback } from "react";
import { StyleSheet, Text, View, Pressable, Animated } from "react-native";
import { Image } from "expo-image";
import { Question } from "@/features/home/types";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";

export interface ThemeColors {
  cardBg: string;
  shadow: string;
  badgeBg: string;
}

const DONE: ThemeColors = {
  cardBg: "#D0F8BC",
  shadow: "#00AD00",
  badgeBg: "#51D900",
};

const START_COLORS: ThemeColors = {
  cardBg: "#FFE99C",
  shadow: "#BF9C26",
  badgeBg: "#FFCE00",
};

const UPCOMING: ThemeColors = {
  cardBg: "#EFEFF4",
  shadow: "#8E8E93",
  badgeBg: "#D1D1D6",
};

export type CardVariant = "done" | "start" | "upcoming";

interface QuestionCardProps {
  question: Question;
  variant?: CardVariant;
  onPress: () => void;
  paddingLeft?: number;
  marginBottom?: number;
  customColors?: ThemeColors;
  showStripes?: boolean;
  isSelected?: boolean;
  hideStartBubble?: boolean;
}

export const getColors = (variant: CardVariant) => {
  if (variant === "done") return DONE;
  if (variant === "start") return START_COLORS;
  return UPCOMING;
};

const CardStripes = ({ xOffset = 0 }: { xOffset?: number }) => (
  <>
    <View style={[stripeStyles.stripe1, { left: -10 + xOffset }]} />
    <View style={[stripeStyles.stripe2, { left: 30 + xOffset }]} />
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
});

const QuestionCardComponent = ({
  question,
  variant = "upcoming",
  onPress,
  marginBottom = 8,
  paddingLeft = 48,
  customColors,
  showStripes,
  isSelected,
  hideStartBubble,
}: QuestionCardProps) => {
  const c = customColors || getColors(variant);
  const shouldShowStripes =
    showStripes ?? (variant === "done" || variant === "start");

  const showStartBubble = variant === "start" && !isSelected && !hideStartBubble;

  /* ── Press animation ── */
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  }, [scaleAnim]);

  const onPressOut = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  }, [scaleAnim]);

  return (
    <View
      style={[
        styles.questionRow,
        {
          paddingLeft,
          marginBottom,
          zIndex: variant === "start" ? 10 : 1,
          elevation: variant === "start" ? 10 : 1,
        },
      ]}
    >
      <Pressable
        style={styles.buttonWCompany}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Animated.View
          style={[
            styles.outerContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <View
            style={[styles.cardShadow, { backgroundColor: c.shadow }]}
          >
            <View
              style={[
                styles.company,
                { backgroundColor: c.cardBg, borderColor: c.cardBg },
              ]}
            >
              {shouldShowStripes && <CardStripes />}
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
                style={[
                  styles.badge,
                  { backgroundColor: c.badgeBg, borderColor: c.badgeBg },
                ]}
              >
                {shouldShowStripes && <CardStripes xOffset={-12} />}
                <Text style={styles.badgeNumber}>
                  {question.questionNumber}
                </Text>
              </View>
            </View>
            {showStartBubble && (
              <View style={styles.startBubbleContainer}>
                <View style={styles.startBubble}>
                  <Text style={styles.startText}>START</Text>
                </View>
                <View style={styles.startBubbleTailOuter} />
                <View style={styles.startBubbleTailInner} />
              </View>
            )}
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export const QuestionCard = React.memo(QuestionCardComponent);

const styles = StyleSheet.create({
  questionRow: {
    width: 393,
    height: 97,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    gap: 8,
  },
  buttonWCompany: {
    height: 81,
    width: 206,
  },
  outerContainer: {
    position: "absolute",
    width: 206,
    height: 81,
    left: 0,
    top: 0,
  },
  cardShadow: {
    position: "absolute",
    width: 206,
    left: 0,
    top: 0,
    borderRadius: 30,
    paddingBottom: 8,
  },
  company: {
    width: 206,
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
    left: 132,
    top: 0,
    alignItems: "center",
  },
  startBubbleContainer: {
    position: "absolute",
    top: -34,
    alignSelf: "center",
    alignItems: "center",
    zIndex: 3,
  },
  startBubble: {
    width: 81.24,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E5E5EA",
    borderStyle: "solid",
    backgroundColor: colors.background,
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
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "900",
    fontFamily: typography.fonts.inter.black,
    color: "#13BF69",
    textAlign: "center",
    textShadowColor: "#13BF69",
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 0.5,
  },
  badgeShadow: {
    borderRadius: 30,
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
