import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, type Href } from "expo-router";
import { images } from "@/constants/images";
import SocialAuthButton from "@/components/SocialAuthButton";
import VerificationModal from "@/components/VerificationModal";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleSignIn = () => {
    if (!email) return;
    setVerificationCode("");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVerificationCode("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-6 pt-4 pb-6">
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              className="mb-4"
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text className="text-h2 text-text-primary">{"←"}</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text className="text-h2 text-text-primary mb-1">
              Log in to your account
            </Text>
            <Text className="text-body-large text-text-secondary mb-6">
              Welcome back! Ready to learn? {"✨"}
            </Text>

            {/* Mascot */}
            <View className="items-center" style={{ marginBottom: -20 }}>
              <Image
                source={images.mascotAuth}
                className="h-32 w-32"
                resizeMode="contain"
              />
            </View>

            {/* Email Input */}
            <View className="bg-surface rounded-2xl p-4 mb-6">
              <Text className="text-caption text-text-secondary mb-1">
                Email
              </Text>
              <TextInput
                className="text-body-large text-text-primary"
                placeholder="Enter your email"
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
              />
            </View>

            {/* Log In Button */}
            <TouchableOpacity
              onPress={handleSignIn}
              activeOpacity={0.8}
              className="w-full rounded-2xl bg-lingua-purple py-4 mb-6"
            >
              <Text className="text-center text-h4 text-white">Log In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-border" />
              <Text className="mx-4 text-body-medium text-text-secondary">
                or continue with
              </Text>
              <View className="flex-1 h-px bg-border" />
            </View>

            {/* Social Buttons */}
            <View className="gap-3 mb-6">
              <SocialAuthButton
                color="#4285F4"
                label="Continue with Google"
                icon="G"
                onPress={() => {}}
              />
              <SocialAuthButton
                color="#1877F2"
                label="Continue with Facebook"
                icon="f"
                onPress={() => {}}
              />
              <SocialAuthButton
                color="#000000"
                label="Continue with Apple"
                icon="A"
                onPress={() => {}}
              />
            </View>

            {/* Footer */}
            <View className="flex-1" />
            <Text className="text-center text-body-medium text-text-secondary">
              Don&apos;t have an account?{" "}
              <Text
                className="text-lingua-purple"
                onPress={() => router.push("/sign-up" as Href)}
              >
                Sign up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showModal}
        onClose={handleCloseModal}
        email={email || "your email"}
        code={verificationCode}
        onCodeChange={setVerificationCode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
  },
});
