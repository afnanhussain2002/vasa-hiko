import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-1 px-6 pt-8 pb-6">
        {/* Logo Header */}
        <View className="items-center gap-2">
          <Image
            source={images.mascotLogo}
            className="h-12 w-12"
            resizeMode="contain"
          />
          <Text className="text-h3 text-text-primary">VasaHiko</Text>
        </View>

        {/* Title */}
        <View className="mt-8">
          <Text className="text-h1 text-text-primary">
            Your AI language{"\n"}
            <Text className="text-h1 text-lingua-blue">teacher.</Text>
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="mt-3 text-body-medium text-text-secondary">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Mascot Illustration */}
        <View className="flex-1 items-center justify-center">
          <Image
            source={images.mascotWelcome}
            className="h-64 w-64"
            resizeMode="contain"
          />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C4EF5",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  buttonArrow: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 8,
  },
});
