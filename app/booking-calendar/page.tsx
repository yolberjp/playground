import InspiredBy from "@/components/inspiredBy";
import Section from "@/components/section/section";
import Reservation from "./components/reservation";


export default function BookingCalendar() {
    return (
        <Section title="Booking calendar" subtitle="a modern booking calendar" credits={<InspiredBy name="the fork" href="https://www.thefork.es/" />}>
            <Reservation />
        </Section>
      )
}