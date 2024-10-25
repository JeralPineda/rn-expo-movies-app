import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Movie() {
  const { id } = useLocalSearchParams();

  getMovieByIdAction(+id);

  return (
    <View>
      <Text>Movie</Text>
    </View>
  );
}
