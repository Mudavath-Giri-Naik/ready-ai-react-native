import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SessionResult } from "@/features/session-result/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

interface SmartSummaryTabProps {
  smartSummary: SessionResult["smartSummary"];
}

export const SmartSummaryTab = ({ smartSummary }: SmartSummaryTabProps) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.sectionTitle}>What worked well</Text>
      {smartSummary.whatWorkedWell.map((item, index) => (
        <View key={`well-${index}`} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Overall takeaways</Text>
      {smartSummary.overallTakeaways.map((item, index) => (
        <View key={`takeaway-${index}`} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.screenPadding,
  },
  sectionTitle: {
    fontSize: typography.sizes.l,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.s,
    marginTop: spacing.m,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: spacing.xs,
    gap: spacing.xs,
  },
  bullet: {
    fontSize: typography.sizes.m,
    color: colors.success,
  },
  bulletText: {
    flex: 1,
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textPrimary,
    lineHeight: typography.sizes.m * 1.5,
  },
});
