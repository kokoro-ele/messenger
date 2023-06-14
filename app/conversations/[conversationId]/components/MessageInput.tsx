/*
 * @Author: kokoro
 * @Date: 2023-06-10 23:49:21
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-11 00:06:26
 * @Description: 请填写简介
 */
"use client";
import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
import React from "react";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
}
const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100
          w-full
          rounded-full
          focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
