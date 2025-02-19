import { Image, Pressable } from "react-native";

interface MoviePosterProps {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

export default function MoviePoster({
  id,
  poster,
  smallPoster = false,
  className,
}: MoviePosterProps) {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}>
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
}
