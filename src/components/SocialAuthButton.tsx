import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SocialAuthButtonProps {
  color: string;
  label: string;
  icon: string;
  onPress: () => void;
}

export default function SocialAuthButton({
  color,
  label,
  icon,
  onPress,
}: SocialAuthButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full flex-row items-center rounded-2xl border border-border bg-white py-3.5 px-4"
    >
      <View
        className="w-8 h-8 rounded-full items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <Text
          className="text-caption text-white"
          style={{ fontFamily: "Poppins-Bold" }}
        >
          {icon}
        </Text>
      </View>
      <View className="flex-1">
        <Text className="text-center text-body-large text-text-primary">
          {label}
        </Text>
      </View>
      <View className="w-8" />
    </TouchableOpacity>
  );
}
