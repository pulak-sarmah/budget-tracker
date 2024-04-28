import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800  ">
      <div className="mt-12">{children}</div>
    </main>
  );
};

export default layout;
