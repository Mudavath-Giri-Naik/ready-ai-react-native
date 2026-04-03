import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";

const LOGO_ORANGE = "#FF6D00";
const PILL_BG = "#1C1C1E";
const PILL_RADIUS = 7;
const PILL_SIZE = 26;

interface AppLogoProps {
  size?: "sm" | "md";
  variant?: "default" | "brand";
}

export const AppLogo = ({ size = "md", variant = "default" }: AppLogoProps) => {
  if (variant === "brand") {
    return <Text style={styles.brandText}>Ready!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.readyText}>Ready</Text>
      <View style={styles.pill}>
        <Text style={styles.aiText}>ai</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  brandText: {
    fontFamily: "Onest_800ExtraBold",
    fontWeight: "900",
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -0.72,
    color: LOGO_ORANGE,
    textShadowColor: LOGO_ORANGE,
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 1,
  },
  readyText: {
    fontFamily: "Onest_800ExtraBold",
    fontWeight: "900",
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -0.72,
    color: LOGO_ORANGE,
    textShadowColor: LOGO_ORANGE,
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 1,
  },
  pill: {
    width: PILL_SIZE,
    height: PILL_SIZE,
    borderRadius: PILL_RADIUS,
    backgroundColor: PILL_BG,
    justifyContent: "center",
    alignItems: "center",
  },
  aiText: {
    fontFamily: "Onest_800ExtraBold",
    fontWeight: "900",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.24,
    color: colors.textInverse,
    textAlign: "center",
    includeFontPadding: false,
    textShadowColor: colors.textInverse,
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 1,
  },
});
