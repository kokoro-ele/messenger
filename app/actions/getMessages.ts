/*
 * @Author: kokoro
 * @Date: 2023-06-10 21:02:44
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-10 21:05:20
 * @Description: 请填写简介
 */
import prisma from "@/app/libs/prismadb";

const getMessages = async(

  conversationId:string
)=>{
  try{
    const messages = await prisma.message.findMany({
      where:{
        conversationId:conversationId
      },
      include:{
        sender:true,
        seen:true
      },
      orderBy:{
        createdAt:"asc"
      }
  });

  return messages;
  }catch(error:any){
    return [];
  }
}

export default getMessages;
