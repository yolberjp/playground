import Section from "@/components/section/section";
import "./styles.css";

export default function TextHeroCardPage(){

    return (
        <Section
            title="Text hero card"
            subtitle="A simple hero card with a moving gradient text background"
            credits={<Credits />}
        >
        <div className="flex flex-col items-center justify-center w-xl bg-gray-800 rounded-[62] p-12">
            <div className="moving-gradient font-sans font-medium text-7xl text-center whitespace-pre-line bg-clip-text text-transparent flex flex-col items-center">
              <span className="block">Made</span>
              <span className="block">by</span>
              <span className="block">Google</span>
            </div>
        </div>
        </Section>
    )

}

function Credits() {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-muted-foreground text-sm">
        Inspired by {" "}
        <a
          href="https://www.youtube.com/watch?v=JXCXTQIIvM0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-700 hover:text-yellow-800"
        >
            this google
        </a> presentation.
      </p>
    </div>
  );
}