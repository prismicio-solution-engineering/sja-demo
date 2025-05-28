import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `HeroWithBackgroundImage`.
 */
export type HeroWithBackgroundImageProps =
  SliceComponentProps<Content.HeroWithBackgroundImageSlice>;

/**
 * Component for "HeroWithBackgroundImage" Slices.
 */
const HeroWithBackgroundImage: FC<HeroWithBackgroundImageProps> = ({
  slice,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      <PrismicNextImage
        field={slice.primary.background_image.mobile}
        height={401}
        className="absolute w-full inset-0 object-cover md:hidden"
      />
      <PrismicNextImage
        field={slice.primary.background_image.tablet}
        height={473}
        className="absolute w-full inset-0 object-cover hidden md:block lg:hidden"
      />
      <PrismicNextImage
        field={slice.primary.background_image}
        height={508}
        className="absolute w-full inset-0 object-cover hidden lg:block"
      />
      {/* Content Container */}
      <div className="relative z-10 flex items-center lg:mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-fit">
          <div className="max-w-2xl">
            <div className="md:text-3xl lg:text-4xl font-semibold text-6xl text-font-gray bg-yellow px-10 py-2 md:px-6 md:py-3">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="text-white p-10 font-medium text-3xl md:text-xl lg:text-2xl leading-relaxed bg-black/60 w-3/4">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithBackgroundImage;
