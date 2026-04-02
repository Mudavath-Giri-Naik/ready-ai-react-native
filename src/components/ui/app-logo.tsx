import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";

const LOGO_ORANGE = "#FF6D00";
const PILL_BG = "#1C1C1E";
const PILL_RADIUS = 7;
const PILL_SIZE = 26;

interface AppLogoProps {
  size?: "sm" | "md";
}

export const AppLogo = ({ size = "md" }: AppLogoProps) => {
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
  readyText: {
    fontFamily: "Onest_800ExtraBold",
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -0.72,
    color: LOGO_ORANGE,
  },
  pill: {
    width: PILL_SIZE,
    height: PILL_SIZE,
    borderRadius: PILL_RADIUS,
    backgroundColor: PILL_BG,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  aiText: {
    fontFamily: "Onest_800ExtraBold",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.24,
    color: colors.textInverse,
    textAlign: "center",
    includeFontPadding: false,
  },
});
