"use client";

import React from "react";
import useActiveChannel from "@/app/hooks/useActiveChannel";
const ActiveStatus = () => {
  useActiveChannel();
  return <div>ActiveStatus</div>;
};

export default ActiveStatus;
