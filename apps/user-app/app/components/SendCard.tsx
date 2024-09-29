"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2pTransfer";

export default function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div>
      <Center
        Children={
          <Card title="Send">
            <div className="min-w-72 pt-2">
              <TextInput
                placeholder={"Number"}
                label="Number"
                onChange={(value) => {
                  setNumber(value);
                }}
              />
              <TextInput
                placeholder={"Amount"}
                label="Amount"
                onChange={(value) => {
                  setAmount(value);
                }}
              />
              <div className="pt-4 flex justify-center">
                <Button
                  onClick={async () => {
                    await p2pTransfer(number, Number(amount) * 100);
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </Card>
        }
      />
    </div>
  );
}