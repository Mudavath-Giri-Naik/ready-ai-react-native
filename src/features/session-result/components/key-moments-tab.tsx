import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { KeyMoment } from "@/features/session-result/types";
import { typography } from "@/theme/typography";

interface KeyMomentsTabProps {
  keyMoments: KeyMoment[];
  audioDurationSeconds: number;
}

const PLAYER = {
  cardBg: "#FFF1E5",
  playBg: "#FFFFFF",
  trackBg: "#FFD0A6",
  fillBg: "#FF5000",
  labelColor: "#BF5F0A",
  timeColor: "#8E8E93",
  timestampColor: "#0081FB",
} as const;

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const KeyMomentsTab = ({ keyMoments, audioDurationSeconds }: KeyMomentsTabProps) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Audio Player */}
      <View style={styles.playerCard}>
        <Pressable style={styles.playButton}>
          <Ionicons name="play" size={24} color="#BF5F0A" />
        </Pressable>
        <View style={styles.playerContent}>
          <Text style={styles.playerLabel}>Mock Interview</Text>
          <View style={styles.progressTrackWrapper}>
            <View style={styles.progressTrackBackground} />
            <View style={styles.progressFillShadow}>
              <LinearGradient
                colors={["#FF7A00", "#FF4C00"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.progressFillGradient}
              />
            </View>
          </View>
          <View style={styles.timeRow}>
            <Text style={styles.timeText}>00:00</Text>
            <Text style={styles.timeText}>{formatDuration(audioDurationSeconds)}</Text>
          </View>
        </View>
      </View>

      {/* Key Moments List */}
      {keyMoments.map((item, index) => (
        <View key={item.timestamp} style={styles.momentRow}>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
          <Text style={styles.description}>{item.description}</Text>
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
  /* ── Audio Player ── */
  playerCard: {
    width: 361,
    height: 81,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: PLAYER.cardBg,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    alignItems: "center",
    gap: 16,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: PLAYER.playBg,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
  },
  playerContent: {
    flex: 1,
    gap: 6,
    justifyContent: "center",
  },
  playerLabel: {
    fontSize: 16,
    fontFamily: typography.fonts.inter.medium,
    color: PLAYER.labelColor,
    marginBottom: 2,
  },
  progressTrackWrapper: {
    width: "100%",
    height: 10,
    justifyContent: "center",
  },
  progressTrackBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 8,
    backgroundColor: PLAYER.trackBg,
    borderRadius: 10,
  },
  progressFillShadow: {
    position: "absolute",
    left: 0,
    width: "40%",
    height: 8,
    backgroundColor: "#D93A00",
    borderRadius: 10,
    paddingBottom: 2,
  },
  progressFillGradient: {
    flex: 1,
    borderRadius: 5,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
  },
  timeText: {
    fontSize: 13,
    fontFamily: typography.fonts.inter.medium,
    color: PLAYER.timeColor,
  },
  /* ── Moments ── */
  momentRow: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    paddingBottom: 20,
  },
  timestamp: {
    fontSize: 14,
    fontFamily: typography.fonts.inter.semiBold,
    color: PLAYER.timestampColor,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: typography.fonts.inter.normal,
    color: "#4B5563",
    lineHeight: 21,
  },
});
