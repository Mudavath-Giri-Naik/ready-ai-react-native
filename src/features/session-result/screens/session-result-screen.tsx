import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import { RootStackParamList } from "@/navigation/types";
import { SessionResult } from "@/features/session-result/types";
import { SmartSummaryTab } from "@/features/session-result/components/smart-summary-tab";
import { KeyMomentsTab } from "@/features/session-result/components/key-moments-tab";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import sessionResultData from "@/mock-data/session-result.json";

const menAvatar = require("../../../../assets/men_avatar.png");
const ladyAvatar = require("../../../../assets/lady_avatar.png");

type SessionResultRoute = RouteProp<RootStackParamList, "SessionResult">;
type SessionResultNav = NativeStackNavigationProp<RootStackParamList, "SessionResult">;

const data = sessionResultData as SessionResult;

export const SessionResultScreen = () => {
  const route = useRoute<SessionResultRoute>();
  const navigation = useNavigation<SessionResultNav>();
  const [activeTab, setActiveTab] = useState<"summary" | "moments">("summary");

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={spacing.xl} color={colors.textPrimary} />
      </Pressable>

      <View style={styles.avatarRow}>
        <Image
          source={menAvatar}
          style={styles.avatar}
          contentFit="contain"
          cachePolicy="memory-disk"
        />
        <Image
          source={ladyAvatar}
          style={styles.avatar}
          contentFit="contain"
          cachePolicy="memory-disk"
        />
      </View>

      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{data.questionText}</Text>
        <View style={styles.companyRow}>
          <Image
            source={{ uri: data.companyLogoUrl }}
            style={styles.companyLogo}
            cachePolicy="memory-disk"
          />
          <Text style={styles.companyName}>{data.companyName}</Text>
        </View>
      </View>

      <View style={styles.tabRow}>
        <Pressable
          style={[styles.tab, activeTab === "summary" && styles.activeTab]}
          onPress={() => setActiveTab("summary")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "summary" && styles.activeTabText,
            ]}
          >
            Smart Summary
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === "moments" && styles.activeTab]}
          onPress={() => setActiveTab("moments")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "moments" && styles.activeTabText,
            ]}
          >
            Key Moments
          </Text>
        </Pressable>
      </View>

      {activeTab === "summary" ? (
        <SmartSummaryTab smartSummary={data.smartSummary} />
      ) : (
        <KeyMomentsTab
          keyMoments={data.keyMoments}
          audioDurationSeconds={data.audioDurationSeconds}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.giga,
  },
  backButton: {
    paddingHorizontal: spacing.screenPadding,
    marginBottom: spacing.m,
  },
  avatarRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.m,
    marginBottom: spacing.m,
  },
  avatar: {
    width: spacing.giga + spacing.xxl,
    height: spacing.giga + spacing.xxl,
    borderRadius: spacing.xxxl,
  },
  questionCard: {
    marginHorizontal: spacing.screenPadding,
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.cardPadding,
    borderRadius: spacing.cardRadius,
    marginBottom: spacing.m,
  },
  questionText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  companyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  companyLogo: {
    width: spacing.l,
    height: spacing.l,
    borderRadius: spacing.xxs,
  },
  companyName: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textSecondary,
  },
  tabRow: {
    flexDirection: "row",
    marginHorizontal: spacing.screenPadding,
    marginBottom: spacing.s,
    gap: spacing.xs,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.s,
    alignItems: "center",
    borderRadius: spacing.buttonRadius,
    backgroundColor: colors.backgroundSecondary,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.medium,
    color: colors.textSecondary,
  },
  activeTabText: {
    color: colors.textInverse,
  },
});
