import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface MovieHeaderProps {
  poster: string;
  title: string;
  originalTitle: string;
}

export default function MovieHeader({
  poster,
  title,
  originalTitle,
}: MovieHeaderProps) {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 55,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>

      <View
        style={{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>

        <View className="px-5 mt-5">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="font-semibold text-2xl">{title}</Text>
        </View>
      </View>
    </>
  );
}
