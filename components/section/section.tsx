import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Section({
    title,
    subtitle,
    inspiredBy,
    children,
  }: Readonly<{
    title: string,
    subtitle?: string,
    children: React.ReactNode;
    inspiredBy?: {
        name: string,
        href: string
    }
  }>){
    return (
        <section className="flex flex-col gap-12 md:gap-8 row-start-2 items-center sm:items-start h-full">
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

          {inspiredBy && <footer className="flex justify-center w-full py-4">
            <p className="text-muted-foreground text-sm">Inspired by <a href={inspiredBy.href} target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-800">{inspiredBy.name}</a> design</p>
          </footer>}
        </section>
      )
}