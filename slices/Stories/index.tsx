import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `TestimonialCardsWithImage`.
 */
export type TestimonialCardsWithImageProps =
  SliceComponentProps<Content.TestimonialCardsWithImageSlice>;

/**
 * Component for "TestimonialCardsWithImage" Slices.
 */
const TestimonialCardsWithImage: FC<TestimonialCardsWithImageProps> = ({
  slice,
}) => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {slice.primary.cards.map((item, idx) => (
            <PrismicNextLink
              field={item.link}
              key={idx}
              className="relative h-96 bg-green-500 overflow-hidden transition duration-300"
            >
              <PrismicNextImage
                field={item.image}
                className="absolute inset-0 object-cover"
                width={624}
                height={384}
              />
              <div className="absolute w-full z-10 p-4 h-fit bottom-0 flex flex-col justify-center bg-white/80 hover:bg-white/90">
                <div className="text-3xl font-semibold mb-4 text-primary-green">
                  <PrismicRichText field={item.headline} />
                </div>
                <div className="text-xl leading-relaxed text-font-gray">
                  <PrismicRichText field={item.description} />
                </div>
              </div>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCardsWithImage;
