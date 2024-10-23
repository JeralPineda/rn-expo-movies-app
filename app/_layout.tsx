import { Text, View } from "react-native";
import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  nowPlayingAction();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello World</Text>
      {children}
    </View>
  );
}
