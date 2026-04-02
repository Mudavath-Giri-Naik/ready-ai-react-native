import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Feather from "@expo/vector-icons/Feather";
import { KeyMoment } from "@/features/session-result/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

interface KeyMomentsTabProps {
  keyMoments: KeyMoment[];
  audioDurationSeconds: number;
}

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const KeyMomentsTab = ({ keyMoments, audioDurationSeconds }: KeyMomentsTabProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.audioBar}>
        <Feather name="play-circle" size={spacing.xxl} color={colors.primary} />
        <View style={styles.progressBarTrack}>
          <View style={styles.progressBarFill} />
        </View>
        <Text style={styles.durationText}>{formatDuration(audioDurationSeconds)}</Text>
      </View>

      <FlashList
        data={keyMoments}
        keyExtractor={(item) => item.timestamp}
        renderItem={({ item }) => (
          <View style={styles.momentRow}>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
            <Text style={styles.description} numberOfLines={3}>
              {item.description}
            </Text>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    item.type === "positive" ? colors.success : colors.error,
                },
              ]}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.screenPadding,
  },
  audioBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.s,
    borderRadius: spacing.cardRadius,
    marginBottom: spacing.m,
  },
  progressBarTrack: {
    flex: 1,
    height: spacing.xxs,
    backgroundColor: colors.border,
    borderRadius: spacing.xxxs,
  },
  progressBarFill: {
    width: "30%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: spacing.xxxs,
  },
  durationText: {
    fontSize: typography.sizes.xs,
    fontFamily: typography.fonts.inter.medium,
    color: colors.textSecondary,
  },
  momentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: spacing.s,
    gap: spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  timestamp: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.primary,
    minWidth: spacing.xxxl,
  },
  description: {
    flex: 1,
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textPrimary,
    lineHeight: typography.sizes.s * 1.5,
  },
  dot: {
    width: spacing.xs,
    height: spacing.xs,
    borderRadius: spacing.xxs,
    marginTop: spacing.xxs,
  },
});
