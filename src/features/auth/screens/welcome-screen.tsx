import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { AuthStackParamList } from "@/navigation/types";
import { AppLogo } from "@/components/ui/app-logo";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

const welcomeGirl = require("../../../../assets/welcome_screen_girl.png");

type WelcomeNav = NativeStackNavigationProp<AuthStackParamList, "Welcome">;

export const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeNav>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo />
      </View>
      <View style={styles.content}>
        <Image
          source={welcomeGirl}
          style={styles.avatar}
          contentFit="contain"
          cachePolicy="memory-disk"
        />
        <Text style={styles.taglineTitle}>Practice Top Interview</Text>
        <Text style={styles.taglineSubtitle}>
          Questions <Text style={styles.taglineHighlight}>with AI</Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonShadow}>
          <Pressable
            style={({ pressed }) => [
              pressed && styles.buttonPressed,
            ]}
            onPress={() => navigation.navigate("Login")}
          >
            <LinearGradient
              colors={["#FF7A00", "#FF4C00"]}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Feather
                name="check-circle"
                size={typography.sizes.l}
                color={colors.buttonPrimaryText}
              />
              <Text style={styles.buttonText}>Let's go</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <Text style={styles.termsText}>
          By continuing, you acknowledge agreeing to our{"\n"}
          <Text style={styles.linkText}>terms of service</Text> and{" "}
          <Text style={styles.linkText}>privacy policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoContainer: {
    position: "absolute",
    top: 78,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  content: {
    position: "absolute",
    top: 232,
    left: 21,
    width: 348,
    height: 330,
    alignItems: "center",
  },
  avatar: {
    width: 250,
    height: 250,
    marginBottom: 18,
  },
  taglineTitle: {
    width: 348,
    height: 31,
    fontSize: typography.sizes.xxl,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  taglineSubtitle: {
    width: 348,
    height: 31,
    fontSize: typography.sizes.xxl,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  taglineHighlight: {
    color: colors.primary,
  },
  footer: {
    position: "absolute",
    top: 670,
    left: 24,
    width: 345,
  },
  buttonShadow: {
    backgroundColor: "#D93A00",
    borderRadius: spacing.inputRadius,
    paddingBottom: 8,
    marginBottom: spacing.xl,
    width: 345,
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 52,
    borderRadius: spacing.inputRadius,
    gap: 4,
  },
  buttonPressed: {
    transform: [{ translateY: 4 }],
  },
  buttonText: {
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.buttonPrimaryText,
  },
  termsText: {
    fontSize: typography.sizes.xs,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 18,
  },
  linkText: {
    textDecorationLine: "underline",
  },
});
