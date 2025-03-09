import { Button } from "@/components/ui/button";
import Reservation from "./components/booking";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Section from "@/components/section/section";

export default function(){
    return (
        <Section title="Booking by steps" subtitle="a progressive booking form">
            <Reservation />
        </Section>
      )
}