import Link from "next/link";
import { useRecoilValue } from "recoil";
import { loggedInState } from "@/atoms";

const Header: React.FC = () => {
  const isLoggedIn = useRecoilValue(loggedInState);

  return (
    <header className="bg-black bg-opacity-70 text-white py-4 md:py-5 px-5 md:px-10 flex justify-between items-center backdrop-blur-md fixed w-full z-50 shadow-lg">
      <nav className="flex gap-4">
        <Link href="top" legacyBehavior>
          <a className="text-lg md:text-xl font-semibold text-white bg-transparent hover:bg-white hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-md transition duration-300 shadow-lg">
            RUNTEQ LOVE
          </a>
        </Link>
      </nav>
      <nav className="flex gap-4">
        {!isLoggedIn ? (
          <Link href="login" legacyBehavior>
            <a className="text-lg md:text-xl font-semibold text-white bg-transparent hover:bg-white hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-md transition duration-300 shadow-lg">
              ログイン
            </a>
          </Link>
        ) : (
          <Link href="/matchings/start" legacyBehavior>
            <a className="text-lg md:text-xl font-semibold text-white bg-transparent hover:bg-white hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-md transition duration-300 shadow-lg">
              マッチング
            </a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
