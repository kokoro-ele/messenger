/*
 * @Author: kokoro
 * @Date: 2023-06-13 21:56:25
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-14 00:50:49
 * @Description: 请填写简介
 */
import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId:process.env.PUSHER_APP_ID!,
  key:process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret:process.env.PUSHER_SECRET!,
  cluster:'eu',
  useTLS:true
});

export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,{

    channelAuthorization:{
      endpoint:'/api/pusher/auth',
      transport:'ajax'
    },
  cluster:'eu',
});
