/*
 * @Author: kokoro
 * @Date: 2023-06-02 16:03:21
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-13 21:40:37
 * @Description: 请填写简介
 */

"use client";
import React from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import axios from "axios";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
interface UserBoxProps {
  data: User | null;
}
const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", {
        userId: data?.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="
        w-full
        relative
        flex
        items-center
        space-x-4
        bg-white
        p-3
        hover:bg-neutral-100
        rounded-lg
        cursor-pointer
        transition
        "
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div
              className="
                    flex
                    items-center
                    justify-between
                    mb-1
                    "
            >
              <p
                className="
                        text-sm
                        font-medium
                        text-gray-900
                        "
              >
                {data?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
