/*
 * @Author: kokoro
 * @Date: 2023-06-02 23:19:22
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 23:38:07
 * @Description: 请填写简介
 */

import React from "react";
import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getUsers from "../actions/getUsers";
export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
