import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6 gap-8">
      <Text className="text-h1 text-lingua-purple">vasa-hiko</Text>

      <Link href="/onboarding" asChild>
        <TouchableOpacity className="w-full rounded-2xl bg-lingua-purple px-6 py-4">
          <Text className="text-center text-body-large text-white">
            Open Onboarding
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
