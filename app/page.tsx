import { Separator } from "@/components/ui/separator";
import { Calendar, RectangleHorizontal, Shapes } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "/booking",
    label: "Booking by steps",
    icon: <Calendar />
  },
  {
    href: "/brutalist-buttons",
    label: "Brutalist buttons",
    icon: <RectangleHorizontal />
  },  
];

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
        <ul className="px-10 md:px-20 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-yellow-800 flex flex-row items-center gap-2">
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      
    </div>
  );
}
