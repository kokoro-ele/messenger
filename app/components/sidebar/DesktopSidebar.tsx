/*
 * @Author: kokoro
 * @Date: 2023-06-01 23:54:07
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 15:36:20
 * @Description: 请填写简介
 */
"use client";

import { useState } from "react";
import useRouters from "@/app/hooks/useRoutes";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";
import SettingsModal from "./SettingsModal";
interface DesktopSidebarProps {
  currentUser: User | null;
}
const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRouters();
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentUser);
  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
        hidden
        lg:fixed
        lg:inset-y-0
        lg:left-0
        lg:z-40
        lg:w-20
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
        "
      >
        <nav
          className="
          mt-4
          flex
          flex-col
          justify-between
        "
        >
          <ul
            role="list"
            className="
            flex
            flex-col
            items-center
            space-y-4
          "
          >
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={() => item.onClick && item.onClick()}
              />
            ))}
          </ul>
        </nav>
        <nav
          className="

        mt-4
        flex
        flex-col
        justify-between
        items-center
        "
        >
          <div
            onClick={() => setIsOpen(true)}
            className="
             cursor-pointer
             hover:opacity-80
              transition
            "
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
