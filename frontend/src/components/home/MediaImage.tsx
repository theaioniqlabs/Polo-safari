import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function MediaImage({
  src,
  alt,
  className,
  priority,
  sizes = "100vw",
  fill = true,
  width,
  height,
}: MediaImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      priority={priority}
      sizes={sizes}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
