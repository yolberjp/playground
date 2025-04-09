import Image from "next/image";
import "./styles.css";

interface Image {
    width: number;
    height: number;
    url: string;
}

export default function LazyLoadImage({ image, blurImageUrl, onClick }: { image: Image, blurImageUrl: string, onClick: () => void }) {

    return (
        <div className="transition-all duration-500 ease-in-out">
            <div className="image-container relative w-[200px] h-[200px] rounded-md cursor-pointer" style={{ backgroundImage: `url(${blurImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}} onClick={onClick}>
                <Image
                    src={image.url}
                    alt={`Random image from picsum`}
                    width={image.width}
                    height={image.height}
                    className="rounded-md duration-300 ease-in-out hover:opacity-80"
                    onDragStart={(e) => e.preventDefault()}
                    placeholder="blur"
                    blurDataURL={blurImageUrl}
                    loading="lazy"
                />
            </div>
        </div>
        
    )
}