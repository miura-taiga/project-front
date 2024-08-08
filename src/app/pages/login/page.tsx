"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth";

const LoginPage = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { setToken, currentUser } = useAuth();

  useEffect(() => {
    setIsClient(true);  // クライアントサイドレンダリングを確認するためのフラグを設定
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setToken(token);
      localStorage.setItem("auth", token);
    }
  }, [setToken]);

  const handleGoogleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.createElement("form");
    form.method = "GET";
    form.action = `${process.env.NEXT_PUBLIC_API_URL}/auth/google_oauth2`;
    document.body.appendChild(form);
    form.submit();
  };

  if (!isClient) {
    return null;  // サーバーサイドレンダリング中は何も表示しない
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="space-y-4">
        <button className="btn btn-accent gap-2 w-full" onClick={handleGoogleAuth}>
          Googleログイン
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
