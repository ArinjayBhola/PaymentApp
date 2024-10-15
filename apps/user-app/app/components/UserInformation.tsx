import { Card } from "@repo/ui/card";

export default function UserInformation({
  email,
  name,
  number,
  balance,
}: {
  email: string;
  name: string;
  number: string;
  balance: number;
}) {
  return (
    <div>
      <Card title="My Credentials">
        <div className="pb-8 pt-8 space-y-4">
          <div className="text-lg font-medium text-gray-700">
            Name:
            <span className="font-semibold text-gray-900">
              {name.toUpperCase()}
            </span>
          </div>

          <div className="text-lg font-medium text-gray-700">
            {/* <p><strong></strong></p> */}
            Email: <span className="font-semibold text-gray-900">{email}</span>
          </div>

          <div className="text-lg font-medium text-gray-700">
            Phone Number:{" "}
            <span className="font-semibold text-gray-900">{number}</span>
          </div>

          <div className="text-lg font-medium text-gray-700">
            Total Balance:{" "}
            <span className="font-semibold text-gray-900">
              ₹{balance / 100}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
