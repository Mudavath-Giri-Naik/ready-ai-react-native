import { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { AuthStackParamList } from "@/navigation/types";
import { typography } from "@/theme/typography";

const COLORS = {
  inputBorder: "#EFEFF4",
  inputBackground: "#FFFFFF",
  filledCellBg: "#F5F5F8",
  activeCellBorder: "#E5E5EA",
  emptyBorder: "#F5F5F8",
  subtitle: "#48484A",
  inputText: "#2C2C2E",
  hintText: "#8E8E93",
  orange: "#FF6D00",
  dark: "#1C1C1E",
  white: "#FFFFFF",
} as const;

type LoginNav = NativeStackNavigationProp<AuthStackParamList, "Login">;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginNav>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleContinue = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Main" }],
      })
    );
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== "" && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleHighlight}>Kickstart</Text>
        <Text style={styles.titleNormal}> your journey</Text>
      </Text>

      <Text style={styles.subtitle}>
        We will send you an OTP to verify your number.
      </Text>

      <View style={styles.phoneSection}>
        <Text style={styles.phoneLabel}>Phone number</Text>
        <View style={styles.phoneInputContainer}>
          <View style={styles.countryCodeContainer}>
            <Text style={styles.flagEmoji}>🇮🇳</Text>
            <Text style={styles.countryCodeText}>+91</Text>
            <Feather name="chevron-down" size={12} color={COLORS.dark} />
          </View>
          <View style={styles.verticalDivider} />
          <TextInput
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder="8812014288"
            placeholderTextColor={COLORS.hintText}
          />
        </View>
        <Text style={styles.errorText}>
          Please enter a valid 10-digit mobile number.
        </Text>
      </View>

      <View style={styles.otpSection}>
        <Text style={styles.otpLabel}>Enter the OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => {
            const isFilled = digit !== "";
            const isActive = focusedIndex === index;

            const cellStyle = [
              styles.otpCell,
              isFilled && styles.otpCellFilled,
              isActive && !isFilled && styles.otpCellActive,
              !isFilled && !isActive && styles.otpCellEmpty,
            ];

            return (
              <View key={index} style={cellStyle}>
                <TextInput
                  ref={(ref) => { inputs.current[index] = ref; }}
                  style={styles.otpTextInput}
                  value={digit}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleOtpKeyPress(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(-1)}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  caretHidden={true}
                />
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <View style={styles.buttonShadow}>
          <Pressable onPress={handleContinue}>
            <LinearGradient
              colors={["#FF7A00", "#FF4C00"]}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    position: "absolute",
    top: 88,
    left: 24,
    fontFamily: typography.fonts.inter.semiBold,
    fontSize: typography.sizes.xxxl,
    lineHeight: 36,
    letterSpacing: -0.3,
  },
  titleHighlight: {
    color: COLORS.orange,
  },
  titleNormal: {
    color: COLORS.dark,
  },
  subtitle: {
    position: "absolute",
    top: 146,
    left: 24,
    width: 345,
    height: 20,
    fontFamily: typography.fonts.inter.normal,
    fontSize: typography.sizes.m,
    lineHeight: 20,
    letterSpacing: -0.15,
    color: COLORS.subtitle,
  },
  phoneSection: {
    position: "absolute",
    top: 198,
    left: 24,
    width: 345,
  },
  phoneLabel: {
    width: 337,
    height: 16,
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.s,
    lineHeight: 16,
    letterSpacing: -0.13,
    color: COLORS.subtitle,
    marginBottom: 4,
  },
  phoneInputContainer: {
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    backgroundColor: COLORS.inputBackground,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    gap: 8,
  },
  countryCodeContainer: {
    width: 61,
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  flagEmoji: {
    fontSize: 15,
  },
  countryCodeText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    letterSpacing: -0.15,
    color: COLORS.inputText,
  },
  verticalDivider: {
    width: 1,
    height: 28,
    backgroundColor: COLORS.inputBorder,
    marginHorizontal: 4,
  },
  phoneInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: COLORS.inputText,
    height: "100%",
  },
  errorText: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.hintText,
    marginTop: 4,
  },
  otpSection: {
    position: "absolute",
    top: 326,
    left: 24,
  },
  otpLabel: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.12,
    color: COLORS.subtitle,
    marginBottom: 8,
  },
  otpContainer: {
    flexDirection: "row",
    gap: 8,
  },
  otpCell: {
    width: 44,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  otpCellFilled: {
    backgroundColor: COLORS.filledCellBg,
  },
  otpCellActive: {
    backgroundColor: COLORS.filledCellBg,
    borderWidth: 1,
    borderColor: COLORS.activeCellBorder,
  },
  otpCellEmpty: {
    backgroundColor: COLORS.inputBackground,
    borderWidth: 1,
    borderColor: COLORS.emptyBorder,
  },
  otpTextInput: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.2,
    textAlign: "center",
    color: COLORS.inputText,
    width: "100%",
    height: "100%",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 34,
    left: 16,
    right: 16,
  },
  buttonShadow: {
    backgroundColor: "#D93A00",
    borderRadius: 12,
    paddingBottom: 6,
  },
  buttonGradient: {
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: typography.fonts.inter.semiBold,
    fontSize: 16,
    letterSpacing: -0.16,
    color: COLORS.white,
  },
});
