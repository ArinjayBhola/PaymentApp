import { Card } from "@repo/ui/card";

export default function P2PTransactions({ transactions }: any) {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }

  interface Transaction {
    timestamp: Date;
    amount: number;
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t: Transaction) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Transferred INR</div>
              <div className="text-slate-600 text-xs">
                {t.timestamp.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              - Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
