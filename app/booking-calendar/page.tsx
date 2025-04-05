import Section from "@/components/section/section";
import Reservation from "./components/reservation";

const inspiredBy = {
    name: "the fork",
    href: "https://www.thefork.es/"
  }

export default function BookingCalendar() {
    return (
        <Section title="Booking calendar" subtitle="a modern booking calendar" inspiredBy={inspiredBy}>
            <Reservation />
        </Section>
      )
}