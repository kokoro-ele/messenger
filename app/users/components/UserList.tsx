/*
 * @Author: kokoro
 * @Date: 2023-06-02 15:47:28
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 16:03:52
 * @Description: 请填写简介
 */
"use client";
import { User } from "@prisma/client";
import UserBox from "./UserBox";
import React from "react";

interface UserListProps {
  items: User[];
}
const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside
      className="
        fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:left-20
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-200
        block
        w-full
        left-0
        "
    >
      <div className="px-5">
        <div
          className="
              flex-col
              "
        >
          <div
            className="
              text-2xl
              font-bold
              text-neutral-900
              py-4
              "
          >
            people
          </div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
