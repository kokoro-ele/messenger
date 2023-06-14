/*
 * @Author: kokoro
 * @Date: 2023-06-01 22:57:24
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-01 22:58:29
 * @Description: 请填写简介
 */
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages:{
    signIn: "/",
  }
});

export const config = {
  matcher:[
"/users/:path*",
"/conversations/:path*"
  ]
};
