import NavBar from "@/components/NavBar";
import React from "react";

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
