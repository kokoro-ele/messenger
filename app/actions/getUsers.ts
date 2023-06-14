/*
 * @Author: kokoro
 * @Date: 2023-06-02 15:40:14
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 15:40:14
 * @Description: 请填写简介
 */
import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getUsers = async ()=>{
  const session = await getSession();
  if(!session?.user?.email){
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy:{
        createdAt:'desc'
      },
      where:{
        NOT:{
          email:session.user.email as string
        }
      }
    });
    return users;
  } catch (error:any) {
    return [];
  }

}

export default getUsers;
