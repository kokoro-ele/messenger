/*
 * @Author: kokoro
 * @Date: 2023-05-31 13:32:57
 * @LastEditors: kokoro
 * @LastEditTime: 2023-05-31 14:23:09
 * @Description: 请填写简介
 */
import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
    flex
    flex-col
    min-h-full
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100
    "
    >
      <div
        className="
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
      >
        <Image
          alt="logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2
          className="
            mt-6
            text-center
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
"
        >
          sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
