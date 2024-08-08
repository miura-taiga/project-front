"use client";

import "./globals.css";
import { AuthProvider } from "@/contexts/auth";
import { RecoilRoot } from "recoil";
import * as Components from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <RecoilRoot>
          <Components.Headers />
          <AuthProvider>{children}</AuthProvider>
          <Components.Footers />
        </RecoilRoot>
      </body>
    </html>
  );
}
