import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CenteredCta`.
 */
export type CenteredCtaProps = SliceComponentProps<Content.CenteredCtaSlice>;

/**
 * Component for "CenteredCta" Slices.
 */
const CenteredCta: FC<CenteredCtaProps> = ({ slice }) => {
  return (
    <section className="w-full p-8 bg-yellow">
      <div className="mx-auto text-center">
        <div className="font-medium text-sm md:text-base">
          <PrismicNextLink
            field={slice.primary.button_link}
            className="p-4 text-base text-white"
            style={{
              backgroundColor: `${slice.primary.button_background_color}`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CenteredCta;
