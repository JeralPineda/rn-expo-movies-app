import { Text, View } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovies";

export default function Home() {
  const { nowPlayingQuery } = useMovies();

  return (
    <View>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
}
