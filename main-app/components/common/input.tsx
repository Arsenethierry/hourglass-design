import { forwardRef } from "react";
import cn from "classnames";

type Ref = HTMLInputElement;

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { className, ...rest } = props;

  const classes = cn(
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-violet-500 block w-full pl-2 py-2.5 focus:outline-none",
    className
  );

  return <input ref={ref} className={classes} {...rest} />;
});

Input.displayName = "Input";
export default Input;
