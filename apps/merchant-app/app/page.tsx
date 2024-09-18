"use clinet";

import { setBalance } from "@repo/store/useBalance";

export default function Home() {
  setBalance(1000);
  return <div>Merchant App</div>;
}
