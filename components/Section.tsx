import clsx from "clsx";

export type SectionColor = "lightBlue" | "white" | "black";

const colorStyles: Record<SectionColor, string> = {
  lightBlue: "bg-lightBlue-900 text-white",
  white: "bg-white text-black",
  black: "bg-black text-white",
};

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: SectionColor;
};

const Section: React.FC<SectionProps> = ({ className, color, ...props }) => (
  <section
    className={clsx(className, "px-24 py-12", colorStyles[color])}
    {...props}
  />
);

export default Section;
