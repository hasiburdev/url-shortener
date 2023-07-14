"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";
export const Navbar = () => {
  return (
    <div className="w-full ">
      <nav className="flex items-center justify-between mb-2">
        <div>Logo</div>
        <div className="flex items-center gap-4 grow justify-center">
          <Link href="/" className="leading-7 text-muted-foreground">
            Home
          </Link>
          <Link href="#links" className="leading-7 text-muted-foreground">
            All Links
          </Link>
        </div>
        <div>Dark Mode</div>
      </nav>
      <Separator />
    </div>
  );
};
