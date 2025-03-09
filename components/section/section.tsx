import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function({
    title,
    subtitle,
    children,
  }: Readonly<{
    title: string,
    subtitle?: string,
    children: React.ReactNode;
  }>){
    return (
        <section className="flex flex-col pt-20 gap-8 row-start-2 items-center sm:items-start">
          <header className="flex flex-row gap-1 px-10">
            <Button variant="ghost" asChild>
                <Link href="/"><ChevronLeft /></Link>
            </Button>
            <div>
                <h1 className="text-3xl font-bold text-yellow-800">{title}</h1>
                {subtitle && <span className="text-muted-foreground text-sm">{subtitle}</span>}
            </div>
          </header>
    
          <div className="flex items-center justify-center w-full">
            {children}
          </div>
        </section>
      )
}