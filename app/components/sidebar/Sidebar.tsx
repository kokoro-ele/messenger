/*
 * @Author: kokoro
 * @Date: 2023-06-01 23:46:26
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 14:59:46
 * @Description: 请填写简介
 */

import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";
async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
