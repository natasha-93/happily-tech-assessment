import clsx from "clsx";

type SectionTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => (
  <h1 className={clsx(className, "text-4xl font-bold my-12")}>{children}</h1>
);

export default SectionTitle;
