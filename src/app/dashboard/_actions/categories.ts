"use server";

import {
  CreateCategorySchemaType,
  CreateCtegorySchema,
} from "@/schema/categories";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parseBody = CreateCtegorySchema.safeParse(form);

  if (!parseBody.success) {
    throw new Error(parseBody.error.errors[0].message);
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const { name, icon, type } = parseBody.data;
  return await prisma.category.create({
    data: {
      userId: user.id,
      name,
      icon,
      type,
    },
  });
}
