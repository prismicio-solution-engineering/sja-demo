import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `ContentHighlightWithImage`.
 */
export type ContentHighlightWithImageProps =
  SliceComponentProps<Content.ContentHighlightWithImageSlice>;

/**
 * Component for "ContentHighlightWithImage" Slices.
 */
const ContentHighlightWithImage: FC<ContentHighlightWithImageProps> = ({
  slice,
}) => {
  return (
    <section className="w-full py-12 px-4 bg-white overflow-hidden">
      <PrismicNextLink
        field={slice.primary.link}
        className="flex flex-row flex-nowrap"
      >
        <div className="w-1/3 z-10 flex shrink basis-auto -mr-[10%] items-center px-4">
          <div className="bg-[#bfdfd2] bg-opacity-90 p-8 rounded-lg">
            <div className="text-4xl font-bold text-font-gray mb-4">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="text-font-gray text-2xl font-extralight leading-relaxed mb-6">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="flex justify-end">
              <svg
                className="w-12 h-6 text-font-gray"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <PrismicNextImage
          field={slice.primary.main_image}
          className="w-3/4 h-[400px] object-cover rounded-lg"
        />
      </PrismicNextLink>
    </section>
  );
};

export default ContentHighlightWithImage;
