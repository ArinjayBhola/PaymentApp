import prisma from "@repo/db/prisma";
import { Center } from "@repo/ui/center";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserHistory from "../../components/UserHistory";
import UserInformation from "../../components/UserInformation";
import { authOptions } from "../../lib/auth";

async function getUser() {
  const { user } = await getServerSession(authOptions);
  const userData = await prisma.user.findFirst({
    where: {
      id: Number(user?.id),
    },
    select: {
      email: true,
      name: true,
      number: true,
      password: false,
      OnRampTransaction: true,
      Balance: true,
      sentTransfers: true,
      receivedTransfers: true,
    },
  });
  return userData;
}

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const userData = await getUser();
  return (
    <Center
      Children={
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <UserInformation
            name={userData?.name || "Not Found"}
            email={userData?.email || "Not Found"}
            number={userData?.number || "Not Found"}
            balance={userData?.Balance[0]?.amount || 0}
          />
          <UserHistory
            onRamp={userData?.OnRampTransaction}
            p2pSend={userData?.sentTransfers}
            p2pReceived={userData?.receivedTransfers}
          />
        </div>
      }
    />
  );
}
