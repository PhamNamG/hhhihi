'use client'; // nếu dùng trong app router

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const MVImage = ({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  rest
}: any) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <img
      src={fallbackSrc || src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
      {...rest}
    />
  );
};

export default MVImage;