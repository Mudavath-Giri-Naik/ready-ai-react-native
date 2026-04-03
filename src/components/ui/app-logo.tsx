import { StyleSheet, View, Text } from "react-native";

const LOGO_ORANGE = "#FF6D00";

/* ── Onest font family names (loaded in App.tsx) ── */
const ONEST_BLACK = "Onest_900Black";
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
            borderRadius: s.badgeRadius,
            paddingHorizontal: s.badgePadH,
            paddingVertical: s.badgePadV,
            marginLeft: s.gap,
          },
        ]}
      >
        <Text
          style={[
            styles.aiText,
            { fontSize: s.aiFontSize, lineHeight: s.aiFontSize * 1.2 },
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
    readyFontSize: 20,
    aiFontSize: 15,
    badgeRadius: 7,
    badgePadH: 6,
    badgePadV: 3,
    gap: 3,
  },
  md: {
    readyFontSize: 28,
    aiFontSize: 20,
    badgeRadius: 9,
    badgePadH: 8,
    badgePadV: 3,
    gap: 4,
  },
  lg: {
    readyFontSize: 38,
    aiFontSize: 26,
    badgeRadius: 11,
    badgePadH: 10,
    badgePadV: 4,
    gap: 5,
  },
} as const;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  readyText: {
    fontFamily: ONEST_BLACK,
    color: "#FF5000",
    letterSpacing: -0.5,
    textShadowColor: "#FF5000",
    textShadowOffset: { width: 0.6, height: 0 },
    textShadowRadius: 0.3,
  },
  exclamation: {
    fontFamily: ONEST_BLACK,
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
    fontFamily: ONEST_BOLD,
    color: "#FFFFFF",
    letterSpacing: -0.3,
  },
});

