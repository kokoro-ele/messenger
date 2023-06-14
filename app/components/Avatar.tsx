/*
 * @Author: kokoro
 * @Date: 2023-06-02 15:14:02
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-14 01:29:10
 * @Description: 请填写简介
 */
"use client";
import Image from "next/image";
import React from "react";
import { User } from "@prisma/client";
import useActiveList from "../hooks/useActiveList";
interface AvatarProps {
  user?: User | null;
}
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative">
      <div
        className="
          relative
          inline-block
          rounded-full
          overflow-hidden
          h-9
          w-9
          md:h-11
          md:w-11
        "
      >
        <Image alt="Avatar" src={user?.image || "/images/logo.png"} fill />
      </div>
      {isActive && (
        <span
          className="
          absolute
          block
          rounded-full
          bg-green-400
          ring-2
          ring-white
          top-0
          right-0
          h-2.5
          w-2.5
          md:h-3
          md:w-3
        "
        ></span>
      )}
    </div>
  );
};

export default Avatar;
