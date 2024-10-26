import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/movie-header";
import MovieDescription from "@/presentation/components/movie/movie-description";
import MovieCast from "@/presentation/components/movie/movie-cast";

export default function Movie() {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(Number(id));

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

      <MovieDescription movie={movieQuery.data} />

      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
}
