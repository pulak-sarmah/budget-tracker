import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dahsboard:Budget planner",
  description:
    "Track your spending, manage your budget, and take control of your finances with our easy-to-use budget tracker app.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <NavBar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
