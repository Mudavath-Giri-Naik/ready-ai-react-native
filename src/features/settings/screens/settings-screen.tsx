import { useCallback } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { Feather, Ionicons } from "@expo/vector-icons";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

const girlSettings = require("../../../../assets/girl_settings.png");
import userData from "@/mock-data/user.json";

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1C1C1E" />
        </Pressable>
        <Text style={styles.headerTitle}>Your Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Trial Card */}
        <View style={styles.trialCard}>
          <View style={styles.trialContent}>
            <Text style={styles.trialSubtitle}>3 days free trial for</Text>
            <Text style={styles.trialPrice}>₹1</Text>
            <Text style={styles.trialSubscript}>Then ₹299/month</Text>
          </View>
          <Image source={girlSettings} style={styles.trialImage} contentFit="contain" />
          
          <Pressable style={styles.trialButton}>
            <Text style={styles.trialButtonText}>START 3 DAYS TRIAL @ ₹1</Text>
          </Pressable>
        </View>

        {/* Update Card */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="grid-outline" size={22} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>New update available</Text>
            </View>
            <View style={styles.updateIconWrap}>
              <Feather name="download" size={16} color="#13BF69" />
            </View>
          </View>
        </View>

        {/* User Card */}
        <View style={styles.card}>
          <View style={[styles.row, styles.borderBottom]}>
            <View style={styles.rowLeft}>
              <Feather name="phone" size={20} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Phone number</Text>
            </View>
            <Text style={styles.rowValue}>{userData.phone}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Feather name="target" size={20} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Learning since</Text>
            </View>
            <Text style={styles.rowValue}>August 17, 2025</Text>
          </View>
        </View>

        {/* Actions Card */}
        <View style={styles.card}>
          <Pressable style={[styles.row, styles.borderBottom]}>
            <View style={styles.rowLeft}>
              <Ionicons name="chatbubbles-outline" size={22} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Chat with us</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </Pressable>
          <Pressable style={[styles.row, styles.borderBottom]}>
            <View style={styles.rowLeft}>
              <Ionicons name="share-outline" size={22} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Share the app</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </Pressable>
          <Pressable style={[styles.row, styles.borderBottom]}>
            <View style={styles.rowLeft}>
              <Ionicons name="star-outline" size={22} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Rate the app</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </Pressable>
          <Pressable style={styles.row} onPress={handleLogout}>
            <View style={styles.rowLeft}>
              <Ionicons name="log-out-outline" size={22} color="#6E6E73" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Log out</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>App version v2.14.2</Text>
          <Text style={styles.footerText}>Made with ♥ from India</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    paddingTop: spacing.giga,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: typography.fonts.inter.semiBold,
    color: "#1C1C1E",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  trialCard: {
    backgroundColor: "#1C1C1E",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    position: "relative",
  },
  trialContent: {
    marginBottom: 20,
  },
  trialSubtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: typography.fonts.inter.semiBold,
    marginBottom: 4,
  },
  trialPrice: {
    color: "#FACC15",
    fontSize: 34,
    fontFamily: typography.fonts.inter.bold,
  },
  trialSubscript: {
    color: "#8E8E93",
    fontSize: 12,
    fontFamily: typography.fonts.inter.medium,
    marginTop: 4,
  },
  trialImage: {
    position: "absolute",
    right: 0,
    bottom: 45,
    width: 170,
    height: 150,
  },
  trialButton: {
    backgroundColor: "#FDF4E7",
    borderWidth: 2,
    borderColor: "#13BF69",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  trialButtonText: {
    color: "#8B5E34",
    fontFamily: typography.fonts.inter.bold,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    marginBottom: 16,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowIcon: {
    marginRight: 14,
  },
  rowTitle: {
    fontSize: 14,
    fontFamily: typography.fonts.inter.medium,
    color: "#1C1C1E",
  },
  rowValue: {
    fontSize: 13,
    fontFamily: typography.fonts.inter.normal,
    color: "#8E8E93",
  },
  updateIconWrap: {
    backgroundColor: "#E4F7ED",
    borderRadius: 8,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: 16,
  },
  footerText: {
    fontSize: 12,
    fontFamily: typography.fonts.inter.medium,
    color: "#C7C7CC",
    marginBottom: 4,
  },
});
