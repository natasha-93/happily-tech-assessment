import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={clsx(className, "focus:outline-none flex w-full mb-2 mr-3 py-1")}
    {...props}
  />
);

export default Input;
