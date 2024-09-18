"use client";

import { AppStore } from "@repo/store/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={AppStore}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </div>
  );
}
