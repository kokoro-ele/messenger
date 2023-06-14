/*
 * @Author: kokoro
 * @Date: 2023-06-10 20:33:58
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-10 20:33:58
 * @Description: 请填写简介
 */


import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (
  conversationId: string
) => {
  try{
    const currentUser = await getCurrentUser();

    if(!currentUser?.email){
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where:{
        id: conversationId
      },
      include:{
          users:true
        }
    });
    return conversation;
  }
  catch(err:any){
    return null;
  }
}

export default getConversationById;

