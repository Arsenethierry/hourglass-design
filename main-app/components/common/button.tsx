import cn from "classnames";
import { forwardRef } from "react";

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const { type = "button", className, children, ...rest } = props;

    const classes = cn(
        "py-2 px-5 text-white bg-violet-500 rounded-lg shadow text-base font-medium leading-normal border border-violet-500",
        className
    );

    return (
        <button
            ref={ref}
            className={classes}
            {...rest}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";
export default Button;