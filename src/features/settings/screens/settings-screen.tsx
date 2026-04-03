import { useCallback } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

const girlSettings = require("../../../../assets/girl_settings.png");
import userData from "@/mock-data/user.json";

const DiagonalStripes = () => (
  <>
    <View style={styles.stripe1} />
    <View style={styles.stripe2} />
  </>
);

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
          <Ionicons name="chevron-back" size={24} color="#2C2C2E" />
        </Pressable>
        <Text style={styles.headerTitle}>Your Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Trial Card */}
        <View style={styles.trialCard}>
          <DiagonalStripes />
          <View style={styles.trialContent}>
            <Text style={styles.trialSubtitle}>3 days free trial for</Text>
            <Text style={styles.trialPrice}>₹1</Text>
            <Text style={styles.trialSubscript}>Then ₹299/month</Text>
          </View>
          <Image source={girlSettings} style={styles.trialImage} contentFit="contain" />

          <View style={styles.trialButtonShadow}>
            <LinearGradient
              colors={["#F8E9CB", "#FEFAF5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.trialButtonGradient}
            >
              <Pressable style={styles.trialButton}>
                <Text style={styles.trialButtonText}>START 3 DAYS TRIAL @ ₹1</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>

        {/* Update Card */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="grid-outline" size={22} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>New update available</Text>
            </View>
            <View style={styles.updateIconWrap}>
              <Feather name="download" size={16} color="#13BF69" />
            </View>
          </View>
        </View>

        {/* User Card */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Feather name="phone" size={20} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Phone number</Text>
            </View>
            <Text style={styles.rowValue}>{userData.phone}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="time-outline" size={22} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Learning since</Text>
            </View>
            <Text style={styles.rowValue}>August 17, 2025</Text>
          </View>
        </View>

        {/* Actions Card */}
        <View style={styles.card}>
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="headset-outline" size={22} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Chat with us</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#AEAEB2" />
          </Pressable>
          <View style={styles.divider} />
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="share-outline" size={22} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Share the app</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#AEAEB2" />
          </Pressable>
          <View style={styles.divider} />
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <Ionicons name="star-outline" size={22} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Rate the app</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#AEAEB2" />
          </Pressable>
          <View style={styles.divider} />
          <Pressable style={styles.row} onPress={handleLogout}>
            <View style={styles.rowLeft}>
              <Ionicons name="log-out-outline" size={22} color="#6C6C70" style={styles.rowIcon} />
              <Text style={styles.rowTitle}>Log out</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#AEAEB2" />
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
    backgroundColor: "#F5F5F8",
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
    color: "#2C2C2E",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  trialCard: {
    backgroundColor: "#1C1C1E",
    borderRadius: 24,
    paddingTop: 24,
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 18,
    width: 357,
    height: 203,
    alignSelf: "center",
    marginBottom: 16,
    position: "relative",
  },
  trialContent: {
  },
  trialSubtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: typography.fonts.inter.semiBold,
    marginBottom: 4,
  },
  trialPrice: {
    color: "#FFD033",
    fontSize: 32,
    fontFamily: typography.fonts.inter.bold,
  },
  trialSubscript: {
    color: "#E5E5EA",
    fontSize: 14,
    fontFamily: typography.fonts.inter.medium,
    marginTop: 4,
  },
  trialImage: {
    position: "absolute",
    right: 0,
    bottom: 55, // Shifted up by 10px
    width: 146.58,
    height: 162.48,
  },
  trialButtonShadow: {
    backgroundColor: "#948b77ff", // Pure black for better visibility on dark card
    borderRadius: 11,
    paddingBottom: 4,
    width: "100%",
    marginTop: -7, // Shifted up
  },
  trialButtonGradient: {
    borderRadius: 11,
  },
  trialButton: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  trialButtonText: {
    color: "#8B5E34",
    fontFamily: typography.fonts.inter.black, // Absolute thickest Inter font
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.8,
    textAlign: "center",
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E5E5EA",
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
  divider: {
    height: 1,
    backgroundColor: "#E5E5EA",
    marginHorizontal: 16,
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
    color: "#2C2C2E",
  },
  rowValue: {
    fontSize: 13,
    fontFamily: typography.fonts.inter.normal,
    color: "#AEAEB2",
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
    color: "#AEAEB2",
    marginBottom: 4,
  },
  // Diagonal Stripes (Same sizing as Question Cards)
  stripe1: {
    position: "absolute",
    width: 28,
    height: 120,
    left: -10,
    top: -30,
    backgroundColor: "rgba(255,255,255,0.06)",
    transform: [{ rotate: "45deg" }],
  },
  stripe2: {
    position: "absolute",
    width: 20,
    height: 180,
    left: 30,
    top: -50,
    backgroundColor: "rgba(255,255,255,0.06)",
    transform: [{ rotate: "45deg" }],
  },
});
