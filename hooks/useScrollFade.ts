"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollFade() {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (domRef.current) {
        const rect = domRef.current.getBoundingClientRect()

        // If the element enters the viewport, set isVisible to true
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setVisible(true)
        } else {
          setVisible(false) // If the element goes out of the viewport, set isVisible to false
        }
      }
    }

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll)

    // Trigger the scroll effect on mount
    handleScroll()

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])  // Empty dependency array to run only on mount

  return { domRef, isVisible }
};
