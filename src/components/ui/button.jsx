import React from "react";
import classNames from "classnames";

// Tu peux ajouter d'autres variantes ici
const variants = {
  default: "bg-green-600 text-white hover:bg-green-700",
  outline: "border border-gray-300 text-black hover:bg-gray-100",
};

export function Button({ children, className = "", variant = "default", ...props }) {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded font-medium transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
