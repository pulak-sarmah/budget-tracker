import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen container">
      <div className="flex flex-row mt-8 justify-between">
        <Skeleton className="h-[40px] w-[140px]" />
        <div className="flex gap-4">
          <Skeleton className="h-[40px] w-[100px]" />
          <Skeleton className="h-[40px] w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default loading;
