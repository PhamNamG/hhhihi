"use client";

import { useState, useEffect } from "react";

export function useSeasonTheme() {
  const [theme, setTheme] = useState("spring"); // Default là 'spring'

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth(); // Tháng (0 = Tháng 1)

    if (month >= 2 && month <= 4) setTheme("spring"); // Xuân: T3 - T5
    else if (month >= 5 && month <= 7) setTheme("summer"); // Hè: T6 - T8
    else if (month >= 8 && month <= 10) setTheme("fall"); // Thu: T9 - T11
    else setTheme("winter"); // Đông: T12 - T2
  }, []);

  return theme;
}
