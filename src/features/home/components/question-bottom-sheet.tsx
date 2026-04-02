import { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import { Question } from "@/features/home/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

interface QuestionBottomSheetProps {
  question: Question | null;
  onClose: () => void;
  onFeedbackPress: (questionId: string) => void;
}

export const QuestionBottomSheet = forwardRef<BottomSheet, QuestionBottomSheetProps>(
  ({ question, onClose, onFeedbackPress }, ref) => {
    const snapPoints = useMemo(() => ["50%"], []);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
      ),
      []
    );

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={onClose}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.content}>
          {question && (
            <>
              <Text style={styles.questionText}>{question.text}</Text>

              <View style={styles.companyRow}>
                <Image
                  source={{ uri: question.companyLogoUrl }}
                  style={styles.companyLogo}
                  cachePolicy="memory-disk"
                />
                <Text style={styles.companyLabel}>
                  Asked by {question.companyName}
                </Text>
              </View>

              <View style={styles.durationRow}>
                <Feather name="clock" size={spacing.m} color={colors.textSecondary} />
                <Text style={styles.durationText}>
                  {question.durationMinutes} mins
                </Text>
              </View>

              <Pressable
                style={styles.feedbackButton}
                onPress={() => onFeedbackPress(question.id)}
              >
                <Text style={styles.feedbackButtonText}>FEEDBACK</Text>
              </Pressable>

              <Pressable style={styles.aiButton} disabled>
                <Text style={styles.aiButtonText}>AI VS AI (LISTEN)</Text>
              </Pressable>

              <Text style={styles.socialProof}>
                {question.completedTodayCount} users completed Question{" "}
                {question.questionNumber} today
              </Text>
            </>
          )}
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  content: {
    padding: spacing.screenPadding,
    gap: spacing.m,
  },
  questionText: {
    fontSize: typography.sizes.l,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
  },
  companyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  companyLogo: {
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: spacing.xxs,
  },
  companyLabel: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textSecondary,
  },
  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxs,
  },
  durationText: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.medium,
    color: colors.textSecondary,
  },
  feedbackButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: spacing.s,
    borderRadius: spacing.buttonRadius,
    alignItems: "center",
  },
  feedbackButtonText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.buttonPrimaryText,
  },
  aiButton: {
    backgroundColor: colors.buttonDisabled,
    paddingVertical: spacing.s,
    borderRadius: spacing.buttonRadius,
    alignItems: "center",
  },
  aiButtonText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.buttonDisabledText,
  },
  socialProof: {
    fontSize: typography.sizes.xs,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
