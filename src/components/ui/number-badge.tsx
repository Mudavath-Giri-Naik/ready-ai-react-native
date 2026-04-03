import { StyleSheet, Text, View } from "react-native";
import { typography } from "@/theme/typography";

const BADGE_COLORS = {
  activeBg: "#FFB300",
  activeText: "#FFFFFF",
  startBg: "#4CAF50",
  startText: "#FFFFFF",
  upcomingBg: "#CFD8DC",
  upcomingText: "#546E7A",
} as const;

type BadgeVariant = "active" | "start" | "upcoming";

interface NumberBadgeProps {
  number: number;
  variant: BadgeVariant;
}

export const NumberBadge = ({ number, variant }: NumberBadgeProps) => {
  const bgColor =
    variant === "active"
      ? BADGE_COLORS.activeBg
      : variant === "start"
        ? BADGE_COLORS.startBg
        : BADGE_COLORS.upcomingBg;

  const textColor =
    variant === "active"
      ? BADGE_COLORS.activeText
      : variant === "start"
        ? BADGE_COLORS.startText
        : BADGE_COLORS.upcomingText;

  return (
    <View style={[styles.badge, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.bold,
    textAlign: "center",
  },
});
