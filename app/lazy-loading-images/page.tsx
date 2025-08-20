import Section from "@/components/section/section";
import RandomImage from "./components/random-image";
import { imageIds } from "./data";

function Credits() {
  const linkedinPostUrl =
    "https://www.linkedin.com/posts/midudev_trucazo-de-css-para-crear-sombras-inteligentes-activity-7315734460220502016-ukHl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB_taV4Bf1m8Lt8bnbr4Vr8mDU8zSccsvSE";

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-muted-foreground text-sm">
        Images from{" "}
        <a
          href="https://picsum.photos/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-700 hover:text-yellow-800"
        >
          picsum.photos
        </a>
      </p>
      <p className="text-muted-foreground text-sm">
        Inspired by{" "}
        <a
          href={linkedinPostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-700 hover:text-yellow-800"
        >
          this post{" "}
        </a>
        by midudev
      </p>
    </div>
  );
}

export default async function LazyLoadingImages() {
  const imageIdsToRender = imageIds.sort(() => Math.random() - 0.5).slice(0, 4);
  return (
    <Section
      title="Lazy-loading images"
      subtitle="Lazy load images with dynamic shadow"
      credits={<Credits />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {imageIdsToRender.map((id, index) => (
          <RandomImage key={index} id={id} />
        ))}
      </div>
    </Section>
  );
}
