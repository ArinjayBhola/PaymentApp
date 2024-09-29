"use server";

import prisma from "@repo/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnrampTransaction(
  amount: number,
  provider: string,
) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const token = Math.random().toString();

  if (!userId) {
    return {
      message: "User not logged in",
    };
  }

  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: amount,
      status: "Processing",
      startTime: new Date(),
      provider: provider,
      token: token,
    },
  });
  return {
    message: "On ramp transaction created successfully",
  };
}
