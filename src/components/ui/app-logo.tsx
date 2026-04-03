import { StyleSheet, View, Text } from "react-native";

const LOGO_ORANGE = "#FF6D00";

const ONEST_EXTRA_BOLD = "Onest_800ExtraBold";
const ONEST_BOLD = "Onest_700Bold";

interface AppLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "brand";
}

/**
 * Fully vector logo — no PNGs, always crisp.
 * Uses Onest font for the brand-matching heavy weight.
 *
 * variant="default"  →  Ready  [ai]   (splash / welcome)
 * variant="brand"    →  Ready!         (home top-nav)
 */
export const AppLogo = ({ size = "md", variant = "default" }: AppLogoProps) => {
  const s = SIZE_MAP[size];

  if (variant === "brand") {
    return (
      <View style={styles.row}>
        <Text
          style={[
            styles.readyText,
            { fontSize: s.readyFontSize, lineHeight: s.readyFontSize * 1.15 },
          ]}
        >
          Ready
        </Text>
        <Text
          style={[
            styles.exclamation,
            { fontSize: s.readyFontSize, lineHeight: s.readyFontSize * 1.15 },
          ]}
        >
          !
        </Text>
      </View>
    );
  }

  // default — "Ready" + orange "ai" pill
  return (
    <View style={styles.row}>
      <Text
        style={[
          styles.readyText,
          { fontSize: s.readyFontSize, lineHeight: s.readyFontSize * 1.15 },
        ]}
      >
        Ready
      </Text>
      <View
        style={[
          styles.aiBadge,
          {
            width: s.badgeWidth,
            height: s.badgeHeight,
            borderRadius: s.badgeRadius,
            marginLeft: s.gap,
            transform: [{ translateY: s.badgeOffsetY }],
          },
        ]}
      >
        <Text
          style={[
            styles.aiText,
            { fontSize: s.aiFontSize, lineHeight: s.aiFontSize },
          ]}
        >
          ai
        </Text>
      </View>
    </View>
  );
};

/* ── Size presets ── */
const SIZE_MAP = {
  sm: {
    readyFontSize: 24,
    aiFontSize: 19,
    badgeWidth: 22,
    badgeHeight: 22,
    badgeRadius: 6,
    gap: 4,
    badgeOffsetY: -1,
  },
  md: {
    // Matching exact Figma dimensions provided for Welcome Screen (138x46)
    readyFontSize: 38,
    aiFontSize: 24,
    badgeWidth: 26,
    badgeHeight: 25.8,
    badgeRadius: 7,
    gap: 3,
    badgeOffsetY: -1,
  },
  lg: {
    // Matching exact Figma dimensions provided for splash
    readyFontSize: 50,
    aiFontSize: 31.3,
    badgeWidth: 33.8,
    badgeHeight: 33.7,
    badgeRadius: 9.13,
    gap: 3.91,
    badgeOffsetY: -2,
  },
} as const;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  readyText: {
    fontFamily: ONEST_EXTRA_BOLD,
    color: "#FF5000",
    letterSpacing: -0.5,
    textShadowColor: "#FF5000",
    textShadowOffset: { width: 0.6, height: 0 },
    textShadowRadius: 0.3,
  },
  exclamation: {
    fontFamily: ONEST_EXTRA_BOLD,
    color: LOGO_ORANGE,
    letterSpacing: -0.5,
    textShadowColor: LOGO_ORANGE,
    textShadowOffset: { width: 0.6, height: 0 },
    textShadowRadius: 0.3,
  },
  aiBadge: {
    backgroundColor: "#1C1C1E",
    justifyContent: "center",
    alignItems: "center",
  },
  aiText: {
    fontFamily: ONEST_EXTRA_BOLD,
    color: "#FFFFFF",
    letterSpacing: -0.3,
  },
});

