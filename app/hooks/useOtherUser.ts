/*
 * @Author: kokoro
 * @Date: 2023-06-03 00:27:25
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-10 20:19:53
 * @Description: 请填写简介
 */
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";
const useOtherUser = (conversation:FullConversationType | {
  users: User[]
}) => {
  const session = useSession();
  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;
    const otherUser = conversation.users.filter((user)=>user.email !== currentUserEmail);
    return otherUser[0];
},[session?.data?.user?.email, conversation.users]);
return otherUser;
}

export default useOtherUser
