import { Button } from "@/components/ui/button";
import {
  MountainIcon,
  ShoppingBagIcon,
  UtensilsIcon,
  SandwichIcon,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import hero from "../../public/hero.jpg";
import HeroNavigation from "@/components/HeroNavigation";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <main className="flex flex-col min-h-[100dvh] bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </header>
        <section className="flex-1">
          <div className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-slate-800 ">
                    Introducing
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Your Personal Budget Tracker
                  </h1>
                  <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Track your spending, manage your budget, and take control of
                    your finances with our easy-to-use budget tracker app.
                  </p>
                  <HeroNavigation />
                </div>
                <Image
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl h-[400px] w-[600px] object-cover object-center"
                  src={hero}
                  priority
                />
              </div>
            </div>
          </div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-6 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 text-slate-800 px-3 py-1 text-sm ">
                    Expense Tracker
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                    Track your spending
                  </h2>
                  <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Easily add your expenses and see where your money is going
                    with our intuitive expense tracking tools.
                  </p>
                </div>
                {cards.map((card, index) => (
                  <Card key={index} className="w-full max-w-sm">
                    <CardContent className="p-4 grid gap-4">
                      <card.icon className="mx-auto h-10 w-10" />
                      <div className="grid gap-0.5">
                        <h3 className="text-sm font-bold tracking-wide uppercase text-gray-500 ">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-500 ">
                          Money spent: {card.amount}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the budget tracking that top finance teams love.
                </h2>
                <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let your team focus on managing finances instead of tracking
                  them with our automated budget tracker.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs  ">
                  Sign up to get notified when we launch.
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gradient-to-br from-pink-800 via-purple-700 to-indigo-600
      "
      >
        <p className="text-xs ">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
}

const cards = [
  {
    icon: ShoppingBagIcon,
    title: "Groceries",
    amount: "₹2000",
  },
  {
    icon: UtensilsIcon,
    title: "Dining",
    amount: "₹1500",
  },
  {
    icon: SandwichIcon,
    title: "Transport",
    amount: "₹10000",
  },
];
