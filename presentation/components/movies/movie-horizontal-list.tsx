import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";

import MoviePoster from "./movie-poster";
import { useEffect, useRef } from "react";

interface MovieHorizontalListProps {
  title: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

export default function MovieHorizontalList({
  title,
  movies,
  className,
  loadNextPage,
}: MovieHorizontalListProps) {
  const isLoading = useRef(false);

  //Si las películas cambian,
  //se cambia el estado de carga para que permita la siguiente pagina
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Determinar si se ha llegado al final de la lista o esta cerca
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    // Cargar más películas
    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${className}`}>
      {title && <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
