import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-1 px-6 pt-10 pb-6">
        {/* Logo Header */}
        <View className="flex-row items-center justify-center gap-2">
          <Image
            source={images.mascotLogo}
            className="h-10 w-10"
            resizeMode="contain"
          />
          <Text className="text-h3 text-text-primary">lingua</Text>
        </View>

        {/* Title */}
        <View className="mt-8">
          <Text className="text-h1 text-text-primary">
            Your AI language{"\n"}
            <Text className="text-h1 text-lingua-blue">teacher.</Text>
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="mt-3 text-body-large text-text-secondary">
          Real conversations, personalized{"\n"}
          lessons, anytime, anywhere.
        </Text>

        {/* Mascot Illustration with Speech Bubbles */}
        <View className="flex-1 items-center justify-center">
          <View className="relative w-80 h-80">
            <Image
              source={images.mascotWelcome}
              className="h-80 w-80"
              resizeMode="contain"
            />

            {/* Hello! Bubble */}
            <View className="absolute top-10 -left-4 z-10">
              <View className="bg-[#EBF5FF] px-4 py-2.5 rounded-2xl">
                <Text
                  className="text-body-large text-text-primary"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  Hello!
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -6,
                  right: 16,
                  width: 0,
                  height: 0,
                  borderLeftWidth: 6,
                  borderRightWidth: 6,
                  borderTopWidth: 8,
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "#EBF5FF",
                }}
              />
            </View>

            {/* ¡Hola! Bubble */}
            <View className="absolute top-6 -right-2 z-10">
              <View className="bg-[#F0F4FF] px-4 py-2.5 rounded-2xl">
                <Text
                  className="text-body-large text-lingua-blue"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  ¡Hola!
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -6,
                  left: 16,
                  width: 0,
                  height: 0,
                  borderLeftWidth: 6,
                  borderRightWidth: 6,
                  borderTopWidth: 8,
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "#F0F4FF",
                }}
              />
            </View>

            {/* 你好! Bubble */}
            <View className="absolute top-[45%] -right-6 z-10">
              <View className="bg-[#FFF0F0] px-4 py-2.5 rounded-2xl">
                <Text
                  className="text-body-large text-error"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  你好!
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -6,
                  left: 16,
                  width: 0,
                  height: 0,
                  borderLeftWidth: 6,
                  borderRightWidth: 6,
                  borderTopWidth: 8,
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "#FFF0F0",
                }}
              />
            </View>
          </View>
        </View>

        {/* Pagination Dots */}
        <View className="flex-row items-center justify-center gap-2 mb-6">
          <View className="w-2.5 h-2.5 rounded-full bg-lingua-purple" />
          <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Text style={styles.buttonArrow}>&gt;</Text>
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
    paddingVertical: 18,
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
