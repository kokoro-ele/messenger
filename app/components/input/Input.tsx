/*
 * @Author: kokoro
 * @Date: 2023-05-31 15:34:45
 * @LastEditors: kokoro
 * @LastEditTime: 2023-05-31 16:08:33
 * @Description: 请填写简介
 */
"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
          form-input
          block
          w-full
          shadow-sm
          sm:text-sm
          ring-1
          ring-inset
          ring-gray-300
          rounded-md
          focus:ring-sky-600
          focus:ring-2
          `,
            errors[id] && "focus:ring-red-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
