"use client";
import { useEffect, useState } from "react";

export default function LinkHandler() {
  const [lastOpened, setLastOpened] = useState<number | null>(null);
  const redirectLink = "https://play.xoc88.fun?code=86178";
  const delay = 120000;
  useEffect(() => {
    const storedTime = localStorage.getItem("lastOpened");
    if (storedTime) {
      setLastOpened(parseInt(storedTime, 10));
    }
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a");
      if (!target || !(target instanceof HTMLAnchorElement) || !target.href) return;

      event.preventDefault(); // Ngăn hành vi mặc định của trình duyệt

      const now = Date.now();
      if (lastOpened === null || now - lastOpened >= delay) {
        window.open(redirectLink, "_blank"); // Mở cửa sổ mới
        setLastOpened(now);
        localStorage.setItem("lastOpened", now.toString());
      }

      // Điều hướng trang chính mà không reload
      window.location.assign(target.href);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [lastOpened]);

  return null;
}
