import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SessionResult } from "@/features/session-result/types";
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
          <Text style={styles.sparkle}>✦</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Overall takeaways</Text>
      {smartSummary.overallTakeaways.map((item, index) => (
        <View key={`takeaway-${index}`} style={styles.bulletRow}>
          <Text style={styles.sparkle}>✦</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.fonts.inter.semiBold,
    color: "#1C1C1E",
    marginBottom: 12,
    marginTop: 20,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 8,
    alignItems: "flex-start",
  },
  sparkle: {
    fontSize: 14,
    color: "#13BF69",
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.fonts.inter.normal,
    color: "#3C3C43",
    lineHeight: 21,
  },
});
