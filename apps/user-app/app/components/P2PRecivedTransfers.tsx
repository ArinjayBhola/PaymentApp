"use client";

import { Card } from "@repo/ui/card";

export const P2PRecivedTransfers = ({ transactions }: any) => {
  if (!transactions.length) {
    return (
      <Card title="P2P Recived">
        <div className="text-center pb-8 pt-8">No Recent P2P transactions</div>
      </Card>
    );
  }
  const formatDate = (date: any) => {
    const d = new Date(date);
    return d.toDateString();
  };
  return (
    <Card title="P2P Recived">
      <div className="pt-2">
        {transactions.map((t: any) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {formatDate(t.timestamp)}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
