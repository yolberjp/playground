import { Separator } from "@/components/ui/separator";
import { Calendar, RectangleHorizontal, Shapes } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "/brutalist-buttons",
    label: "Brutalist buttons",
    icon: <RectangleHorizontal />
  },  
  {
    href: "/booking-calendar",
    label: "Booking calendar",
    icon: <Calendar />
  },
];

export default function Home() {
  return (
    <div className="flex flex-col pb-20 gap-10 py-15 px-10 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <header className="space-y-4">
        <div className="flex flex-row sm:gap-4 items-center">
          <Shapes className="h-10 w-10 text-yellow-500"/>
          <h1 className="text-5xl sm:text-7xl font-semibold">Playground</h1>
        </div>
        <p className="text-sm sm:text-lg text-gray-400">A space to put new things into practice and experiment without fear of breaking anything.</p>
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
