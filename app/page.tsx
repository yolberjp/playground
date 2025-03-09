import { Separator } from "@/components/ui/separator";
import { Shapes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="flex flex-row items-center">
          <Shapes className="h-10 w-10 text-yellow-500"/>
          <h1 className="text-7xl font-semibold">Playground</h1>
        </div>
        <p className="text-gray-400 ">A space to put new things into practice and experiment without fear of breaking anything.</p>
      </header>

      <Separator />


      <section className="space-y-4">
        <header>
          <h3 className="text-md italic text-gray-500">The last cooked components:</h3>
        </header>
        <ul className="px-10 md:px-20 list-disc">
          <li>
            <Link href="booking" className="hover:text-yellow-800">
              Booking by steps
            </Link>
          </li>
        </ul>
      </section>
      
    </div>
  );
}
