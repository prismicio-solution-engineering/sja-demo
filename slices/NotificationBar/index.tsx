import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `NotificationBar`.
 */
export type NotificationBarProps =
  SliceComponentProps<Content.NotificationBarSlice>;

/**
 * Component for "NotificationBar" Slices.
 */
const NotificationBar: FC<NotificationBarProps> = ({ slice }) => {
  return (
    <section
      className={`w-full py-3 px-4`}
      style={{ backgroundColor: `${slice.primary.background_color}` }}
    >
      <div className=" mx-auto text-center">
        <div className="font-medium text-sm md:text-base">
          <PrismicRichText
            field={slice.primary.message}
            components={{
              paragraph: ({ children }) => (
                <p className="text-2xl text-font-gray">{children}</p>
              ),
              hyperlink: ({ children, node }) => (
                <PrismicNextLink
                  field={node.data}
                  className="font-semibold text-blue-800 underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out"
                >
                  {children}
                </PrismicNextLink>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default NotificationBar;
