import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import CreateTransactionDialog from "./_components/CreateTransactionDialog";

const dashboardPage = async () => {
  const user = await currentUser();

  if (!user) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    return {
      redirect: {
        destination: "/wizard",
        permanent: false,
      },
    };
  }
  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between p-8 gap-4">
          <p className="text-3xl font-bold">Hello, {user.firstName}! 👋🏻</p>

          <div className="flex items-center gap-3">
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className=" border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
                >
                  new Income
                </Button>
              }
              type="income"
            ></CreateTransactionDialog>

            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className=" border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white"
                >
                  new Expense
                </Button>
              }
              type="expense"
            ></CreateTransactionDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
