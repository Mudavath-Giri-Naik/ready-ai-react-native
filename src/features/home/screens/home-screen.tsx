import { useState, useCallback, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, RefreshControl } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Animated, { useAnimatedScrollHandler, withTiming, useSharedValue, FadeInDown, LinearTransition } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { AppLogo } from "@/components/ui/app-logo";
import { QuestionCard, getColors, CardVariant } from "@/features/home/components/question-card";
import { RootStackParamList } from "@/navigation/types";
import { Question } from "@/features/home/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import questionsData from "@/mock-data/questions.json";
import { useTabBarContext } from "@/navigation/tab-bar-context";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const AnimatedCell = ({ children, isSelected, index }: { children: React.ReactNode, isSelected: boolean, index: number }) => {
  return (
    <Animated.View 
      entering={FadeInDown.delay(index * 150).springify().damping(12)}
      layout={LinearTransition.springify().damping(14)}
      style={{ zIndex: isSelected ? 1000 : 1, elevation: isSelected ? 10 : 1 }}
    >
      {children}
    </Animated.View>
  );
};

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

const AnimatedSocialProof = ({ initialCount, questionNumber }: { initialCount: number, questionNumber: number }) => {
  const [actualCount, setActualCount] = useState(initialCount);
  const [displayCount, setDisplayCount] = useState(Math.max(0, initialCount - 87));

  useEffect(() => {
    const interval = setInterval(() => {
      setActualCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (displayCount < actualCount) {
      const timer = setTimeout(() => {
        setDisplayCount(prev => {
          const diff = actualCount - prev;
          const step = Math.max(1, Math.floor(diff * 0.15));
          return prev + step;
        });
      }, 16);
      return () => clearTimeout(timer);
    }
  }, [displayCount, actualCount]);

  return (
    <View style={styles.socialRow}>
      <Ionicons name="flag" size={18} color={HOME.socialColor} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        
        <Text style={styles.socialText}>{displayCount.toLocaleString()}</Text>

        <Text style={styles.socialText}>
          {` users completed Question ${questionNumber} today`}
        </Text>
      </View>
      <Ionicons name="flag" size={18} color={HOME.socialColor} />
    </View>
  );
};

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [refreshing, setRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate data fetch
    setTimeout(() => {
      // Bumping the key forces the List items to recognize new data binds, smoothly triggering the enter animation
      setRefreshKey((prev) => prev + 1);
      setRefreshing(false);
    }, 1200);
  }, []);

  const { tabBarTranslateY } = useTabBarContext();
  const lastScrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentScrollY = event.contentOffset.y;
      
      if (currentScrollY <= 0) {
        tabBarTranslateY.value = withTiming(0, { duration: 200 });
      } else if (currentScrollY > lastScrollY.value + 0.5) {
        tabBarTranslateY.value = withTiming(150, { duration: 200 });
      } else if (currentScrollY < lastScrollY.value - 0.5) {
        tabBarTranslateY.value = withTiming(0, { duration: 200 });
      }
      
      lastScrollY.value = currentScrollY;
    },
  });

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
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setSelectedQuestion(null);
      navigation.navigate("SessionResult", { questionId });
    },
    [navigation]
  );

  const socialProofQuestion = questions[SOCIAL_PROOF_INDEX - 1];

  const renderItem = useCallback(
    ({ item, index }: { item: ListItem; index: number }) => {
      if (item.type === "socialProof") {
        return (
          <AnimatedCell isSelected={false} index={index}>
            {socialProofQuestion ? (
              <AnimatedSocialProof 
                initialCount={socialProofQuestion.completedTodayCount} 
                questionNumber={socialProofQuestion.questionNumber} 
              />
            ) : null}
          </AnimatedCell>
        );
      }

      const q = item.question!;
      const idx = item.questionIndex!;
      const variant: CardVariant =
        idx === 0
          ? "done"
          : idx === 1
            ? "start"
            : "upcoming";

      const paddings = [48, 80, 120, 160, 120, 80, 48, 80, 120, 160];
      const pl = paddings[idx % paddings.length];
      const mb = 8;
      const isSelected = selectedQuestion?.id === q.id;
      const cardColors = getColors(variant);

      return (
        <AnimatedCell isSelected={isSelected} index={index}>
          <QuestionCard
            question={q}
            variant={variant}
            onPress={() => handleQuestionPress(q)}
            marginBottom={mb}
            paddingLeft={pl}
            isSelected={isSelected}
            hideStartBubble={!!selectedQuestion}
          />
          {isSelected && (
            <View
              style={[styles.expandedWrapper, { left: 24, top: 88 }]}
            >
              <View style={styles.expandedTailBox}>
                <View style={[styles.expandedTail, { borderBottomColor: cardColors.badgeBg }]} />
              </View>
              <View style={[styles.expandedCard, { backgroundColor: cardColors.badgeBg }]}>
                <Text style={styles.expandedQuestion}>
                  {q.text}
                </Text>
                <View style={styles.expandedMeta}>
                  <View style={styles.expandedCompanyRow}>
                    <Text style={styles.expandedAskedBy}>
                      Asked by {q.companyName}
                    </Text>
                    <Image
                      source={{ uri: q.companyLogoUrl }}
                      style={styles.expandedLogo}
                      cachePolicy="memory-disk"
                    />
                  </View>
                  <View style={styles.expandedDuration}>
                    <Feather name="clock" size={14} color="#48484A" />
                    <Text style={styles.expandedDurationText}>
                      {q.durationMinutes} mins
                    </Text>
                  </View>
                </View>

                <View style={styles.expandedButtonsContainer}>
                  <View style={styles.feedbackShadow}>
                    <Pressable
                      style={styles.feedbackButton}
                      onPress={() => handleFeedbackPress(q.id)}
                    >
                      <Text style={styles.feedbackButtonText}>FEEDBACK</Text>
                    </Pressable>
                  </View>

                  <View style={styles.aiShadow}>
                    <Pressable 
                      style={styles.aiButton}
                      onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                    >
                      <Feather name="lock" size={14} color={colors.textInverse} />
                      <Text style={styles.aiButtonText}>AI VS AI (LISTEN)</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          )}
        </AnimatedCell>
      );
    },
    [socialProofQuestion, handleQuestionPress, handleFeedbackPress, selectedQuestion]
  );

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <AppLogo variant="brand" size="sm" />
        <View style={styles.rhs}>
          <View style={styles.streakShadow}>
            <View style={styles.streakCounter}>
              <Ionicons name="flash" size={18} color={colors.textInverse} />
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

      <View style={{ flex: 1 }}>
        <AnimatedFlashList
          data={listData}
          estimatedItemSize={80}
          extraData={selectedQuestion?.id}
          renderItem={renderItem}
          keyExtractor={(item: ListItem, index: number) =>
            `${refreshKey}-${
              item.type === "socialProof"
                ? "social-proof"
                : item.question?.id ?? String(index)
            }`
          }
          contentContainerStyle={styles.listContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onTouchStart={() => {
            if (selectedQuestion) handleCloseOverlay();
          }}
          onScrollBeginDrag={() => {
            if (selectedQuestion) handleCloseOverlay();
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors.primary}
            />
          }
        />
      </View>

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
    width: 105,
    height: 36,
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
    width: "100%",
    height: 92,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    marginBottom: 8,
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
    paddingBottom: 250,
  },
  socialRow: {
    width: 393,
    height: 32,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: HOME.socialColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  socialText: {
    fontSize: 14,
    letterSpacing: -0.1,
    fontFamily: typography.fonts.inter.extraBold,
    color: HOME.socialColor,
    textAlign: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: spacing.screenPadding,
  },
  expandedWrapper: {
    position: "absolute",
    width: 345,
    paddingTop: 2,
  },
  expandedTailBox: {
    width: "100%",
    height: 10,
    alignItems: "center",
  },
  expandedTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  expandedCard: {
    width: 345,
    borderRadius: 12,
    padding: 16,
    gap: 10,
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
  expandedButtonsContainer: {
    width: 313,
    gap: 10,
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
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingBottom: 3,
  },
  aiButton: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
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
