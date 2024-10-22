import { Text, View } from "react-native";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello World</Text>
      {children}
    </View>
  );
}
