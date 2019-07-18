import { Override } from "framer";
import { data } from "./Warmup";

// Override Docs: https://framer.com/docs/overrides

export function Scale(): Override {
  return {
    animate: { rotate: 360 * 12 },
    transition: { duration: 12 }
  };
}
