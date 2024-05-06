import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Budget planner :Sign in",
  description:
    "Track your spending, manage your budget, and take control of your finances with our easy-to-use budget tracker app.",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800  ">
      <div className="mt-12">{children}</div>
    </main>
  );
};

export default layout;
