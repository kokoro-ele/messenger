/*
 * @Author: kokoro
 * @Date: 2023-06-01 23:41:37
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 15:48:34
 * @Description: 请填写简介
 */

import Sidebar from "@/app/components/sidebar/Sidebar";
import UserList from "@/app/users/components/UserList";
import getUsers from "../actions/getUsers";
export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    //@ts-expect-error Server component
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
