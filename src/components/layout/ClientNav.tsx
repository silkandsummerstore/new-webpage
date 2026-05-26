"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";

export function ClientNav() {
  const pathname = usePathname();
  const transparent = pathname === "/";
  return <Navigation transparent={transparent} />;
}
