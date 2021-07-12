import clsx from "clsx";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "lightBlue" | "white" | "black";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: ButtonColor;
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "text-xs px-2 py-1 w-32",
  medium: "text-sm px-4 py-2 w-40",
  large: "text-base px-6 py-3 w-52",
};

const colorStyles: Record<ButtonColor, string> = {
  lightBlue: "bg-lightBlue-900 hover:bg-blue-900 text-white",
  white: "bg-white hover:bg-lightBlue-50 text-lightBlue-900",
  black: "bg-black hover:bg-blue-900 text-white",
};

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  color,
  ...props
}) => (
  <button
    className={clsx(
      className,
      "font-semibold",
      "rounded-full",
      "transition-colors",
      "uppercase",
      sizeStyles[size],
      colorStyles[color]
    )}
    {...props}
  />
);

Button.defaultProps = {
  size: "medium",
  color: "lightBlue",
};

export default Button;
