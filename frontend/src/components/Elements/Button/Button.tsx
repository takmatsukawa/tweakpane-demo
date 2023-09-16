import React from "react";
import clsx from "clsx";

const variants = {
  primary: "bg-blue-600 text-white",
  inverse: "bg-white text-blue-600",
  danger: "bg-red-600 text-white",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = "button", className, variant = "primary", size = "md", ...props },
    ref,
  ) => {
    return (
      <button
        className={clsx(
          "flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80",
          variants[variant],
          sizes[size],
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      >
        <span className="mx-2">{props.children}</span>
      </button>
    );
  },
);
