"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-solid">
      {/* LEFT */}
      <div className="flex items-center gap-10 cursor-pointer">
        <Image
          src="/logo.svg"
          onClick={() => {
            window.location.href = "/";
          }}
          width={173}
          height={39}
          alt="LinkHub"
        />
        <Link
          href="/"
          className={
            pathName === "/"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/links"
          className={
            pathName === "/links"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Links
        </Link>
      </div>
      {/* RIGHT */}
      <UserButton showName />
    </nav>
  );
};

export default NavBar;
