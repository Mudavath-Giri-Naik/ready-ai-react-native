import { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Feather from "@expo/vector-icons/Feather";
import { AuthStackParamList } from "@/navigation/types";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

type LoginNav = NativeStackNavigationProp<AuthStackParamList, "Login">;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginNav>();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Main" }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={spacing.xl} color={colors.textPrimary} />
      </Pressable>

      <Text style={styles.heading}>Kickstart your journey</Text>

      <TextInput
        style={styles.phoneInput}
        placeholder="Enter phone number"
        placeholderTextColor={colors.textDisabled}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={`otp-${index}`}
            ref={(el) => {
              otpRefs.current[index] = el;
            }}
            style={styles.otpCell}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>

      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.screenPadding,
    paddingTop: spacing.giga,
  },
  backButton: {
    marginBottom: spacing.xxl,
  },
  heading: {
    fontSize: typography.sizes.xxl,
    fontFamily: typography.fonts.inter.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xxl,
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.inputRadius,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s,
    fontSize: typography.sizes.m,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textPrimary,
    marginBottom: spacing.xl,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.s,
    marginBottom: spacing.xxl,
  },
  otpCell: {
    width: spacing.xxxl + spacing.xs,
    height: spacing.xxxl + spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.inputRadius,
    textAlign: "center",
    fontSize: typography.sizes.xl,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.textPrimary,
  },
  submitButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: spacing.m,
    borderRadius: spacing.buttonRadius,
    alignItems: "center",
  },
  submitText: {
    fontSize: typography.sizes.l,
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.buttonPrimaryText,
  },
});
