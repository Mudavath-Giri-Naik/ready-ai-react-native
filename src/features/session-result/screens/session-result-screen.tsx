import { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import * as Haptics from "expo-haptics";
import Feather from "@expo/vector-icons/Feather";
import { RootStackParamList } from "@/navigation/types";
import { SessionResult } from "@/features/session-result/types";
import { SmartSummaryTab } from "@/features/session-result/components/smart-summary-tab";
import { KeyMomentsTab } from "@/features/session-result/components/key-moments-tab";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import allSessionResults from "@/mock-data/session-results.json";

const menAvatar = require("../../../../assets/men_avatar.png");
const ladyAvatar = require("../../../../assets/lady_avatar.png");

type SessionResultRoute = RouteProp<RootStackParamList, "SessionResult">;
type SessionResultNav = NativeStackNavigationProp<RootStackParamList, "SessionResult">;

const FEEDBACK = {
  headerBg: "#DAF2E6",
  closeShadow: "#13BF69",
  closeBg: "#95E5BD",
} as const;

const AVATAR_SIZE = 106.92;
const AVATAR_BORDER = 2.72;
const AVATAR_RADIUS = 667.59;
const AVATAR_OVERLAP = 20;

const sessionResultsMap = allSessionResults as Record<string, SessionResult>;

export const SessionResultScreen = () => {
  const route = useRoute<SessionResultRoute>();
  const navigation = useNavigation<SessionResultNav>();
  const [activeTab, setActiveTab] = useState<"summary" | "moments">("summary");

  const onTabPress = (tab: "summary" | "moments") => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setActiveTab(tab);
  };

  const { questionId } = route.params;
  const data = sessionResultsMap[questionId] || sessionResultsMap["q1"];

  return (
    <View style={styles.container}>
      {/* Green Header Section */}
      <View style={styles.header}>
        {/* Close Button - streak style */}
        <View style={styles.closePosition}>
          <View style={styles.closeShadow}>
            <Pressable 
              style={styles.closeButton} 
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                navigation.goBack();
              }}
            >
              <Feather name="x" size={18} color="#000000" />
            </Pressable>
          </View>
        </View>

        {/* Overlapping Avatars */}
        <View style={styles.avatarRow}>
          <View style={[styles.avatarBorder, { zIndex: 1 }]}>  
            <Image
              source={menAvatar}
              style={styles.avatarImage}
              contentFit="cover"
              cachePolicy="memory-disk"
            />
          </View>
          <View style={[styles.avatarBorder, { marginLeft: -AVATAR_OVERLAP, zIndex: 2 }]}>
            <Image
              source={ladyAvatar}
              style={styles.avatarImage}
              contentFit="cover"
              cachePolicy="memory-disk"
            />
          </View>
        </View>

        {/* Question Card speech bubble */}
        <View style={styles.questionBubbleWrap}>
          <View style={styles.bubbleArrow} />
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>{data.questionText}</Text>
            <View style={styles.companyRow}>
              <Image
                source={{ uri: data.companyLogoUrl }}
                style={styles.companyLogo}
                cachePolicy="memory-disk"
              />
              <Text style={styles.companyName}>Asked by {data.companyName}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom white section with rounded top corners */}
      <View style={styles.bottomSection}>
        {/* Tab Row */}
        <View style={styles.tabRow}>
          <Pressable
            style={styles.tab}
            onPress={() => onTabPress("summary")}
          >
            <View style={[styles.tabInner, activeTab === "summary" && styles.activeTabInner]}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === "summary" && styles.activeTabText,
                ]}
              >
                Smart summary
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => onTabPress("moments")}
          >
            <View style={[styles.tabInner, activeTab === "moments" && styles.activeTabInner]}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === "moments" && styles.activeTabText,
                ]}
              >
                Key moments
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Content */}
        {activeTab === "summary" ? (
          <SmartSummaryTab smartSummary={data.smartSummary} />
        ) : (
          <KeyMomentsTab
            keyMoments={data.keyMoments}
            audioDurationSeconds={data.audioDurationSeconds}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FEEDBACK.headerBg,
  },
  /* ── Green Header ── */
  header: {
    backgroundColor: FEEDBACK.headerBg,
    paddingTop: 50,
    paddingBottom: 36,
    alignItems: "center",
  },
  /* ── Bottom white section ── */
  bottomSection: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -12,
  },
  /* ── Close Button (streak style) ── */
  closePosition: {
    position: "absolute",
    top: 50,
    right: 16,
    zIndex: 10,
  },
  closeShadow: {
    backgroundColor: FEEDBACK.closeShadow,
    borderRadius: 28,
    paddingBottom: 4,
  },
  closeButton: {
    backgroundColor: FEEDBACK.closeBg,
    borderRadius: 28,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  /* ── Overlapping Avatars ── */
  avatarRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  avatarBorder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_RADIUS,
    borderWidth: AVATAR_BORDER,
    borderColor: "#DAF2E6",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: AVATAR_SIZE - AVATAR_BORDER * 2,
    height: AVATAR_SIZE - AVATAR_BORDER * 2,
    borderRadius: AVATAR_RADIUS,
  },
  /* ── Question Card on header ── */
  questionBubbleWrap: {
    alignItems: "center",
    marginHorizontal: 24,
  },
  bubbleArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#13BF69",
  },
  questionCard: {
    backgroundColor: "#13BF69",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
  },
  questionText: {
    fontSize: 15,
    fontFamily: typography.fonts.inter.semiBold,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 10,
  },
  companyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  companyLogo: {
    width: 18,
    height: 18,
    borderRadius: 4,
  },
  companyName: {
    fontSize: 13,
    fontFamily: typography.fonts.inter.medium,
    color: "rgba(255,255,255,0.85)",
  },
  /* ── Tabs ── */
  tabRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabInner: {
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    marginBottom: -1, // Pull it down over the grey row border line
  },
  activeTabInner: {
    borderBottomColor: "#1C1C1E",
  },
  tabText: {
    fontSize: 14,
    fontFamily: typography.fonts.inter.medium,
    color: "#8E8E93",
  },
  activeTabText: {
    color: "#1C1C1E",
    fontFamily: typography.fonts.inter.semiBold,
  },
});
