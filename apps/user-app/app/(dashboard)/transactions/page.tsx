import prisma from "@repo/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { OnRampTransfer } from "../../components/GetOnRampTransfer";
import { P2PRecivedTransfers } from "../../components/P2PRecivedTransfers";
import { P2PSendTransfers } from "../../components/P2PSendTransfers";
import { authOptions } from "../../lib/auth";

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session.user.id),
    },
  });
  return transactions;
}
async function getp2pSentTransactions() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session.user.id),
    },
  });
  return transactions;
}
async function getp2pReceivedTransactions() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session.user.id),
    },
  });
  return transactions;
}

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  const onRampTransactions = await getOnRampTransactions();
  const p2pTransactions = await getp2pSentTransactions();
  const p2pReceivedTransactions = await getp2pReceivedTransactions();
  return (
    <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Transfer
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <OnRampTransfer transactions={onRampTransactions} />
        </div>
        <div>
          <P2PSendTransfers transactions={p2pTransactions} />

          <div className="pt-4">
            <P2PRecivedTransfers transactions={p2pReceivedTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
