import { useState, useCallback, useMemo } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { AppLogo } from "@/components/ui/app-logo";
import { QuestionCard } from "@/features/home/components/question-card";
import { RootStackParamList } from "@/navigation/types";
import { Question } from "@/features/home/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import questionsData from "@/mock-data/questions.json";

const HOME = {
  streakBg: "#57D997",
  streakShadow: "#13BF69",
  menuBg: "#F5F5F8",
  menuShadow: "#E5E5EA",
  courseBg: "#FFF6D9",
  courseShadow: "#BF9C26",
  socialColor: "#BF9C26",
  socialDash: "#FFD033",
  expandedBg: "#1C1C1E",
  feedbackGreen: "#13BF69",
  overlayBg: "rgba(0,0,0,0.15)",
} as const;

const questions = questionsData as Question[];
const SOCIAL_PROOF_INDEX = 3;

interface ListItem {
  type: "question" | "socialProof";
  question?: Question;
  questionIndex?: number;
}

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const listData = useMemo(() => {
    const items: ListItem[] = [];
    questions.forEach((q, idx) => {
      items.push({ type: "question", question: q, questionIndex: idx });
      if (idx === SOCIAL_PROOF_INDEX - 1) {
        items.push({ type: "socialProof" });
      }
    });
    return items;
  }, []);

  const handleQuestionPress = useCallback((question: Question) => {
    setSelectedQuestion(question);
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setSelectedQuestion(null);
  }, []);

  const handleFeedbackPress = useCallback(
    (questionId: string) => {
      setSelectedQuestion(null);
      navigation.navigate("SessionResult", { questionId });
    },
    [navigation]
  );

  const socialProofQuestion = questions[SOCIAL_PROOF_INDEX - 1];
  const socialProofText = socialProofQuestion
    ? `${socialProofQuestion.completedTodayCount.toLocaleString()} users completed Question ${socialProofQuestion.questionNumber} today`
    : "";

  const renderItem = useCallback(
    ({ item }: { item: ListItem }) => {
      if (item.type === "socialProof") {
        return (
          <View style={styles.socialRow}>
            <View style={styles.socialDash} />
            <Text style={styles.socialText}>{` ${socialProofText} `}</Text>
            <View style={styles.socialDash} />
          </View>
        );
      }

      const q = item.question!;
      const idx = item.questionIndex!;
      const variant =
        idx === 0
          ? ("done" as const)
          : idx === 1
            ? ("start" as const)
            : ("upcoming" as const);

      const paddings = [48, 80, 120, 160, 120, 80, 40, 80, 120, 160];
      const pl = paddings[idx % paddings.length];

      return (
        <QuestionCard
          question={q}
          variant={variant}
          onPress={() => handleQuestionPress(q)}
          paddingLeft={pl}
        />
      );
    },
    [socialProofText, handleQuestionPress]
  );

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <AppLogo variant="brand" />
        <View style={styles.rhs}>
          <View style={styles.streakShadow}>
            <View style={styles.streakCounter}>
              <Feather name="zap" size={18} color={colors.textInverse} />
              <Text style={styles.streakNumber}>8</Text>
            </View>
          </View>
          <View style={styles.menuShadowBox}>
            <View style={styles.menuButton}>
              <Feather name="menu" size={24} color="#1C1C1E" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.courseSwitcher}>
        <View style={styles.courseShadow}>
          <View style={styles.courseContainer}>
            <View style={styles.courseMain}>
              <View style={styles.courseEmoji}>
                <Text style={styles.emojiText}>💪</Text>
              </View>
              <View style={styles.courseTextWrap}>
                <Text style={styles.courseSubtitle}>
                  Practicing Top 50 Questions for
                </Text>
                <Text style={styles.courseTitle}>Big Tech Companies</Text>
              </View>
            </View>
            <Feather name="chevron-down" size={20} color="#48484A" />
          </View>
        </View>
      </View>

      <FlashList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.type === "socialProof"
            ? "social-proof"
            : item.question?.id ?? String(index)
        }
        getItemType={(item) => item.type}
        contentContainerStyle={styles.listContent}
      />

      {selectedQuestion && (
        <Pressable style={styles.overlay} onPress={handleCloseOverlay}>
          <Pressable
            style={styles.expandedCard}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={styles.expandedQuestion}>
              {selectedQuestion.text}
            </Text>
            <View style={styles.expandedMeta}>
              <View style={styles.expandedCompanyRow}>
                <Text style={styles.expandedAskedBy}>
                  Asked by {selectedQuestion.companyName}
                </Text>
                <Image
                  source={{ uri: selectedQuestion.companyLogoUrl }}
                  style={styles.expandedLogo}
                  cachePolicy="memory-disk"
                />
              </View>
              <View style={styles.expandedDuration}>
                <Feather name="clock" size={14} color="#48484A" />
                <Text style={styles.expandedDurationText}>
                  {selectedQuestion.durationMinutes} mins
                </Text>
              </View>
            </View>

            <View style={styles.feedbackShadow}>
              <Pressable
                style={styles.feedbackButton}
                onPress={() => handleFeedbackPress(selectedQuestion.id)}
              >
                <Text style={styles.feedbackButtonText}>FEEDBACK</Text>
              </Pressable>
            </View>

            <View style={styles.aiShadow}>
              <Pressable style={styles.aiButton}>
                <Feather name="lock" size={14} color={colors.textInverse} />
                <Text style={styles.aiButtonText}>AI VS AI (LISTEN)</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 49,
  },
  topNav: {
    width: "100%",
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  rhs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  streakShadow: {
    backgroundColor: HOME.streakShadow,
    borderRadius: 28,
    paddingBottom: 4,
  },
  streakCounter: {
    backgroundColor: HOME.streakBg,
    borderRadius: 28,
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  streakNumber: {
    width: 14,
    height: 24,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: typography.fonts.inter.semiBold,
    textAlign: "center",
    color: colors.textInverse,
  },
  menuShadowBox: {
    backgroundColor: HOME.menuShadow,
    borderRadius: 28,
    paddingBottom: 4,
  },
  menuButton: {
    backgroundColor: HOME.menuBg,
    borderRadius: 28,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  courseSwitcher: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  courseShadow: {
    backgroundColor: HOME.courseShadow,
    borderRadius: 24,
    paddingBottom: 4,
  },
  courseContainer: {
    width: 361,
    height: 76,
    backgroundColor: HOME.courseBg,
    borderRadius: 24,
    padding: 16,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  courseMain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  courseEmoji: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  emojiText: {
    fontSize: 24,
  },
  courseTextWrap: {
    flex: 1,
    gap: 2,
  },
  courseSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: typography.fonts.inter.medium,
    color: "#48484A",
    textAlign: "left",
  },
  courseTitle: {
    height: 22,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: typography.fonts.inter.semiBold,
    color: "#1C1C1E",
    textAlign: "left",
  },
  listContent: {
    paddingBottom: 120,
  },
  socialRow: {
    width: "100%",
    borderStyle: "dashed",
    borderColor: HOME.socialColor,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    gap: 12,
  },
  socialDash: {
    flex: 0,
    width: 20,
    height: 1,
    borderTopWidth: 1,
    borderColor: HOME.socialDash,
    borderStyle: "solid",
    display: "none",
  },
  socialText: {
    fontSize: 14,
    letterSpacing: -0.1,
    fontWeight: "700",
    fontFamily: typography.fonts.inter.bold,
    color: HOME.socialColor,
    textAlign: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: spacing.screenPadding,
  },
  expandedCard: {
    backgroundColor: "#FFD033",
    borderRadius: 16,
    padding: 20,
    gap: 16,
  },
  expandedQuestion: {
    fontSize: typography.sizes.l,
    fontFamily: typography.fonts.inter.semiBold,
    color: "#1C1C1E",
    lineHeight: 24,
  },
  expandedMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expandedCompanyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  expandedAskedBy: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.normal,
    color: "#48484A",
  },
  expandedLogo: {
    width: 16,
    height: 16,
    borderRadius: 2,
  },
  expandedDuration: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  expandedDurationText: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.medium,
    color: "#48484A",
  },
  feedbackShadow: {
    width: 313,
    alignSelf: "center",
    backgroundColor: "#00000033",
    borderRadius: 12,
    paddingBottom: 3,
  },
  feedbackButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  feedbackButtonText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.bold,
    color: "#13BF69",
    letterSpacing: 0.51,
    textTransform: "uppercase",
  },
  aiShadow: {
    width: 313,
    alignSelf: "center",
    backgroundColor: "#BF9C26",
    borderRadius: 12,
    paddingBottom: 3,
  },
  aiButton: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#806B26",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  aiButtonText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.bold,
    color: colors.textInverse,
    textTransform: "uppercase",
    letterSpacing: 0.51,
  },
});
