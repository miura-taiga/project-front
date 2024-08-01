// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function Home() {
//   // 背景画像のURL
//   const backgroundImage = "https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3825274/df8dd506-758c-8e8d-b8d6-c9dcd52a8f67.png";

//   // 仮のログイン状態（実際のアプリではAPIなどから取得する）
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <>
//       {/* ヘッダー */}
//       <header className="bg-black bg-opacity-70 text-white py-4 md:py-5 px-5 md:px-10 flex justify-between items-center backdrop-blur-md fixed w-full z-50 shadow-lg">
//         <nav className="flex gap-4">
//           <Link href="/top" legacyBehavior>
//             <a className="text-lg md:text-xl font-semibold text-white bg-transparent hover:bg-white hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-md transition duration-300 shadow-lg">
//               RUNTEQ LOVE
//             </a>
//           </Link>
//         </nav>
//         <nav className="flex gap-4">
//           {!isLoggedIn ? (
//             <Link href="/login" legacyBehavior>
//               <a className="text-lg md:text-xl font-semibold text-white bg-transparent hover:bg-white hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-md transition duration-300 shadow-lg">
//                 ログイン
//               </a>
//             </Link>
//           ) : (
//             <Link href="/matchings/start" legacyBehavior>
//               <a className="text-lg md:text-xl font-semibold text-white bg-transparent hover:bg-white hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-md transition duration-300 shadow-lg">
//                 マッチング
//               </a>
//             </Link>
//           )}
//         </nav>
//       </header>

//       {/* メインセクション */}
//       <main
//         className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4 pt-20 md:pt-24"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         <div className="relative z-10 mt-20 mb-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg">
//             Welcome to RUNTEQ LOVE
//           </h1>
//         </div>

//         <div className="relative z-10 mt-auto mb-20 text-center">
//           <p className="text-lg md:text-xl mb-10 md:mb-20 text-shadow-md">
//             RUNTEQ LOVEへようこそ!
//             <br />
//             恋愛に悩んでるそこのあなた!プログラミングだけじゃ満足できない？
//             <br />
//             そんなあなたにピッタリのアプリがここにあります。
//             <br />
//             RUNTEQ LOVEは、RUNTEQ内で結婚相手を見つけるマッチングサイトとなっています。
//             <br />
//             理想の結婚相手を見つけて周りと差をつけましょう!
//             <br />
//             さあ、エラーメッセージばかり見てないで、素敵な出会いを見つけましょう！
//             <br />
//             あなたのコードを見ただけでドキドキする相手がいるかもしれません。
//             <br />
//             コンソールログに幸せのメッセージを表示させましょう！
//             <br />
//             もしかしたら、あなたのエラーログを一緒にデバッグしてくれるパートナーが見つかるかも。
//             <br />
//             バグフィックスだけじゃなく、愛もフィックスしちゃいましょう！
//             <br />
//             RUNTEQ LOVEで、あなたの人生のプルリクエストを送りましょう!
//             <br />
//           </p>
//           <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
//             {isLoggedIn && (
//               <Link href="/matchings/start" legacyBehavior>
//                 <a className="text-white bg-pink-500 hover:bg-pink-700 transition duration-300 px-8 py-4 rounded-md shadow-md text-lg w-full md:w-[200px] h-[60px] flex items-center justify-center">
//                   マッチングする
//                 </a>
//               </Link>
//             )}
//             {!isLoggedIn && (
//               <Link href="/login" legacyBehavior>
//                 <a className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-md shadow-md text-lg w-full md:w-[200px] h-[60px] flex items-center justify-center">
//                   ログインする
//                 </a>
//               </Link>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* フッター */}
//       <footer className="bg-black bg-opacity-70 text-white py-4 px-10 flex justify-center items-center backdrop-blur-md fixed bottom-0 w-full shadow-lg">
//         <p className="text-shadow-md text-sm md:text-base">&copy; 2024 RUNTEQ LOVE. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RecoilRoot, useRecoilState } from "recoil";
import * as Components from "@/features/components";
import { loggedInState } from "@/atoms";

const MainContent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);

  useEffect(() => {
    // 仮のログイン状態を設定
    // 実際のアプリではAPIなどから取得する
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  // 背景画像のURL
  const backgroundImage =
    "https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3825274/df8dd506-758c-8e8d-b8d6-c9dcd52a8f67.png";

  return (
    <>
      <Components.Headers />

      <main
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4 pt-20 md:pt-24"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 mt-20 mb-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg">
            Welcome to RUNTEQ LOVE
          </h1>
        </div>

        <div className="relative z-10 mt-auto mb-20 text-center">
          <p className="text-lg md:text-xl mb-10 md:mb-20 text-shadow-md">
            RUNTEQ LOVEへようこそ!
            <br />
            恋愛に悩んでるそこのあなた!プログラミングだけじゃ満足できない？
            <br />
            そんなあなたにピッタリのアプリがここにあります。
            <br />
            RUNTEQ
            LOVEは、RUNTEQ内で結婚相手を見つけるマッチングサイトとなっています。
            <br />
            理想の結婚相手を見つけて周りと差をつけましょう!
            <br />
            さあ、エラーメッセージばかり見てないで、素敵な出会いを見つけましょう！
            <br />
            あなたのコードを見ただけでドキドキする相手がいるかもしれません。
            <br />
            コンソールログに幸せのメッセージを表示させましょう！
            <br />
            もしかしたら、あなたのエラーログを一緒にデバッグしてくれるパートナーが見つかるかも。
            <br />
            バグフィックスだけじゃなく、愛もフィックスしちゃいましょう！
            <br />
            RUNTEQ LOVEで、あなたの人生のプルリクエストを送りましょう!
            <br />
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
            {isLoggedIn && (
              <Link href="/matchings/start" legacyBehavior>
                <a className="text-white bg-pink-500 hover:bg-pink-700 transition duration-300 px-8 py-4 rounded-md shadow-md text-lg w-full md:w-[200px] h-[60px] flex items-center justify-center">
                  マッチングする
                </a>
              </Link>
            )}
            {!isLoggedIn && (
              <Link href="login" legacyBehavior>
                <a className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-md shadow-md text-lg w-full md:w-[200px] h-[60px] flex items-center justify-center">
                  ログインする
                </a>
              </Link>
            )}
          </div>
        </div>
      </main>

        <Components.Footers />
    </>
  );
};

const Page: React.FC = () => {
  return (
    <RecoilRoot>
      <MainContent />
    </RecoilRoot>
  );
};

export default Page;
