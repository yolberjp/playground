import { CalendarIcon, GalleryVerticalEndIcon, ImageIcon, LayoutGridIcon, RectangleHorizontalIcon, SearchIcon, TypeOutlineIcon } from "lucide-react";

export const links = [
    {
      href: "/text-hero-card",
      label: "Text hero card",
      icon: <TypeOutlineIcon />,
    },
    {
      href: "/stacked-carousel",
      label: "Stacked carousel",
      icon: <GalleryVerticalEndIcon />,
    },
    {
      href: "/product-gallery",
      label: "Product gallery",
      icon: <LayoutGridIcon />
    },
    {
      href: "/lazy-loading-images",
      label: "Lazy-loading images",
      icon: <ImageIcon />
    },
    {
      href: "/debounced-search-input",
      label: "Debounced search input",
      icon: <SearchIcon />
    }, 
    {
      href: "/brutalist-buttons",
      label: "Brutalist buttons",
      icon: <RectangleHorizontalIcon />
    },  
      {
        href: "/booking-calendar",
        label: "Booking calendar",
        icon: <CalendarIcon />
      },
      
  ];