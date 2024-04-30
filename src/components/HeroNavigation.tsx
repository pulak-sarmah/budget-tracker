"use client";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-gray-50  transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 animate-accordion-down shadow-2xl"
    href={href}
  >
    {children}
  </Link>
);

const HeroNavigation = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      {!user ? (
        <>
          <NavLink href="/sign-in">Sign In</NavLink>
          <NavLink href="/sign-up">Sign Up</NavLink>
        </>
      ) : (
        <NavLink href="/dashboard">Go to Dashboard</NavLink>
      )}
    </div>
  );
};

export default HeroNavigation;
