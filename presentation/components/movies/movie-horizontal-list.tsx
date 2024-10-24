import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { FlatList, Text, View } from "react-native";

import MoviePoster from "./movie-poster";

interface MovieHorizontalListProps {
  title: string;
  movies: Movie[];
  className?: string;
}

export default function MovieHorizontalList({
  title,
  movies,
  className,
}: MovieHorizontalListProps) {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
