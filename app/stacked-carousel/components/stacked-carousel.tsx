"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function StackedCarousel({ items, iddleDuration = 1.5 }: { items: React.ReactNode[], iddleDuration?: number }) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [currentAppIndex, setCurrentAppIndex] = useState(0);

  const backStack = useRef<HTMLLIElement>(null);
  const middleStack = useRef<HTMLLIElement>(null);
  const appRefs = useRef<(HTMLLIElement | null)[]>(
    Array(items.length).fill(null)
  );

  useEffect(() => {
    if (!containerRef.current) return;

    appRefs.current.forEach((appRef, index) => {
      if (!appRef) return;
      
      if (index === currentAppIndex) {
        gsap.set(appRef, {
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 2
        });
      } else {
        gsap.set(appRef, {
          y: -16,
          scale: 0.9,
          opacity: 0,
          zIndex: 1
        });
      }
    });

    const nextIndex = (currentAppIndex + 1) % items.length;
    const currentAppRef = appRefs.current[currentAppIndex];
    const nextAppRef = appRefs.current[nextIndex];

    const timeline = gsap.timeline({ repeat: -1, yoyo: true });

    timeline
      .to({}, { duration: iddleDuration })
      .to(middleStack.current, {
        y: -12,
        opacity: 1,
        scale: 0.90,
        duration: 0,
      })
      .to(middleStack.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
      }, "transition")
      .to(backStack.current, {
        y: 6,
        duration: 0,
      }, "transition")
      .to(currentAppRef, {
        y: 20,
        scale: 0.9,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      }, "transition")
      .to(nextAppRef, {
        opacity: 1,
        zIndex: 2,
        duration: 0,
      }, "transition")
      .to(nextAppRef, {
        y: 0,
        scale: 1,
        duration: 0.5,
      }, "transition")
      .to(backStack.current, {
        y: 0,
        duration: 0.5,
        ease: "elastic.inOut"
      }, "transition+=0.1")
      .call(() => {
        setCurrentAppIndex(nextIndex);
      });

    return () => {
      timeline.kill();
    };
  }, [currentAppIndex, items, iddleDuration]);

  return (
    <ul ref={containerRef} className="relative size-22 flex flex-col items-center justify-center gap-2">
      <li
        ref={backStack}
        className="absolute -top-4 size-16 bg-gray-100 rounded-[18px] -z-1"
      />
      <li
        ref={middleStack}
        className="absolute -top-2 size-19 bg-gray-300 rounded-[20px] z-0"
      />

      {items.map((item, index) => (
        <li
          key={index}
          ref={el => { appRefs.current[index] = el; }}
          className="absolute"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}