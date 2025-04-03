import Section from "@/components/section/section";
import { Atom, CircleCheck } from "lucide-react";
import AnimatedButton from "./components/animated";
import DefaultButton from "./components/default";
import IconButton from "./components/icon";

export default function BrutalistButtons() {
  return <Section title="Brutalist buttons" subtitle="a button with a brutalist design">
  <div className="grid grid-cols-4 gap-4 place-items-center">
    <DefaultButton>Default</DefaultButton>

    <IconButton>
      <Atom />
    </IconButton>
    
    <AnimatedButton icon={<CircleCheck />}>
      Done
    </AnimatedButton>
    
    <DefaultButton disabled>Disabled</DefaultButton>
  </div>
  
</Section>
}
