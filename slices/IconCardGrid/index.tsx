import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `IconCardGrid`.
 */
export type IconCardGridProps = SliceComponentProps<Content.IconCardGridSlice>;

/**
 * Component for "IconCardGrid" Slices.
 */
const IconCardGrid: FC<IconCardGridProps> = ({ slice }) => {
  return (
    <section className="py-12 px-4 bg-white w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {slice.primary.cards.map((item, idx) => (
            <PrismicNextLink
              key={idx}
              field={item.link}
              className="border-2 border-white rounded-2xl p-4 flex flex-col items-center text-center hover:border-primary-green hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <div className="w-56 h-56  flex items-center justify-center">
                <PrismicNextImage field={item.icon} />
              </div>
              <span className="text-xl font-medium text-font-gray">
                {item.link.text}
              </span>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconCardGrid;
