import React, { useEffect } from "react";

export default function useOnScreen(
  ref: any,
  fn: Function,
  rootMargin: string = "0px"
): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        fn();
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);
}
