import type { ReactNode } from "react";
import "@heroui/styles";

export function Provider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
