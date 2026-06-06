import React, { useEffect, useRef } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
  code: string;
  onCodeChange: (code: string) => void;
}

export default function VerificationModal({
  visible,
  onClose,
  email,
  code,
  onCodeChange,
}: VerificationModalProps) {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  useEffect(() => {
    if (code.length === 6) {
      router.replace("/");
    }
  }, [code]);

  const handleDigitPress = () => {
    inputRef.current?.focus();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.overlay}
      >
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View className="bg-white rounded-3xl p-6 w-[85%] max-w-[360px]">
          <Text className="text-h3 text-text-primary text-center mb-2">
            Check your email
          </Text>
          <Text className="text-body-medium text-text-secondary text-center mb-6">
            Enter the 6-digit code we sent to{"\n"}
            <Text
              className="text-body-medium text-text-primary"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              {email}
            </Text>
          </Text>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={(text) => {
              const digits = text.replace(/[^0-9]/g, "").slice(0, 6);
              onCodeChange(digits);
            }}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            autoFocus={false}
          />

          <View className="flex-row justify-between gap-2 mb-6">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={handleDigitPress}
                className="flex-1 h-14 rounded-xl border-2 items-center justify-center"
                style={{
                  borderColor:
                    index === code.length ? "#6C4EF5" : "#E5E7EB",
                  backgroundColor:
                    index < code.length ? "#F6F7FB" : "#FFFFFF",
                }}
              >
                <Text className="text-h2 text-text-primary">
                  {code[index] || ""}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={onClose} className="self-center">
            <Text className="text-body-medium text-lingua-purple">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});
