import Section from "@/components/section/section";
import { FacebookIcon, InstagramIcon, SnapchatIcon, TelegramIcon, ThreadsIcon, TikTokIcon, WhatsappIcon, XIcon } from "./components/AppIcons";
import StackedCarousel from "./components/stacked-carousel";

const ITEMS = [
  <InstagramIcon key="instagram" />,
  <XIcon key="x" />,
  <WhatsappIcon key="whatsapp" />,
  <SnapchatIcon key="snapchat" />,
  <TikTokIcon key="tiktok" />,
  <ThreadsIcon key="threads" />,
  <FacebookIcon key="facebook" />,
  <TelegramIcon key="telegram" />
]

export default function StackedCarouselPage() {

  return (
    <Section
          title="Stacked Carousel"
          subtitle="Vertical carousel ideal for showcasing app icons or images."
          credits={<Credits />}
        >
      <div className="flex flex-col items-center gap-8">
        <StackedCarousel items={ITEMS} iddleDuration={1.4}/>
        <h2 className="text-5xl md:text-6xl text-center font-semibold font-sans max-w-2xl">Stay in touch anytime<span className="text-muted-foreground/50">,</span> <br /> from anywhere<span className="text-muted-foreground/50">.</span></h2>
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