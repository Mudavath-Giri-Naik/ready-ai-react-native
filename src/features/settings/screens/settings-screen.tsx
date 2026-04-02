import { useCallback } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import { User, MenuItem, SETTINGS_MENU_ITEMS } from "@/features/settings/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import userData from "@/mock-data/user.json";

const menAvatar = require("../../../../assets/men_avatar.png");
const user = userData as User;

export const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Auth" }],
      })
    );
  }, [navigation]);

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <Pressable style={styles.menuItem}>
      <Text style={styles.menuLabel}>{item.label}</Text>
      <Feather name="chevron-right" size={spacing.l} color={colors.textSecondary} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={menAvatar}
          style={styles.avatar}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userPhone}>{user.phone}</Text>
      </View>

      <Pressable style={styles.ctaButton}>
        <Text style={styles.ctaText}>Sign up / Continue</Text>
      </Pressable>

      <View style={styles.menuContainer}>
        <FlashList
          data={SETTINGS_MENU_ITEMS}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.giga,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  avatar: {
    width: spacing.giga + spacing.xxl,
    height: spacing.giga + spacing.xxl,
    borderRadius: spacing.xxxl + spacing.m,
    marginBottom: spacing.s,
  },
  userName: {
    fontSize: typography.sizes.xl,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
  },
  userPhone: {
    fontSize: typography.sizes.s,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textSecondary,
    marginTop: spacing.xxs,
  },
  ctaButton: {
    backgroundColor: colors.buttonPrimary,
    marginHorizontal: spacing.screenPadding,
    paddingVertical: spacing.s,
    borderRadius: spacing.buttonRadius,
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  ctaText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.buttonPrimaryText,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: spacing.screenPadding,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuLabel: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.medium,
    color: colors.textPrimary,
  },
  logoutButton: {
    paddingVertical: spacing.m,
    marginHorizontal: spacing.screenPadding,
    marginBottom: spacing.xxl,
    alignItems: "center",
  },
  logoutText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.error,
  },
});
