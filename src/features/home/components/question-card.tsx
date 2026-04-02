import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Question } from "@/features/home/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

interface QuestionCardProps {
  question: Question;
  onPress: () => void;
  isFirst: boolean;
}

const QuestionCardComponent = ({ question, onPress, isFirst }: QuestionCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{question.questionNumber}</Text>
      </View>
      <Image
        source={{ uri: question.companyLogoUrl }}
        style={styles.logo}
        cachePolicy="memory-disk"
      />
      <Text style={styles.companyName} numberOfLines={1}>
        {question.companyName}
      </Text>
      {isFirst && (
        <Pressable style={styles.startButton} onPress={onPress}>
          <Text style={styles.startText}>START</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export const QuestionCard = React.memo(QuestionCardComponent);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: spacing.cardRadius,
    padding: spacing.cardPadding,
    marginBottom: spacing.s,
    gap: spacing.s,
  },
  badge: {
    width: spacing.xxl,
    height: spacing.xxl,
    borderRadius: spacing.m,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.primary,
  },
  logo: {
    width: spacing.xxl,
    height: spacing.xxl,
    borderRadius: spacing.xs,
  },
  companyName: {
    flex: 1,
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.medium,
    color: colors.textPrimary,
  },
  startButton: {
    backgroundColor: colors.buttonPrimary,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: spacing.buttonRadius,
  },
  startText: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.buttonPrimaryText,
  },
});
