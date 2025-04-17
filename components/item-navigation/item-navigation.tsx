'use client'

import { useItemNavigation } from "@/app/__shared/hooks/useItemNavigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ItemNavigation() {
    const {previousItem, nextItem} = useItemNavigation();
    return (
            <div className="flex justify-between w-full text-xs py-10 text-gray-400 text-center md:text-right">
                <Link href={previousItem.href} className="flex flex-col items-start group">
                    <span className="text-xs flex flex-row items-center gap-1">
                        <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /> 
                        Previous
                    </span>
                    <span className="text-sm font-bold group-hover:text-yellow-700 transition-colors pl-5"> {previousItem.label}</span>
                </Link>

                <Link href={nextItem.href} className="flex flex-col items-end group">
                    <span className="text-xs flex flex-row items-center gap-1">
                        Next
                        <ArrowRight className="w-4 h-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /> 
                    </span>
                    <span className="text-sm font-bold group-hover:text-yellow-700 transition-colors pr-5"> {nextItem.label}</span>
                </Link>
            </div>
    )

    // max-w-6xl pt-20 m-auto px-2 md:px-5 h-screen
}