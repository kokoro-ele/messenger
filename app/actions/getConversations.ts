/*
 * @Author: kokoro
 * @Date: 2023-06-02 23:27:47
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 23:31:40
 * @Description: 请填写简介
 */

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";


const getConversations = async () => {
  const currentUser = await getCurrentUser();
  if(!currentUser?.id ){
    return [];
  }
  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt : 'desc',
        },
      where:{
        userIds:{
          has : currentUser.id
        }
      },
        include:{
          users : true,
          messages:{
            include:{
              sender:true,
              seen:true

          }
        }
      }
    })
    return conversations;
  }catch (error:any) {
    return [];
  }
}

export default getConversations
