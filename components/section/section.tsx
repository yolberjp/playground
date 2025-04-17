import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ItemNavigation from "../item-navigation/item-navigation";

export default function Section({
    title,
    subtitle,
    credits,
    children,
  }: Readonly<{
    title: string,
    subtitle?: string,
    children: React.ReactNode;
    credits?: React.ReactNode;
  }>){
    return (
        <div className="flex flex-col justify-between h-full">
          <section className="flex flex-col gap-12 md:gap-8 row-start-2 items-center sm:items-start">
            <header className="px-0 md:px-10 w-full">
              <div className="flex flex-row gap-1 w-full">
                <Button variant="ghost" asChild>
                    <Link href="/"><ChevronLeft /></Link>
                </Button>
                <div className="flex flex-col gap-1 w-full">
                    <h1 className="text-3xl font-bold text-yellow-800">{title}</h1>
                    {subtitle && <span className="text-muted-foreground text-sm">{subtitle}</span>}
                </div>
              </div>
            </header>
            <div className="flex items-center justify-center px-5 md:px-10 w-full">
              {children}
            </div>
            {credits && <footer className="flex justify-center w-full py-4">
              {credits}
            </footer>}
          </section>

          <ItemNavigation />
        </div>
      )
}