import { PiggyBank } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className=" font-bold text-2xl flex gap-1 items-center">
      <PiggyBank className="text-fuchsia-600" />
      <span className="text-2xl bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
        Budget Planner
      </span>
    </div>
  );
};

export const LogoMobile = () => {
  return (
    <div className=" font-bold text-2xl flex gap-1 items-center">
      <PiggyBank className="text-fuchsia-600" size={40} />
    </div>
  );
};

export default Logo;
