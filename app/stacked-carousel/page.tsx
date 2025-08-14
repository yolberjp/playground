import Section from "@/components/section/section";
import StackedCarousel from "./components/stacked-carousel";

export default function StackedCarouselPage() {
  return (
    <Section
          title="Stacked Carousel"
          subtitle="Vertical carousel ideal for showcasing app icons or images."
          credits={<Credits />}
        >
      <div className="flex flex-col items-center gap-8">
        <StackedCarousel />
        <h2 className="text-7xl text-center font-semibold font-sans max-w-4xl">Discover real-world design inspiration.</h2>
      </div>
    </Section>


  );
}

function Credits() {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-muted-foreground text-sm">
        Inspired by{" "}
        <a
          href="https://mobbin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-700 hover:text-yellow-800"
        >
          mobbin website
        </a>
      </p>
    </div>
  );
}