import { Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="gap-6">
        <View className="gap-2">
          <Text className="text-h1 text-lingua-purple">lingua</Text>
          <Text className="text-body-medium text-text-secondary">
            Design system demo
          </Text>
        </View>

        <View className="gap-3">
          <Text className="text-h4 text-text-primary">Primary Colors</Text>
          <View className="flex-row flex-wrap gap-3">
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-lingua-purple" />
              <Text className="text-caption text-text-secondary">Purple</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-lingua-deep-purple" />
              <Text className="text-caption text-text-secondary">Deep</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-lingua-blue" />
              <Text className="text-caption text-text-secondary">Blue</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-lingua-green" />
              <Text className="text-caption text-text-secondary">Green</Text>
            </View>
          </View>
        </View>

        <View className="gap-3">
          <Text className="text-h4 text-text-primary">Semantic Colors</Text>
          <View className="flex-row flex-wrap gap-3">
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-success" />
              <Text className="text-caption text-text-secondary">Success</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-warning" />
              <Text className="text-caption text-text-secondary">Warning</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-streak" />
              <Text className="text-caption text-text-secondary">Streak</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-error" />
              <Text className="text-caption text-text-secondary">Error</Text>
            </View>
            <View className="items-center gap-1">
              <View className="h-16 w-16 rounded-xl bg-info" />
              <Text className="text-caption text-text-secondary">Info</Text>
            </View>
          </View>
        </View>

        <View className="gap-3">
          <Text className="text-h4 text-text-primary">Typography</Text>
          <View className="card card--surface gap-3">
            <Text className="text-h1 text-text-primary">H1 Page Title</Text>
            <Text className="text-h2 text-text-primary">H2 Section Title</Text>
            <Text className="text-h3 text-text-primary">H3 Card Title</Text>
            <Text className="text-h4 text-text-primary">H4 Subheading</Text>
            <Text className="text-body-large text-text-primary">
              Body Large — important content
            </Text>
            <Text className="text-body-medium text-text-primary">
              Body Medium — body text
            </Text>
            <Text className="text-body-small text-text-secondary">
              Body Small — supporting text
            </Text>
            <Text className="text-caption text-text-secondary">
              Caption — labels, meta text
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
