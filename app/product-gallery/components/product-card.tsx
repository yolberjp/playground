import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  currency?: string;
  previousPrice?: number;
  imageUrl: string;
}

export default function ProductCard({
  title,
  price,
  currency = "USD",
  previousPrice,
  imageUrl,
}: ProductCardProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  return (
    <div className="group rounded-lg transition-all duration-300 overflow-visible p-2 border border-gray-200 bg-gray-50 ">
      <div className="relative w-full h-60 rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={300}
          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-10"
        />
      </div>

      <div className="p-4 relative">
        <h3 className="font-medium text-gray-900 line-clamp-2 text-center text-xl font-serif transition-transform duration-300 group-hover:-translate-y-10">
          {title}
        </h3>

        <div className="flex items-center gap-2 justify-center transition-transform duration-300 group-hover:-translate-y-10">
          {previousPrice && (
            <span className="text-xs text-gray-500 line-through font-serif">
              {formatPrice(previousPrice, currency)}
            </span>
          )}
          <span className="text-sm font-semibold text-gray-700 font-serif">
            {formatPrice(price, currency)}
          </span>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 px-2">
          <Button className="flex-1 bg-green-900 hover:bg-green-800 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-serif rounded-xl h-10 cursor-pointer">
            Order now
          </Button>
          <Button
            variant="outline"
            className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-xl h-10 cursor-pointer"
          >
            <ShoppingBagIcon className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
}
