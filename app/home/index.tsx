import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovies } from "@/presentation/hooks/useMovies";
import SlidesShow from "@/presentation/components/movies/slides-show";
import MovieHorizontalList from "@/presentation/components/movies/movie-horizontal-list";

export default function Home() {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        {/* Carousel de imágenes  */}
        <SlidesShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular*/}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Top Rated */}
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data ?? []}
          className="mb-5"
        />

        {/* Upcoming */}
        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
}
