import { pusherServer } from './../../../libs/pusher';
/*
 * @Author: kokoro
 * @Date: 2023-06-13 02:40:31
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-14 00:34:41
 * @Description: 请填写简介
 */
import  getCurrentUser  from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
interface IParams {
  conversationId?: string;
}

export async function DELETE(
  request: Request,
  {params} : {params: IParams}
){
  try{
    const {conversationId}  = params;
    const currentUser = await getCurrentUser();
    if(!currentUser?.id || !currentUser?.email)
      return new NextResponse('Unauthorized',{status:401});

    const exisitingConversation = await prisma.conversation.findUnique({
      where:{
        id:conversationId
      },
      include:{
        users:true,
      }
    });

    if(!exisitingConversation)
      return new NextResponse('Invalid ID',{status:400});

    const deletedConversation = await prisma.conversation.deleteMany({
      where:{
        id:conversationId,
        userIds:{
          hasSome:[currentUser.id]
        }
      }
    })

    exisitingConversation.users.forEach(async (user)=>{
      if(user.email){
        pusherServer.trigger(user.email,"conversation:remove",exisitingConversation)
      }
    })
    return NextResponse.json(deletedConversation)
  }catch(error:any){
    console.log()
    return new NextResponse("Internal Error",{status:500})
  }
}
