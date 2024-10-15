import { Card } from "@repo/ui/card";
import CrossSVG from "./CrossSVG";
import SuccessSVG from "./SuccessSVG";

export default function UserHistory({ onRamp, p2pReceived, p2pSend }: any) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
      <Card title="OnRamp History">
        {onRamp.length > 0 ? (
          onRamp.map((t: any) => (
            <div
              key={t.startTime}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm mb-4 border border-gray-200"
            >
              <div>
                <div className="text-sm font-medium text-gray-700">
                  Received INR
                </div>
                <div className="text-slate-600 text-xs">
                  {t.startTime.toDateString()}
                </div>
              </div>

              <div className="flex items-center mx-3">
                <p
                  className={`mr-2 font-medium ${t.status === "Success" ? "text-green-500" : "text-red-500"}`}
                >
                  {t.status}
                </p>
                <p>{t.status === "Success" ? <SuccessSVG /> : <CrossSVG />}</p>
              </div>

              <div className="flex flex-col justify-center text-right">
                <p className="text-lg font-semibold text-gray-900">
                  + ₹ {t.amount / 100}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center pb-8 pt-8">
            No OnRamp transactions available
          </div>
        )}
      </Card>
      <Card title="P2P History">
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">P2P Sent</h3>
          <div className="space-y-4">
            {p2pSend.length > 0 ? (
              p2pSend.map((transfer: any) => (
                <div
                  key={transfer.id}
                  className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200"
                >
                  <p>
                    <strong>ID:</strong> {transfer.id}
                  </p>
                  <p>
                    <strong>Amount Sent:</strong> ₹{transfer.amount / 100}
                  </p>
                  <p>
                    <strong>Date:</strong> {transfer.timestamp.toDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No sent transfers available.</p>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">P2P Received</h3>
          <div className="space-y-4">
            {p2pReceived.length > 0 ? (
              p2pReceived.map((transfer: any) => (
                <div
                  key={transfer.id}
                  className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200"
                >
                  <p>
                    <strong>ID:</strong> {transfer.id}
                  </p>
                  <p>
                    <strong>Amount Received:</strong> ₹{transfer.amount / 100}
                  </p>
                  <p>
                    <strong>Date:</strong> {transfer.timestamp.toDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No received transfers available.</p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
