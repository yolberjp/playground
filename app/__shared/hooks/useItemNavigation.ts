'use client'

import { usePathname } from "next/navigation";
import { links } from "../data/links";
export const useItemNavigation = () => {

    const pathname = usePathname();

    const currentIndex = links.findIndex((item) => item.href === pathname);

    const nextItem = currentIndex === links.length - 1 ? links[0] : links[currentIndex + 1];
    const previousItem = currentIndex === 0 ? links[links.length - 1] : links[currentIndex - 1];

    return {
        nextItem,
        previousItem,
    }
};