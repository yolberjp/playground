import Section from "@/components/section/section";
import ProductCard from "./components/product-card";
import { products } from "./data";

function Credits() {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-muted-foreground text-sm">
        Inspired by{" "}
        <a
          href="https://www.behance.net/gallery/228927307/Plant-Shop-Web-Design-GreenNest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-700 hover:text-yellow-800"
        >
          this design
        </a>{" "}
        by Hasan Sajjad
      </p>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <Section
      title="Product Gallery"
      subtitle="A list of minimalist product cards"
      credits={<Credits />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            currency={product.currency}
            previousPrice={product.previousPrice}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </Section>
  );
}
