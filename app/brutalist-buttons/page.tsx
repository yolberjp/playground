import Section from "@/components/section/section";
import { Atom, CircleCheck, Ghost } from "lucide-react";
import AnimatedButton from "./components/animated";
import DefaultButton from "./components/default";
import GhostButton from "./components/ghost";
import IconButton from "./components/icon-button";
import TinyButton from "./components/tiny";

const inspiredBy = {
  name: "posthog",
  href: "https://posthog.com/"
}

export default function BrutalistButtons() {
  return (
    <Section title="Brutalist buttons" subtitle="a button with a brutalist design" inspiredBy={inspiredBy}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8 place-items-center">
        <DefaultButton>Default</DefaultButton>

        <IconButton>
          <Atom />
        </IconButton>
        
        <DefaultButton disabled>Disabled</DefaultButton>

        <AnimatedButton icon={<CircleCheck />}>
          Done
        </AnimatedButton>

        <TinyButton>Tiny</TinyButton>

        <GhostButton>
          <span className="flex items-center gap-1">
            <Ghost className="w-5 h-5" /> Ghost
          </span>
        </GhostButton>
      </div>
      
    </Section>
  )
}
