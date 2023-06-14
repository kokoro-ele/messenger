/*
 * @Author: kokoro
 * @Date: 2023-06-03 00:04:46
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-03 00:06:06
 * @Description: 请填写简介
 */
import { Conversation,Message,User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User;
  seen: User[];
}

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
}
