import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `FeatureGrid`.
 */
export type FeatureGridProps = SliceComponentProps<Content.FeatureGridSlice>;

/**
 * Component for "FeatureGrid" Slices.
 */
const FeatureGrid: FC<FeatureGridProps> = ({ slice }) => {
  return (
    <div className="w-full bg-background-gray mx-auto px-4 py-8">
      <div className="mx-auto bg-white px-24 pb-8">
        <div className="mx-auto w-4/5 mb-12">
          <div className="h-2.5 bg-gray-200 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-green to-yellow"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12">
          {slice.primary.main_feature.map((item, idx) => (
            <div key={idx} className="w-full space-y-6">
              <div className="">
                <PrismicNextImage
                  field={item.image}
                  width={496}
                  height={534}
                  className="object-cover mx-auto lg:mx-0 rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-medium text-teal-600">
                  <PrismicRichText field={item.headline} />
                </div>
                <div className="text-gray-700 text-base md:text-lg font-semibold leading-relaxed">
                  <PrismicRichText field={item.description} />
                </div>
                <PrismicNextLink
                  field={item.link}
                  className="inline-block text-font-gray font-semibold hover:text-primary-green transition-colors underline"
                />
              </div>
            </div>
          ))}

          <div className="space-y-8">
            {slice.primary.feature_cards.map((item, index) => (
              <article key={index} className="space-y-4 flex flex-col">
                <div className="text-xl md:text-2xl font-bold text-primary-green transition-colors cursor-pointer">
                  <PrismicRichText field={item.title} />
                </div>
                <div className="text-font-gray text-base font-semibold md:text-lg">
                  <PrismicRichText field={item.description} />
                </div>
                <PrismicNextLink
                  field={item.card_link}
                  className="text-font-gray text-right font-semibold hover:text-primary-green transition-colors whitespace-nowrap underline"
                >
                  {item.card_link.text} &gt;
                </PrismicNextLink>
                <div className="flex-1 w-full my-4">
                  <div className="h-1.5 bg-gray-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-green to-yellow"></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
