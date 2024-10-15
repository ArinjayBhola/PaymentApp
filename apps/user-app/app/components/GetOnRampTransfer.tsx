"use client";

import { Card } from "@repo/ui/card";

export const OnRampTransfer = ({ transactions }: any) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  const formatDate = (date: any) => {
    const d = new Date(date);
    return d.toDateString();
  };
  return (
    <Card title="On Ramp Transfers">
      <div className="pt-2">
        {transactions.map((t: any) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {formatDate(t.startTime)}
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
