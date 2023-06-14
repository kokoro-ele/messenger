/*
 * @Author: kokoro
 * @Date: 2023-06-02 14:51:48
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 14:58:05
 * @Description: 请填写简介
 */

import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

import React from 'react'

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if(!session?.user?.email){
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where:{
        email:session.user.email as string
      }});

      if(!currentUser){
        return null;
      }

      return currentUser;
  }
  catch (error:any) {
    return null;
  }
}

export default getCurrentUser
