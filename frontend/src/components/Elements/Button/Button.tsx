import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", ...props }, ref) => {
    return (
      <button
        style={{
          backgroundColor: "red",
          color: "white",
        }}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
