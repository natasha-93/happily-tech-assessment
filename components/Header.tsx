import Link from "next/link";
import Button from "./Button";

const Header = () => (
  <header className="px-24 py-3 bg-lightBlue-900 text-white">
    <div className="flex justify-end pb-3">
      <Link href="/">
        <a className="text-sm font-extralight">LOG IN</a>
      </Link>
    </div>
    <nav className="flex items-center">
      <img width="121" height="50" src="/images/logo.png" />
      <Link href="/">
        <a className="ml-8 text-sm">SERVICES</a>
      </Link>
      <Link href="/">
        <a className="ml-8 text-sm">WHY HAPPILY</a>
      </Link>
      <Link href="/">
        <a className="ml-8 text-sm">PRICING</a>
      </Link>
      <div className="flex-1" />
      <Button size="small" color="white" className="mr-4">
        TALK TO TEAM
      </Button>
      <Button size="small" color="black">
        DOWNLOAD GUIDE
      </Button>
    </nav>
  </header>
);

export default Header;
