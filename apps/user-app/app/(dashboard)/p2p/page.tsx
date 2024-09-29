import prisma from "@repo/db/prisma";
import { getServerSession } from "next-auth";
import { BalanceCard } from "../../components/BalanceCard";
import P2PTransactions from "../../components/P2PTransactions";
import SendCard from "../../components/SendCard";
import { authOptions } from "../../lib/auth";

async function getP2PTransactions() {
  try {
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
      where: {
        fromUserId: Number(session?.user?.id),
      },
    });
    return transactions;
  } catch (error) {
    console.log(error);
  }
}

async function getBalance() {
  try {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
      where: {
        userId: Number(session?.user?.id),
      },
    });
    return balance;
  } catch (error) {
    console.log(error);
  }
}

export default async function P2PTransfer() {
  const transactions = await getP2PTransactions();
  const balance = await getBalance();
  return (
    <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        P2P Transaction
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <SendCard />
        </div>
        <div>
          {balance && (
            <BalanceCard amount={balance.amount} locked={balance.locked} />
          )}
          <div className="pt-4">
            <P2PTransactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
