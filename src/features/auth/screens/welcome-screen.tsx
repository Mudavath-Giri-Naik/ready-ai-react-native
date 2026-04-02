import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";
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
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather
            name="check-circle"
            size={typography.sizes.l}
            color={colors.buttonPrimaryText}
          />
          <Text style={styles.buttonText}>Let's go</Text>
        </Pressable>

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
    left: 128,
    width: 138,
    height: 46,
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
  button: {
    backgroundColor: colors.buttonPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 345,
    height: 58,
    borderRadius: spacing.inputRadius,
    gap: 2,
    marginBottom: spacing.xl,
    borderBottomWidth: 4,
    borderBottomColor: colors.primaryDark,
  },
  buttonPressed: {
    borderBottomWidth: 0,
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
