"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";

import { useTheme } from "next-themes";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState(false);
  console.log(theme);

  useEffect(() => {
    setChecked(theme === "dark");
  }, []);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setChecked(false);
    } else {
      setTheme("dark");
      setChecked(true);
    }
  };
  return (
    <div className="w-full ">
      <nav className="flex items-center justify-between mb-2">
        <div className="font-mono font-semibold">
          <Link href="/">Url Shortener</Link>
        </div>
        <div className="flex items-center gap-4 grow justify-center">
          <Link href="/" className="leading-7 text-muted-foreground">
            Home
          </Link>
          <Link href="/links" className="leading-7 text-muted-foreground">
            All Links
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch
            id="dark-mode"
            checked={checked}
            onCheckedChange={changeTheme}
          />
        </div>
      </nav>
      <Separator />
    </div>
  );
};
