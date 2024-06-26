"use client";
import Link from "next/link";
import React from "react";
import Logo, { LogoMobile } from "./Logo";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNav />
    </>
  );
};

const items = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Transactions",
    link: "/dashboard/transactions",
  },
  {
    label: "Manage",
    link: "/dashboard/manage",
  },
];

const DesktopNavBar = () => {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex item-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavBarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </div>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[320px] sm:w-[540px]" side={"left"}>
            <Logo />
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavBarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex h-[8-px] min-h-[60px] items-center gap-x-4">
          <LogoMobile />
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </div>
  );
};

const NavBarItem = ({
  label,
  link,
  onClick: _onClick,
}: Readonly<{
  label: string;
  link: string;
  onClick?: () => void;
}>) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
        onClick={() => {
          if (_onClick) {
            _onClick();
          }
        }}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
};

export default NavBar;
