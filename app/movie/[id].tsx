import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/movie-header";

export default function Movie() {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
        originalTitle={movieQuery.data.originalTitle}
      />
    </ScrollView>
  );
}
