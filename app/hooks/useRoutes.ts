/*
 * @Author: kokoro
 * @Date: 2023-06-02 12:39:44
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-12 19:22:26
 * @Description: 请填写简介
 */
import { useMemo } from "react"
import { useParams, usePathname } from "next/navigation"
import { HiChat} from "react-icons/hi"
import { HiArrowLeftOnRectangle,HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const routes = useMemo(() => [
    {
      label : 'Chat',
      href : '/conversations',
      icon : HiChat,
      active:pathname === '/conversations' || !!conversationId
    },
    {
      label : 'Users',
      href : '/users',
      icon : HiUsers,
      active:pathname === '/users'
    },
    {
      label : 'Logout',
      href : '#',
      onClick : () => signOut(),
      icon : HiArrowLeftOnRectangle,
    }
  ],[pathname,conversationId]);
  return routes;
  }

  export default useRoutes;


