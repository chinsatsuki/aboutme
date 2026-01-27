import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        "w-full rounded-md border px-3 py-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-black/20",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
