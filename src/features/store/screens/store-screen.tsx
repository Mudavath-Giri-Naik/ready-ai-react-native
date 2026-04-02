import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";

export const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Store Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 18,
    color: colors.textPrimary,
  },
});
