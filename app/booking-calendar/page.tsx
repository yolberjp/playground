import Section from "@/components/section/section";
import Reservation from "./components/reservation";
import InspiredBy from "@/components/inspiredBy";


export default function BookingCalendar() {
    return (
        <Section title="Booking calendar" subtitle="a modern booking calendar" credits={<InspiredBy name="the fork" href="https://www.thefork.es/" />}>>
            <Reservation />
        </Section>
      )
}