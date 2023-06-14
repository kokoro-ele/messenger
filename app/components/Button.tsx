/*
 * @Author: kokoro
 * @Date: 2023-05-31 16:12:56
 * @LastEditors: kokoro
 * @LastEditTime: 2023-05-31 22:58:58
 * @Description: 请填写简介
 */
"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
  flex
  justify-center
  rounded-md
  py-2
  px-3
  text-sm
  font-semibold
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary && "bg-gray-100 text-white",
        danger && "bg-red-500 text-white",
        !secondary && !danger && "bg-sky-600 hover:bg-sky-600",
        []
      )}
    >
      {children}
    </button>
  );
};

export default Button;
