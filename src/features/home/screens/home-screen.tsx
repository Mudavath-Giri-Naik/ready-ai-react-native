import { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Feather from "@expo/vector-icons/Feather";
import BottomSheet from "@gorhom/bottom-sheet";
import { AppLogo } from "@/components/ui/app-logo";
import { RootStackParamList } from "@/navigation/types";
import { Question } from "@/features/home/types";
import { QuestionCard } from "@/features/home/components/question-card";
import { QuestionBottomSheet } from "@/features/home/components/question-bottom-sheet";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import questionsData from "@/mock-data/questions.json";

const questions = questionsData as Question[];

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [expanded, setExpanded] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleQuestionPress = useCallback((question: Question) => {
    setSelectedQuestion(question);
    bottomSheetRef.current?.expand();
  }, []);

  const handleSheetClose = useCallback(() => {
    setSelectedQuestion(null);
  }, []);

  const handleFeedbackPress = useCallback(
    (questionId: string) => {
      bottomSheetRef.current?.close();
      navigation.navigate("SessionResult", { questionId });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppLogo />
        <View style={styles.headerIcons}>
          <Feather name="bell" size={spacing.xl} color={colors.textPrimary} />
          <Feather
            name="menu"
            size={spacing.xl}
            color={colors.textPrimary}
            style={styles.menuIcon}
          />
        </View>
      </View>

      <Pressable
        style={styles.practiceCard}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.practiceText}>
          Practicing Top 50 Questions for Big Tech Companies
        </Text>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={spacing.l}
          color={colors.textSecondary}
        />
      </Pressable>

      {expanded && (
        <View style={styles.expandedContent}>
          <Text style={styles.expandedText}>
            Practice questions from top tech companies like Google, Amazon,
            Microsoft, and more.
          </Text>
        </View>
      )}

      <FlashList
        data={questions}
        renderItem={({ item, index }) => (
          <QuestionCard
            question={item}
            onPress={() => handleQuestionPress(item)}
            isFirst={index === 0}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <QuestionBottomSheet
        ref={bottomSheetRef}
        question={selectedQuestion}
        onClose={handleSheetClose}
        onFeedbackPress={handleFeedbackPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.giga,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.screenPadding,
    marginBottom: spacing.m,
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginLeft: spacing.m,
  },
  practiceCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: spacing.screenPadding,
    backgroundColor: colors.primaryLight,
    padding: spacing.cardPadding,
    borderRadius: spacing.cardRadius,
    marginBottom: spacing.m,
  },
  practiceText: {
    flex: 1,
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
    marginRight: spacing.xs,
  },
  expandedContent: {
    marginHorizontal: spacing.screenPadding,
    padding: spacing.cardPadding,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: spacing.cardRadius,
    marginBottom: spacing.m,
  },
  expandedText: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textSecondary,
  },
  listContent: {
    paddingHorizontal: spacing.screenPadding,
  },
});
