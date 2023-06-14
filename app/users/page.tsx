/*
 * @Author: kokoro
 * @Date: 2023-06-01 22:48:11
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-01 23:34:19
 * @Description: 请填写简介
 */
// "use client";
import React from "react";
import { signOut } from "next-auth/react";
import EmptyState from "@/app/components/EmptyState";
const Users = () => {
  return (
    <div
      className="
    hidden
    lg:block
    lg:pl-80
    h-full"
    >
      <EmptyState />
    </div>
  );
};

export default Users;
